import React, { useContext, useState } from "react";
import { View, Text, StyleSheet, TextInput, TouchableOpacity ,ToastAndroid } from "react-native";
import Modal from "react-native-modal";
import formStyle from "../styles/form";
import * as ImagePicker from 'expo-image-picker';
import { supabase } from "../supabase/supabase";
import { authContext } from "../contexts/AuthContext";
import { decode } from 'base64-arraybuffer'

const CreateProfileScreen = () => {

    const [sourceModal, setSourceModal] = useState(false)
    const [username, setUserName] = useState('');
    const [base64, setBase64] = useState(null);
    const auth = useContext(authContext)


    const config = {
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      allowsEditing: true,
      quality: 1,
      base64: true,
    };
    
    const getImage = async(src)=>{
        let result;
        
        if(src==='CAMERA'){
             result = await ImagePicker.launchCameraAsync(config);
             setBase64(result.base64)
        }

        if(src === 'GALLERY'){
            result = await ImagePicker.launchImageLibraryAsync(config);
            setBase64(result.base64)
         
        }
    }

    const uploadImage = async()=>{
      console.log("THE USER ID OF THE LOGGED IN USER IS "+auth.loggedInUser.id)
      const resp = await supabase.storage.from('avatars').upload(`avatar${auth.loggedInUser.id}.jpg`,decode(base64), {});
      console.log(resp)
      return resp.data.path;
    }


    const createProfile = async()=>{
      if(username.length > 3){
          const path = await uploadImage()
          const resp = await supabase.from('profiles').insert({
              user_id: auth.loggedInUser.id,
              username: username,
              avatar_url: path
          })
          if(!resp.error){
            ToastAndroid.show("WOOHOO..WELCOME TO CHATSUP ..THE BEST CHATTING PLATFORM", ToastAndroid.SHORT)
          }
          
      }
    }


    return (
        <View style={styles.wrapper}>
            <Text style={styles.headerText}>
                Lets Create profile for you baby
            </Text>
            <TouchableOpacity style={styles.button} onPress={()=>{setSourceModal(true)}}><Text style={styles.buttonText} > Upload DP </Text></TouchableOpacity>
            <TextInput onChangeText={(val)=>{setUserName(val)}} placeholder="Enter an username...." style={styles.numberInput} />
            <View style={styles.buttonWrapper}>
                <TouchableOpacity style={styles.button} onPress={createProfile}><Text style={styles.buttonText} >UPDATE</Text></TouchableOpacity>
            </View>
            <Modal isVisible={sourceModal}>
                <View style={styles.modalWrapper}>
                    <Text style={styles.modalHeader}>
                        Choose a source
                    </Text>
                    <View style={styles.sourceWrapper}>
                            <TouchableOpacity onPress={()=>{ getImage('CAMERA') }}><Text>CAMERA</Text></TouchableOpacity>
                            <TouchableOpacity onPress={() => { getImage('GALLERY') }}><Text>GALLERY</Text></TouchableOpacity>

                    </View>
                    <TouchableOpacity style={styles.button} onPress={()=>{setSourceModal(false)}}><Text style={styles.buttonText} > Cancel </Text></TouchableOpacity>

                </View>
            </Modal>

        </View>
    )
}



const styles = StyleSheet.create({
  ...formStyle,
  modalWrapper:{
    backgroundColor: 'white',
    paddingTop: 10
  },
  modalHeader:{
    textAlign:'center',
    fontSize: 24,
    
  },
  sourceWrapper:{
    marginTop: 20,
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-around'
  }
})

export default CreateProfileScreen;


