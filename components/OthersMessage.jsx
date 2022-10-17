import { Text, View } from "react-native";

const OthersMessage = ({message})=>{
   
    return (
        <View style={{backgroundColor: 'green', marginVertical: 2, padding: 2}}>
            <Text>
                    {message.text}
            </Text>
        </View>
    );
}
export default OthersMessage;