import { View, Text, StyleSheet, Image } from "react-native"

const SingleUserList = ({ user })=>{
    console.log('https://jfwhcicxwmmlgjtotzln.supabase.co/storage/v1/object/public/avatars/'+user.avatar_url)
    return (
        <View style={styles.itemWrapper}>
            <View>
                    <Image  style={styles.avatarImage} source={{
                        uri: 'https://jfwhcicxwmmlgjtotzln.supabase.co/storage/v1/object/public/avatars/'+user.avatar_url
                    }} />
            </View>
            <View>
                <Text style={styles.itemText}>
                    { user.username }
                </Text>
            </View>
        </View>
    )
}


const styles = StyleSheet.create({
    itemWrapper:{
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        paddingHorizontal: 10,
        marginTop: 10
    },  
    avatarImage:{
        width: 55,
        height: 55,
        borderRadius: 100,
        marginRight: 10
    },
    itemText:{
        fontSize: 24,
        fontWeight: '100'
    }
})


export default SingleUserList;