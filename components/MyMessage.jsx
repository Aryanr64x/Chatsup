import { Text, View } from "react-native";

const MyMessage = ({message})=>{
    console.log("THIS MESSAGE HAS BEEN LOGGED")
    return (
        <View style={{backgroundColor: 'teal', marginVertical: 2, padding: 2}}>
            <Text>
            { message.text }
            </Text>
        </View>
    );
}
export default MyMessage;