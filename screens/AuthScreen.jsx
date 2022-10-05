import { useState } from "react";
import { View, Text, StyleSheet, TextInput, TouchableOpacity } from "react-native";
import SignIn from "../components/SIgnIn";
import SignUp from "../components/SignUp";
import formStyles from "../styles/form";
import { useContext } from "react";
import { authContext } from "../contexts/AuthContext";
const AuthScreen = ({ navigation }) => {

    const [showSignIn, setShowSignIn] = useState(true)
    const auth = useContext(authContext)

    const onAuthenticated = (data)=>{
        auth.setToken(data.token)
        auth.setLoggedInUser(data.user)
        navigation.navigate('HomeScreen')
    }

    return (
        <View style={styles.wrapper}>
            {
                (showSignIn) ? (<SignIn setShowSignIn={setShowSignIn} onAuthenticated={onAuthenticated}/>) : (<SignUp setShowSignIn={setShowSignIn} onAuthenticated={onAuthenticated} />)
            }
            <TouchableOpacity onPress={() => {
                setShowSignIn(!showSignIn)
            }}>
                <Text style={styles.byText}>
                   {
                    (showSignIn) ? "Dont have an account ?" : "Already have an account?"
                   }
                </Text>
            </TouchableOpacity>
        </View>)
}


const styles = StyleSheet.create({ ...formStyles })

export default AuthScreen;