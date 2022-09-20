import { useContext, useEffect } from "react";
import { View, Text } from "react-native";
import { supabase } from "../supabase/supabase";

const HomeScreen = ()=>{   

    return (
        <View>
                <Text>Welcome to the home screen</Text>
        </View>
    );
}

export default HomeScreen;