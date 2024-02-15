import React from "react";
import { Image, ScrollView, StyleSheet, View } from "react-native";

const ImageGallery = () => {
    return (

        <View style={Styles.container}>
            <ScrollView>
            <View style={Styles.card}>
                <Image source={require('../assets/cat.webp')} style={{width: 180, height: 180}}/>
                <Image source={require('../assets/great-white.webp')} style={{width: 180, height: 180}}/>
                <Image source={require('../assets/cat.webp')} style={{width: 180, height: 180}}/>
                <Image source={require('../assets/onion.webp')} style={{width: 180, height: 180}} />
            </View>
            
            </ScrollView>
        </View>
        
    )
}

export default ImageGallery;
const Styles = StyleSheet.create({
    container: {
        flex:1,
        marginTop:50,
    },
    card:{
        flex: 1,
        flexDirection: 'row',
        // justifyContent: 'center',
        flexWrap: 'wrap',
    }
})