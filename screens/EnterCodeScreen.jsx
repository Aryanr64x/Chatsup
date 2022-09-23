import React, { useContext, useEffect, useState } from "react";
import { View, Text, StyleSheet, TextInput, TouchableOpacity } from "react-native";
import { authContext } from "../contexts/AuthContext";
import { supabase } from "../supabase/supabase";
import formStyles from "../styles/form";


const EnterCodeScreen = ({ navigation ,route}) => {

    const [seconds, setSeconds] = useState(10);
    const [token, setToken] = useState(0)
    const auth = useContext(authContext)

    const onPress = async () => {
        if(token !== 0){
            const resp  = await auth.verifyOTP(token, route.params.paramKey) 
           
            if(!resp.error){
                const userExists = await checkUserExists(resp.data.user.id)
                if(userExists){

                    navigation.navigate("HomeScreen");
                }else{
                   auth.setLoggedInUser({
                    id: resp.data.user.id
                   })
                   navigation.navigate("CreateProfile")
                }
            }else{
                console.log(resp.error)
            }
        }else{
            console.log("Please enter token")
        }
    }


    const checkUserExists = async(id)=>{
        
        const resp = await supabase.from('profiles').select().eq('user_id', id);
        if(resp.data.length != 0){
            return true;
        }

        return false;
    }


    return (
        <View style={styles.wrapper}>
            <Text style={styles.headerText}> Enter 6 digit code sent to your phone number </Text>
            <Text style={styles.headerText}>  { seconds } </Text>
            <TextInput onChangeText={(val) => { setToken(val) }} keyboardType="number-pad" placeholder="Enter the verification Code" style={styles.numberInput} />
            <View style={styles.buttonWrapper}>
                <TouchableOpacity style={styles.button} onPress={onPress}><Text style={styles.buttonText} > VERIFY CODE </Text></TouchableOpacity>

            </View>
        </View>
    );
}


const styles = StyleSheet.create({
    ...formStyles,
})

export default EnterCodeScreen;