import { useEffect, useState } from "react";
import { View, Text, FlatList } from "react-native"
import { supabase } from "../supabase/supabase";
import SingleUserList from "./SingleUserList";


const UsersSection = () => {
    const [userProfiles, setUserProfiles] = useState([])
    useEffect(() => {
        getUserProfiles()
    }, [])

    const getUserProfiles = async () => {
        const resp = await supabase.from('profiles').select()
        if (!resp.error) {
            setUserProfiles(resp.data)
            console.log(resp.data)
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
                            
                       <SingleUserList  user = {item} />
                    )
                }} />
                )
            }
        </View>
    );
}

export default UsersSection;