import React from "react";
import { StatusBar } from "expo-status-bar";
import { TextInput, Icon } from "react-native-paper";
import { View, Text, TouchableOpacity, StyleSheet, Image } from "react-native";
import AntDesign from "react-native-vector-icons/AntDesign"
import Ionicons from "react-native-vector-icons/Ionicons"


const Login = () => {
    return (
        <View style={Styles.container}>
            <StatusBar style="auto" />
            <Image source={require('../assets/imgforLoginandRegi/Login.jpeg')} style={Styles.Logo} />

            <View style={Styles.box}>

                <Text style={Styles.text}>Login</Text>
                <TextInput underlineColor="white"
                    style={Styles.username}
                    mode="flat"
                    label={'Username'}
                    placeholder="Please enter your username" placeholderTextColor={'#B8B7C0'}
                    left={<TextInput.Icon icon={'account-outline'} color='#F6A035' style={Styles.userIcon} />}
                />
                <TextInput underlineColor="white"
                    style={Styles.password}
                    mode="flat"
                    secureTextEntry
                    label='Password'
                    placeholder="**********" placeholderTextColor={'#B8B7C0'}
                    left={<TextInput.Icon icon={'lock-outline'} color='#A09EF3' style={Styles.passwordIcon} />}
                />

                <View style={Styles.error}>
                    <TouchableOpacity >
                        <Text style={Styles.forgot}>Forgot Password?</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={Styles.errorTouchable}>
                        <Text style={Styles.errortext}>Login</Text>
                    </TouchableOpacity>
                </View>

                <View style={Styles.bottomIcons}>
                    <TouchableOpacity style={Styles.touch}>
                        <Ionicons name="logo-facebook" style={Styles.facebook} />
                    </TouchableOpacity>
                    <TouchableOpacity style={Styles.touch}>
                        {/* <Icon name='google'size={25} color={'white'}/> */}
                        <Image source={require('../assets/imgforLoginandRegi/google.png')} style={Styles.google} />
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

    error: {
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
    errorTouchable: {
        backgroundColor: '#1A1C33',
        width: '40%',
        height: 50,
        borderRadius: 30,
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
    },
    errortext: {
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
        display: 'flex',
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
        width: 25,
        height: 25,
    },
    apple: {
        color: '#15131E',
        fontSize: 30,
    }
})