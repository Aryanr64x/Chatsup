import { useContext, useEffect, useState } from "react";
import { View, Text, FlatList, ToastAndroid } from "react-native"
import { supabase } from "../supabase/supabase";
import axios from "axios";
import SingleUserList from "./SingleUserList";

import BASE_URL from "../BASE_URL.js";
import { authContext } from "../contexts/AuthContext";

const UsersSection = ( { navigation } ) => {
    const [userProfiles, setUserProfiles] = useState([])
    const auth = useContext(authContext)
    
    useEffect(() => {
        getUsers()
    }, [])

    const getUsers = async () => {
        try{
            const resp = await axios.get(BASE_URL+'/api/users/', {headers:{
                Authorization: "Bearer " +auth.token 

            }});
            console.log(resp.data)
            setUserProfiles(resp.data.users)

        }catch(e){
            console.log(e)
            ToastAndroid.show("Oops cannot get users at the moment ! Try again later", ToastAndroid.LONG)
        }

    }


    

    return (
        <View>
            <Text>
                This is the users section
            </Text>
            {
                (userProfiles.length === 0) ? (<Text>Looks Like there are no users around..</Text>) : (
                <FlatList  keyExtractor={(item)=>item.id} data={userProfiles} renderItem={({item}) => {
                    return (
                            
                       <SingleUserList  user = {item} navigation={navigation}/>
                    )
                }} />
                )
            }
        </View>
    );
}

export default UsersSection;