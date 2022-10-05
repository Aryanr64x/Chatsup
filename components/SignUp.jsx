import axios from "axios";
import { View, Text, StyleSheet, TextInput, TouchableOpacity, ToastAndroid } from "react-native";
import formStyles from "../styles/form";

const SignUp = ({ setShowSignIn, onAuthenticated }) => {

    let username = '';
    let email = '';
    let password = '';
    let password_confirm = '';


    const signUp = async () => {
        if (password.length == 0 || email.length == 0 || username.length == 0) {
            ToastAndroid.show("Please enter all the fields carefully", ToastAndroid.LONG)
            return;
        }

        if (password !== password_confirm) {
            ToastAndroid.show("Passwords do not match", ToastAndroid.LONG)
            return;
        }

        try {

            const resp = await axios.post('https://6475-2405-201-a409-c204-9cfd-cc7c-f281-f067.ngrok.io/api/auth/signup', {
                username, email, password, password_confirm
            })
            onAuthenticated(resp.data)
        } catch (e) {
            console.log(e);
            ToastAndroid.show("Oops! Something went wrong , try again after sometime",ToastAndroid.LONG);
        }
    }

    return (
        <View>
            <Text style={styles.headerText}>
                Sign Up
            </Text>
            <Text style={styles.byText}>
                Lets create an account by taking your username , email and password
            </Text>
            <TextInput keyboardType="email-address" placeholder="Create an username" style={styles.numberInput} onChangeText={(val)=>{username = val}}/>

            <TextInput keyboardType="email-address" placeholder="Enter a valid email" style={styles.numberInput} onChangeText={(val)=>{email = val}}/>
            <TextInput secureTextEntry={true} placeholder="Enter your password" style={styles.numberInput} onChangeText={(val)=>{password = val}}/>
            <TextInput secureTextEntry={true} placeholder="Enter your password again" style={styles.numberInput} onChangeText={(val)=>{password_confirm = val}}/>
            <View style={styles.buttonWrapper}>
                <TouchableOpacity style={styles.button} onPress={signUp}>
                    <Text style={styles.buttonText}>
                        Sign Up
                    </Text>
                </TouchableOpacity>

            </View>
        </View>
    )
}
const styles = StyleSheet.create({ ...formStyles })

export default SignUp;