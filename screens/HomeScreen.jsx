import { useContext, useEffect, useState } from "react";
import { View, Text, StyleSheet, TouchableOpacity, Image } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import ChatsSection from "../components/ChatsSection";
import UsersSection from "../components/UsersSection";
import { authContext } from "../contexts/AuthContext";
import { Entypo } from '@expo/vector-icons'; 

import appbar from "../styles/appbar";


const HomeScreen = ({ navigation }) => {

    // 0 is for chats section and 1 is for users 
    const [section, setSection] = useState(0)
    const auth = useContext(authContext)


    return (
        <SafeAreaView>
            <View>
                <View style={styles.appBar}>

                    <View style={styles.appBarLeft}>
                        <Image style={styles.avatarImage} source={{
                            uri: 'https://thumbs.dreamstime.com/b/vector-illustration-avatar-dummy-logo-set-image-stock-isolated-object-icon-collection-137161298.jpg'
                        }} />


                        <Text style={styles.appBarText}>
                            {auth.loggedInUser.username}
                        </Text>
                    </View>




                    <View style={styles.appBarRight}>
                    <Entypo name="dots-three-vertical" size={20} color="white" />
                    </View>
                </View>
                <View style={styles.navView}>
                    <View style={styles.navViewItem}>
                        <TouchableOpacity onPress={() => { setSection(0) }}>
                            <Text style={styles.navViewText}>Chats</Text>
                        </TouchableOpacity>
                    </View>
                    <View style={styles.navViewItem}>
                        <TouchableOpacity onPress={() => { setSection(1) }}>
                            <Text style={styles.navViewText}>
                                Users
                            </Text>
                        </TouchableOpacity>
                    </View>
                </View>
                {
                    (section === 0) ? (<ChatsSection navigation={navigation} />) : (<UsersSection navigation={navigation} />)
                }
            </View>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    ...appbar,
    navView: {
        display: 'flex',
        flexDirection: 'row',


    },
    navViewItem: {
        flexBasis: '50%',
        backgroundColor: 'teal',
        paddingVertical: 10,
        color: 'white',
        flexDirection: 'row',
        justifyContent: 'center'

    },
    avatarImage: {
        width: 40,
        height: 40,
        borderRadius: 100,
        marginRight: 10
    },
    appBarLeft: {
        flexDirection: 'row',
        alignItems: 'center',

    },
    navViewText:{
        color: 'white', 
        fontSize: 18,

    }
  
})

export default HomeScreen;