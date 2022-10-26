import { Text, View } from "react-native";
import { StyleSheet } from "react-native";

const MyMessage = ({message})=>{
    console.log("THIS MESSAGE HAS BEEN LOGGED")
    return (
        <View style={styles.myMessageWrapper}>
            <Text style={styles.myMessageText}>
            { message.text }
            </Text>
        </View>
    );
}

const styles = StyleSheet.create({
    myMessageWrapper:{
        flexDirection: 'row',
        justifyContent: 'flex-end'
    }, 
    myMessageText:{
        fontSize: 18,
        backgroundColor: 'teal',
        color: 'white',
        paddingHorizontal: 10,
        paddingVertical: 5,
        marginVertical: 5,
        borderTopLeftRadius: 10,
        borderBottomLeftRadius: 10,
        borderTopRightRadius: 10,
        marginRight: 10,
        elevation: 5
      
    }
})

export default MyMessage;