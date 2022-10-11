import { useContext } from 'react';
import { View, Text, FlatList } from 'react-native'
import { authContext } from '../contexts/AuthContext';
import SingleUserList from './SingleUserList';
const ChatsSection = ({navigation})=>{
    const auth = useContext(authContext)
    return (
        <View>
            {
                (auth.loggedInUser.chatrooms.length === 0) ? (<Text>Looks Like there are no chats  around..</Text>) : (
                <FlatList  keyExtractor={(item)=>item._id} data={auth.loggedInUser.chatrooms} renderItem={({item}) => {
                    return (
                            
                       <SingleUserList  user = {item} navigation={navigation} chatroom={item}/>
                    )
                }} />
                )
            }
        </View>
    )
}

export default ChatsSection;