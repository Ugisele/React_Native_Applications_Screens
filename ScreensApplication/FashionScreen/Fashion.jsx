import React from "react";
import { View, Text, StyleSheet, Image, StatusBar, ScrollView } from "react-native";
// import Ionicons from "react-native-vector-icons/Ionicons";
// import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import { TextInput } from "react-native-paper";

<StatusBar style="auto" />


const Fashion = () => {
    return (
        <View style={Styles.container}>
            <View style={Styles.TopView}>
                {/* <Ionicons name="arrow-back-circle-outline" size={30} style={Styles.TopViewIcon} /> */}
                {/* <Icon name='tune' type='material'/> */}
                <Text style={Styles.TopviewText}> Search </Text>
                {/* <MaterialCommunityIcons name="reorder-vertical" size={30} style={Styles.TopViewIcon} /> */}
                {/* <Icon name='tune' type='material'/> */}
            </View>
            {/* <View style={Styles.searchbar}>
                <TextInput
                    style={Styles.searchinputs}
                    mode="flat"
                    placeholder="Search..."
                    underlineColor="white"
                    right={<TextInput.Icon icon="search" size={20} />}
                    left={<TextInput.Icon icon="search" color="red" />}
                />
            </View> */}
            <View style={Styles.nav}>
                <ScrollView horizontal showsHorizontalScrollIndicator={false}>
                    <Text style={Styles.navText1}>All</Text>
                    <Text style={Styles.navText}>Men</Text>
                    <Text style={Styles.navText}>Women</Text>
                    <Text style={Styles.navText}>Children</Text>
                    <Text style={Styles.navText} >Dress</Text>
                    <Text style={Styles.navText}>Jean</Text>
                    <Text style={Styles.navText}>Children</Text>
                    <Text style={Styles.navText} >Dress</Text>
                </ScrollView>
            </View >

        </View>
    );
};

const Styles = StyleSheet.create({
    card: {
        marginBottom: 3,
        gap: 4,

    },
    Card2: {
        flexDirection: 'column',
        gap: 10,
        backgroundColor: 'white',


    },
    image: {
        width: 300,
        height: 200,
    },
    nav: {
        flexDirection: 'row'
    },
    navText: {

        margin: 7,
        padding: 5,
        fontSize: 18,
        fontWeight: '400',
        backgroundColor: 'white',
        borderRadius: 50,
        borderWidth: 0.5,

    },
    navText1: {

        margin: 7,
        paddingRight: 17,
        alignItems: 'center',
        fontSize: 18,
        fontWeight: '800',
        backgroundColor: '#F9EA86',
        borderRadius: 40,
        color: 'white',
        borderWidth: 0.3,

    },
    container: {
        // backgroundColor: '',
        paddingHorizontal: 10,
        paddingVertical: 60,
    },
    TopView: {
        flexDirection: 'row',
        justifyContent: "space-between",
        alignItems: "center",
        marginBottom: 15,
    },

    TopviewText: {
        fontSize: 20,
        fontWeight: 'bold'
    },
    searchbar: {
        backgroundColor: 'smoke',
        justifyContent: "space-between",
        marginVertical: 10,
        overflow: '',
    },

    searchinputs: {
        borderStartEndRadius: 20,
        borderStartStartRadius: 20,
        borderRadius: 10,


        borderWidth: 0,
    },

});

export default Fashion;
