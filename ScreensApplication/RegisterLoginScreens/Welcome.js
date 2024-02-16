import React from "react";
import { View, Text, TouchableOpacity } from "react-native";
import AntDesign from "react-native-vector-icons/AntDesign"

const Welcome = ({navigation}) => {
    return (

        <View>
            <Text style={{ fontSize: 30, fontWeight: 'bold', marginBottom: 100 }}>Account Created💥💥</Text>

            <TouchableOpacity onPress={() =>
                        navigation.navigate("register")}>
                <Text style={{ fontSize: 20, fontStyle: 'itallic' }}> Click the Button to continue</Text>
                <AntDesign name="rightsquareo"/>
            </TouchableOpacity>

        </View>

    )
}
export default Welcome;