import { StatusBar } from "expo-status-bar";
import { TextInput, Icon } from "react-native-paper";
import { View, Text, TouchableOpacity, StyleSheet, Image } from "react-native";
import AntDesign from "react-native-vector-icons/AntDesign"
import Ionicons from "react-native-vector-icons/Ionicons"
import React from "react";

 const Login = () => {
    return (
        <View style={Styles.container}>
            <StatusBar style="auto" />
            <Image source={require('../assets/Login.jpeg')} style={Styles.Logo} />

            <View style={Styles.box}>

                <Text style={Styles.text}>Login</Text>
                <TextInput
                    style={Styles.username}
                    mode="flat"
                    underlineColor="white"
                    label={'Username'}
                    placeholder="Username" placeholderTextColor={'#B8B7C0'}
                    left={<TextInput.Icon icon={'account-outline'} color='#F6A035' style={Styles.userIcon} />}
                />
                <TextInput
                    style={Styles.password}
                    mode="flat"
                    underlineColor="white"
                    secureTextEntry
                    label={'Password'}
                    placeholder="Password" placeholderTextColor={'#B8B7C0'}
                    left={<TextInput.Icon icon={'lock-outline'} color='#A09EF3' style={Styles.passwordIcon} />}
                />

                <View style={Styles.submit}>
                    <TouchableOpacity >
                        <Text style={Styles.forgot}>Forgot Password?</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={Styles.submitTouch}>
                        <Text style={Styles.submitLogin}>Login</Text>
                    </TouchableOpacity>
                </View>

                <View style={Styles.bottomIcons}>
                    <TouchableOpacity style={Styles.touch}>
                        <Ionicons name="logo-facebook" style={Styles.facebook} />
                    </TouchableOpacity>
                    <TouchableOpacity style={Styles.touch}>
                      <Icon name='google'size={25} color={'white'}/>
                        {/* <Image source={require('../assets/googleIcon.png')} style={Styles.google} /> */}
                    </TouchableOpacity>
                    <TouchableOpacity style={Styles.touch}>
                        <AntDesign name="apple1" style={Styles.apple} />
                    </TouchableOpacity>
                </View>
            </View>
        </View>
    )
}

export default Login;



const Styles = StyleSheet.create({
    container: {
       
        backgroundColor: '#F3F5F6',
        width: '100%',
        height: 'auto',
        display: 'flex',
        alignItems: 'center',
        paddingBottom: 40,
    },
    Logo: {
        width: '100%',
    },
    box: {
        backgroundColor: '#F3F5F6',
        width: '100%',
        height: 'auto',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        paddingHorizontal: '6%',
        borderWidth: 0,
    },
    text: {
        fontSize: 25,
        fontWeight: 'bold',
    },
    username: {
        width: '100%',
        marginTop: 30,
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: 'white',
        paddingLeft: '4%',
        borderTopLeftRadius: 25,
        borderTopRightRadius: 25,
        borderWidth: 0,
        height: 65,
    },
    userIcon: {
        backgroundColor: '#FDE8EA', 
        marginLeft: '90%',
    },
    password: {
        width: '100%',
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: 'white',
        paddingLeft: '4%',
        borderRadius: 25,
        borderBottomWidth: 0,
        height: 65,
    },
    passwordIcon: {
        backgroundColor: '#E6ECFC', 
        marginLeft: '90%',
    },

    submit: {
        marginTop: 20,
        width: '100%',
        height: 'auto',
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    forgot: {
        color: '#818FFC',
        fontSize: 15,
    },
    submitTouch:{
        backgroundColor: '#1A1C33',
        width: '40%',
        height: 50,
        borderRadius: 30,
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
    },
    submitLogin: {
        color: 'white',
        fontSize: 16,
    },

    bottomIcons: {
        // backgroundColor: 'white',
        marginTop: 100,
        width: '100%',
        height: 'auto',
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-around',
    },
    touch: {
        width: '15%',
        height: 50,
        alignItems: 'center',
        display:'flex',
        flexDirection: 'row',
        justifyContent: 'center',
        backgroundColor: 'white',
        borderRadius: 30,
    },
    facebook: {
        color: '#216CD3',
        fontSize: 30,
    },
    google: {
        width: '80%',
        height: '80%',
    },
    apple: {
        color: '#15131E',
        fontSize: 30,
    }
})