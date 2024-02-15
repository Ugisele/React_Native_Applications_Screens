import React from 'react';
import { Pressable, View, Text, TouchableOpacity, StyleSheet } from "react-native";
import Icon from 'react-native-vector-icons/FontAwesome';
import Entypo from 'react-native-vector-icons/Entypo';
import { TextInput, Checkbox } from 'react-native-paper';



const First_screen = () => {
    return (

        <View style={Styles.container}>
            <View style={{ marginBottom: 20 }}>
                <Entypo name='cross' size={30} style={{ marginTop: 10 }} />
            </View>

            <View style={Styles.heading}>
                <Text style={Styles.h1}>SIGN IN</Text>
                <Text style={Styles.text}>Welcome back! Please enter your details </Text>
            </View>

            <View >

                <View style={Styles.input}>

                    <TextInput style={{
                        backgroundColor: '#f7f7f7', borderWidth: 0, borderRadius: 50, borderTopRightRadius: 50, borderTopLeftRadius: 50,
                        borderBottomEndRadius: 50, borderBottomLeftRadius: 50,
                    }}
                        label="Email"
                        underlineColor='white'
                        mode="flat"
                        placeholder='example@gmail.com'
                        left={<TextInput.Icon icon="email-outline" color={'#e355fd'} size={25} style={{
                            backgroundColor: '#f8d3fe',
                            borderRadius: 50
                        }} />} />

                </View>
                <View >

                    <TextInput style={{
                        backgroundColor: '#f7f7f7', borderWidth: 0, borderTopLeftRadius: 50, borderTopRightRadius: 50,
                        borderBottomEndRadius: 50, borderBottomLeftRadius: 50, marginTop: 10
                    }}
                        label="PassWord"
                        underlineColor='white'
                        mode="flat"
                        secureTextEntry
                        placeholder='***********'
                        left={<TextInput.Icon icon="lock" size={25} color={'#6892ff'} style={{ backgroundColor: '#e1eaff', borderRadius: 50 }} />} />
                </View>
                <View style={{ flexDirection: 'row', gap: 12, marginTop: 10 }}>
                    <Checkbox.Android label="Remember Me" status="unchecked" style={{ borderRadius: 50 }} />
                    <Text style={{ marginTop: 7 }}>Remember Me</Text>
                </View>


                <View>
                    <TouchableOpacity style={Styles.opacity}>
                        <Text style={{ color: '#1690fa', marginBottom: 20 }}>Forget PassWord</Text>
                    </TouchableOpacity>

                </View>
                <TouchableOpacity>
                    <Pressable style={Styles.opacitySignin}>
                        <Text style={Styles.opacitySigninText}>Sign in</Text>
                    </Pressable>
                    {/* <Button title='Sign In' style={{width:'50%'}}/> */}
                </TouchableOpacity>

            </View>
            <View style={Styles.create}>
                <Text style={{ color: '#000000' }}>Create account </Text>

                <Pressable style={Styles.btnsignup}>
                    <Text style={Styles.text1}>Sign up</Text>
                </Pressable>
            </View>

            <View style={Styles.icons}>
                <TouchableOpacity style={Styles.iconimgf}>
                    <Icon name='facebook' size={25} color={'white'} />
                </TouchableOpacity>
                <TouchableOpacity style={Styles.iconimgg}>
                    <Icon name='google' size={25} color={'white'} />
                </TouchableOpacity >
                <TouchableOpacity style={Styles.iconimga}>
                    <Icon name='apple' size={25} />
                </TouchableOpacity>
            </View>

        </View>
    )
}
export default First_screen;

const Styles = StyleSheet.create({
    container: {
        marginTop: 40,
        marginLeft: 10,
        marginRight: 15,
        flexDirection: 'column',
        alignContent: 'center',
        justifyContent: 'center',
    },
    h1: {
        fontSize: 25,
        textAlign: 'center',
        marginBottom: 30,
        fontWeight: 'bold',
    },
    text: {
        textAlign: 'center',
        marginBottom: 60,
    },
    opacity: {
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 100,
    },
    opacitySignin: {
        backgroundColor: '#119bff',
        height: 50,
        justifyContent: 'center',
        borderRadius: 100,
    },
    opacitySigninText: {
        color: 'white',
        textAlign: 'center',
    },
    CheckBox: {
        width: 25,
        height: 25,
        borderColor: 'black',
        borderWidth: 2,
        marginLeft: 10,


    },
    create: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginTop: 30,
    },
    btnsignup: {
        backgroundColor: '#f7f2f5',
        borderRadius: 10,
        padding: 5,
        width: 100,
        marginRight: 5,
    },

    text1: {
        color: '#fdbc53',
        textAlign: 'center',
    },
    icons: {
        flexDirection: 'row',
        backgroundColor: '#f1f5fd',
        borderRadius: 100,
        padding: 10,
        marginTop: 50,
        justifyContent: 'space-around',

    },
    iconimgf: {
        width: 40,
        height: 40,
        marginRight: 10,
        backgroundColor: '#217fff',
        borderRadius: 50,
        justifyContent: 'center',
        alignItems: 'center',
    },
    iconimgg: {
        width: 40,
        height: 40,
        marginRight: 10,
        backgroundColor: '#ff573f',
        borderRadius: 50,
        justifyContent: 'center',
        alignItems: 'center',
    },
    iconimga: {
        width: 40,
        height: 40,
        marginRight: 10,
        backgroundColor: 'white',
        color: 'white',
        borderRadius: 50,
        justifyContent: 'center',
        alignItems: 'center',
    },
})