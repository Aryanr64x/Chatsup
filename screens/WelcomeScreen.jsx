import React from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
const WelcomeScreen = ( { navigation } ) => {

    const onPress = ()=>{
        navigation.navigate('EnterNumber');
    }

    return (
    <View style={styles.wrapper}>
        <Text style={styles.title}>C H A T S U P</Text>
        <Text style={styles.byText}>Chat and Connext with your family and friends </Text>

        <TouchableOpacity style={styles.button} onPress={onPress}>
            <Text style={styles.buttonText}>
                GET STARTED
            </Text>
        </TouchableOpacity>
    </View>
    );
}


const styles = StyleSheet.create({
    wrapper:{
        backgroundColor:'teal',    
        minHeight: '100%',
        display: "flex",
        justifyContent: "center",
        alignItems: "center"
    },


    title:{
        color: 'white',
        fontSize: 32,
        fontWeight: "bold"
    },


    byText:{
        color: 'white',
    },

    button:{
        backgroundColor: "#FF5A5F", 
        paddingHorizontal: 20,
        paddingVertical: 10,
        marginTop: 20
    },


    buttonText:{
        color: "white",
        fontWeight: 'bold'
    }


});

export default WelcomeScreen;