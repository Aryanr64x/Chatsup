import { View, Text, StyleSheet, TextInput, TouchableOpacity, ToastAndroid } from "react-native";
import axios from "axios";
import formStyles from "../styles/form";
import BASE_URL from "../BASE_URL";



const SignIn = ({setShowSignIn, onAuthenticated})=>
{

    let email = '';
    let password = '';


    const signIn = async () => {
        if (email.length == 0 || password.length == 0) {
            ToastAndroid.show("Please enter all the fields carefully", ToastAndroid.LONG)
            return;
        }

        try {

            const resp = await axios.post(BASE_URL+'/api/auth/signin', {
                email, password
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
            Sign In
        </Text>
        <Text style={styles.byText}>
            Enter a valid username and password to sign in
        </Text>
        <TextInput keyboardType="email-address"  placeholder="Enter a valid email" style={styles.numberInput}  onChangeText={(val)=>{email = val}} />
        <TextInput secureTextEntry={true} placeholder="Enter your password" style={styles.numberInput}  onChangeText={(val)=>{password = val}} />
        <View style={styles.buttonWrapper}>
            <TouchableOpacity style={styles.button} onPress={signIn}>
                <Text style={styles.buttonText}>
                        Sign In 
                </Text>
            </TouchableOpacity>
           
        </View>
    </View>
    )
}
const styles = StyleSheet.create({...formStyles})

export default SignIn;