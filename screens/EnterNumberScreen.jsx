import React, { useContext, useState } from "react";

import 'react-native-get-random-values'
import { View, Text, StyleSheet, SafeAreaView, TextInput, TouchableOpacity } from "react-native";
import { authContext } from "../contexts/AuthContext";
import formStyles from "../styles/form";
const EnterNumberScreen = ({ navigation })=>{

    const [phoneNumber, setPhoneNumber] = useState("some");
    const auth = useContext(authContext)



    const onPress = async ()=> {

        if(phoneNumber.length === 10){
            
            const resp = await auth.signIn(phoneNumber)
            if(resp.error === null){
                navigation.navigate("EnterCode", {paramKey: phoneNumber,})
            }else{
                console.log(resp.error)
            }

        }else{
            console.log("Enter a valid number");
        }
        
    }

    return (
   <SafeAreaView>
     <View style={styles.wrapper}>
        <Text style={styles.headerText}>
            Enter your phone number
        </Text>
        <Text style={styles.byText}>
            Enter a valid 10 digit phone number and select your correct country code .  
        </Text>
        <TextInput  onChangeText={(val)=>{ setPhoneNumber(val) }}  keyboardType="number-pad"  placeholder="Enter Your Phone Number"  style={styles.numberInput}  />
        <View style={styles.buttonWrapper}>
        <TouchableOpacity style={styles.button} onPress={onPress}><Text style={styles.buttonText} >SEND CODE</Text></TouchableOpacity>

        </View>
    </View>
   </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    ...formStyles
})

export default EnterNumberScreen;