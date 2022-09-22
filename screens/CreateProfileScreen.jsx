import React, { useState } from "react";
import { View, Text, StyleSheet, TextInput, TouchableOpacity } from "react-native";
import Modal from "react-native-modal";
import formStyle from "../styles/form";
import * as ImagePicker from 'expo-image-picker';
import { supabase } from "../supabase/supabase";
import { decode } from 'base64-arraybuffer'
const CreateProfileScreen = () => {

    const [sourceModal, setSourceModal] = useState(false)

    
    const getImage = async(src)=>{
        let result;
        
        if(src==='CAMERA'){
            
             result = await ImagePicker.launchCameraAsync({
                mediaTypes: ImagePicker.MediaTypeOptions.All,
                allowsEditing: true,
                quality: 1,
                base64: true,
              });
              console.log(result)

        }

        if(src === 'GALLERY'){
            result = await ImagePicker.launchImageLibraryAsync({
                mediaTypes: ImagePicker.MediaTypeOptions.All,
                allowsEditing: true,
                quality: 1,
                base64: true,
              });
              console.log(result)


              const resp = await supabase.storage.from('avatars').upload('avatar1.jpg',decode(result.base64), {});
              console.log(resp)

            

        }
    }


    return (
        <View style={styles.wrapper}>
            <Text style={styles.headerText}>
                Lets Create profile for you baby
            </Text>
            <TouchableOpacity style={styles.button} onPress={()=>{setSourceModal(true)}}><Text style={styles.buttonText} > Upload DP </Text></TouchableOpacity>
            <TextInput placeholder="Enter an username...." style={styles.numberInput} />
            <View style={styles.buttonWrapper}>
                <TouchableOpacity style={styles.button}><Text style={styles.buttonText} >SEND CODE</Text></TouchableOpacity>
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


