import {
    StatusBar
} from "expo-status-bar";
import {
    TextInput,
    Icon
} from "react-native-paper";
import {
    View,
    Text,
    TouchableOpacity,
    StyleSheet,
    Image
} from "react-native";
import AntDesign from "react-native-vector-icons/AntDesign"
import Ionicons from "react-native-vector-icons/Ionicons"
import React from "react";


const Register = () => {
    return (
        <View style={Styles.container}>
            <StatusBar style="auto" />

            <Image source={require('../assets/imgforLoginandRegi/Register.jpeg')} style={Styles.registerLogo} />


            <View style={Styles.form}>
                <Text style={Styles.loginWord}>Register</Text>
                <TextInput
                    style={Styles.username}
                    mode="flat"
                    underlineColor="white"
                    label={'Username'}
                    placeholder="Username" placeholderTextColor={'#B8B7C0'}
                    left={<TextInput.Icon icon={'account-outline'} color='#F6A035' style={Styles.userIcon} />}
                />

                <TextInput
                    style={Styles.email}
                    mode="flat"
                    underlineColor="white"
                    secureTextEntry
                    label={'Email'}
                    placeholder="Email" placeholderTextColor={'#B8B7C0'}
                    left={<TextInput.Icon icon={'email-outline'} color='#76C88B' style={Styles.emailIcon} />}
                />

                <TextInput
                    style={Styles.password}
                    mode="flat"
                    underlineColor="white"
                    label={'Password'}
                    placeholder="Password" placeholderTextColor={'#B8B7C0'}
                    left={<TextInput.Icon icon={'lock-outline'} color='#A09EF3' style={Styles.passwordIcon} />}
                />

                <TouchableOpacity style={Styles.submitTouch}>
                    <Text style={Styles.submitLogin}>Register</Text>
                </TouchableOpacity>
            </View>

            <View style={Styles.bottomIcons}>
                <TouchableOpacity style={Styles.Touch}>
                    <Ionicons name="logo-facebook" style={Styles.facebook} />
                </TouchableOpacity>
                <TouchableOpacity style={Styles.Touch}>
                    <Icon name='google' size={25} color={'red'} />
                </TouchableOpacity>
                <TouchableOpacity style={Styles.Touch}>
                    <AntDesign name="apple1" style={Styles.apple} />
                </TouchableOpacity>
            </View>
        </View>
    )
}

export default Register;



const Styles = StyleSheet.create({

    container: {

        backgroundColor: '#F3F5F6',
        width: '100%',
        height: '100%',
        paddingHorizontal: '6%',
        paddingTop: '10%',
        paddingBottom: '6%',
    },
    registerLogo: {
        width: '100%',
        height: 315,
    },


    form: {

        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        gap: 15,
    },
    loginWord: {
        fontSize: 25,
        fontWeight: 'bold',
    },
    username: {
        width: '100%',
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: 'white',
        paddingLeft: '2%',
        borderTopLeftRadius: 30,
        borderTopRightRadius: 30,
        borderRadius: 30,
        borderBottomWidth: 0,
        height: 50,
        marginTop: 10,
    },
    userIcon: {
        backgroundColor: '#FDE8EA',
        marginLeft: '30%',
    },
    email: {
        width: '100%',
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: 'white',
        paddingLeft: '2%',
        borderTopLeftRadius: 30,
        borderTopRightRadius: 30,
        borderRadius: 30,
        borderBottomWidth: 0,
        height: 50,
    },
    emailIcon: {
        backgroundColor: '#DEF4E8',
        marginLeft: '30%',
    },
    password: {
        width: '100%',
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: 'white',
        paddingLeft: '2%',
        borderTopLeftRadius: 30,
        borderTopRightRadius: 30,
        borderRadius: 30,
        borderBottomWidth: 0,
        height: 50,
    },
    passwordIcon: {
        backgroundColor: '#E6ECFC',
        marginLeft: '30%',
    },
    submitTouch: {
        backgroundColor: '#191A30',
        width: '100%',
        height: 50,
        borderRadius: 30,
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 15,
    },
    submitLogin: {
        color: 'white',
        fontSize: 17,
    },

    bottomIcons: {
        marginTop: 50,
        width: '100%',
        height: 'auto',
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-around',
    },
    Touch: {
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
        width: '75%',
        height: '75%',
    },
    apple: {
        color: '#15131E',
        fontSize: 30,
    },
})