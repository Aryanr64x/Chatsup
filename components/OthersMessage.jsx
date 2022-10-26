import { Text, View } from "react-native";
import { StyleSheet } from "react-native";

const OthersMessage = ({message})=>{
   
    return (
        <View style={styles.otherMessageWrapper}>
            <Text style={styles.otherMessageText}>
                    {message.text}
            </Text>
        </View>
    );
}


const styles = StyleSheet.create({
    otherMessageWrapper:{
        flexDirection: 'row',
        justifyContent: 'flex-start'
    }, 
    otherMessageText:{
        fontSize: 18,
        backgroundColor: 'rgba(255, 255, 255, 0.4)',
        color: 'black',
        paddingHorizontal: 10,
        paddingVertical: 5,
        marginVertical: 5,
        borderTopLeftRadius: 10,
        borderTopRightRadius: 10,
        borderBottomRightRadius: 10,
        marginLeft: 10,
        elevation: 1,
    }
})
export default OthersMessage;