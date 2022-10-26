import { View, Text, StyleSheet, Image, TouchableOpacity, ActionSheetIOS } from "react-native"
import axios from "axios"
import { authContext } from "../contexts/AuthContext";
import BASE_URL from "../BASE_URL";
import { useContext } from "react";
const SingleUserList = ({ user , navigation, chatroom})=>{
    const auth = useContext(authContext)
    const createChatRoom = async()=>{
        if(!chatroom){
            try{
                const response = await axios.post(BASE_URL+'/api/chatrooms/',{
                    otheruser:user
                },{headers:{
                    Authorization: "Bearer " +auth.token 
    
                }});
                console.log(response.data)
                navigation.navigate('ChatScreen', response.data)
            }catch(e){
                console.log(e)
            }
        }else{
            navigation.navigate('ChatScreen', chatroom)
        }
    }


    return (
       <TouchableOpacity onPress={createChatRoom}>
         <View style={styles.itemWrapper}>
            <View>
                    <Image  style={styles.avatarImage} source={{
                        uri: 'https://thumbs.dreamstime.com/b/vector-illustration-avatar-dummy-logo-set-image-stock-isolated-object-icon-collection-137161298.jpg'
                    }} />
            </View>
            <View>
                <Text style={styles.itemText}>
                    { user.username }
                </Text>
            </View>
        </View>          
       </TouchableOpacity>             
    )
}


const styles = StyleSheet.create({
    itemWrapper:{
        display: 'flex',                                                                           
        flexDirection: 'row',
        alignItems: 'center',
        paddingHorizontal: 10,
        paddingVertical: 10,
        borderBottomWidth: 1,
        borderBottomColor: 'white', 
    },  
    avatarImage:{
        width: 50,
        height: 50,
        borderRadius: 100,
        marginRight: 10,
        borderWidth: 1,
        borderColor: 'teal'
    },
    itemText:{
        fontSize: 24,
        fontWeight: '400'
    }
})


export default SingleUserList;