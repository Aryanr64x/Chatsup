import { useContext, useEffect, useState } from "react";
import { View, Text, StyleSheet, FlatList, Dimensions, TextInput, Button, TouchableOpacity, KeyboardAvoidingView, Platform } from "react-native";
import appbar from "../styles/appbar";
import form from '../styles/form'
import BASE_URL from '../BASE_URL.js'
import { authContext } from "../contexts/AuthContext";
import axios from 'axios'
import MyMessage from "../components/MyMessage";
import { socketContext } from "../contexts/SocketContextWrapper";
import OthersMessage from "../components/OthersMessage";
import { Ionicons } from '@expo/vector-icons';

const ChatScreen = ({ route }) => {
    const auth = useContext(authContext)
    const chatroom = route.params;
    const io = useContext(socketContext)
    const [text, setText] = useState("")
    const [messages, setMessages] = useState([])
    const request_headers = {
        headers: {
            Authorization: "Bearer " + auth.token

        }
    };
    useEffect(()=>{
        getMessages();
        io.socket.emit('join-room', { roomname:chatroom._id });
        io.socket.on('new-message', (text)=>{
            console.log("This is all that is needed");
            setMessages([...messages,text])
        })
    }, [])

    const getMessages = async()=>{
        try{
            const resp = await axios.get(BASE_URL+'/api/messages/'+chatroom._id,request_headers);
            console.log(resp.data)
            setMessages(resp.data)
        }catch(e){
            console.log(e)
        }
    }       


    const sendMessage = async() => {
        if (text.length != 0) {
            try {
                const resp = await axios.post(BASE_URL + '/api/messages/' + chatroom._id, {
                    text: text,
                    sender_id: auth.loggedInUser._id
                }, request_headers)
                io.socket.emit('new-message', { text:text , roomname: chatroom._id})
               setMessages([...messages, resp.data])

            } catch (e) {
                console.log(e)

            }
        }
    }

    return (
        <View>
            <View style={styles.appBar}>
                <Text style={styles.appBarText}>{chatroom.username}</Text>
            </View>
            <View style={styles.chatwrapper}>
                <FlatList keyExtractor={(item)=>item._id} style={styles.chatlist} data={messages} renderItem={(item)=>{
                    return (item.item.sender_id === auth.loggedInUser._id) ? (<MyMessage message={item.item} />) : (<OthersMessage message = {item.item}/>)
                }}/>
                <View style={styles.chatbottom}>
                    <TextInput onChangeText={(val) => { setText(val) }} style={styles.numberInput} placeholder="Enter  a message ..." />
                    <TouchableOpacity style={styles.sendButton} onPress={sendMessage} >
                        <Ionicons name="send" size={24} style={styles.sendButtonIcon} />
                    </TouchableOpacity>
                </View>

            </View>
        </View>)
}

const styles = StyleSheet.create({

    ...appbar, 
    chatwrapper: {

        height: (Dimensions.get('window').height - 45)


    },
   
    chatlist: {

    },
  
    chatbottom: {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        paddingVertical: 5,
        paddingHorizontal: 10,

    },
    numberInput: {
        backgroundColor: 'white',
        paddingHorizontal: 10,
        paddingVertical: 10,
        marginTop: 0,
        flexGrow: 1,
        borderRadius: 10,
        elevation: 4,
    },
    sendButton:{
        backgroundColor: 'teal',
        paddingVertical: 10,
        paddingHorizontal: 10,
        marginLeft: 5,
        borderRadius: 100,
        elevation: 4
    },
    sendButtonIcon:{
        color: 'white'
    }
})

export default ChatScreen;