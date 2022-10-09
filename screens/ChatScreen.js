import { View, Text } from "react-native";
const ChatScreen = ({ route })=>{
    const otheruser = route.params;
    
    return (
    <View>
        <Text>Chat with{   otheruser.username  }</Text>
    </View>)
}

export default ChatScreen;