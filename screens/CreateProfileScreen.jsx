import React from "react";
import { View, Text, StyleSheet, TextInput, TouchableOpacity } from "react-native";
import formStyle from "../styles/form";
const CreateProfileScreen = () => {
    return (
        <View style={styles.wrapper}>
            <Text style={styles.headerText}>
                Lets Create profile for you baby
            </Text>
            <TextInput placeholder="Enter an username...." style={styles.numberInput} />
            <View style={styles.buttonWrapper}>
                <TouchableOpacity style={styles.button}><Text style={styles.buttonText} >SEND CODE</Text></TouchableOpacity>
            </View>
        </View>
    )
}



const styles = StyleSheet.create({
  ...formStyle,
})

export default CreateProfileScreen;


