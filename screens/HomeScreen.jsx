import { useContext, useEffect, useState } from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import ChatsSection from "../components/ChatsSection";
import UsersSection from "../components/UsersSection";
import { authContext } from "../contexts/AuthContext";
import appbar from "../styles/appbar";


const HomeScreen = ( { navigation } )=>{   

    // 0 is for chats section and 1 is for users 
    const [section, setSection] = useState(0) 
    const auth = useContext(authContext)
    

    return (
       <SafeAreaView>
         <View>
             <View style={styles.appBar}>
                    <Text style={styles.appBarText}>
                        { auth.loggedInUser.username }
                    </Text>
             </View>
             <View style={styles.navView}>
                <View style={styles.navViewItem}> 
                   <TouchableOpacity onPress={()=>{setSection(0)}}>
                   <Text>Chats</Text>
                   </TouchableOpacity>
                </View>
                <View style={styles.navViewItem}>   
                        <TouchableOpacity onPress={()=>{setSection(1)}}>
                        <Text>
                            Users
                        </Text> 
                        </TouchableOpacity>
                </View>
             </View>
            {
                (section === 0) ? (<ChatsSection  navigation={navigation} />) : (<UsersSection navigation={navigation}/>)
            }
        </View>
       </SafeAreaView>
    );
}

const styles = StyleSheet.create({
   ...appbar,
    navView:{
        display: 'flex',
        flexDirection: 'row',

    },
    navViewItem:{
        flexBasis: '50%',
        backgroundColor: '#33cccc',
        paddingVertical: 10,
        color: 'white'
    }
})

export default HomeScreen;