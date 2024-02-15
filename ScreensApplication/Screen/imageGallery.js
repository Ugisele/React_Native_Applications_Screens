import { StatusBar } from "expo-status-bar";
import { View, Text, TouchableOpacity, Image, StyleSheet, ScrollView } from "react-native";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons"
import Entypo from "react-native-vector-icons/Entypo"

const ImageGallery = () => {
    return (
        <ScrollView>
            <View style={Styles.container}>
                <StatusBar style="auto" />
                <View style={Styles.navbar}>
                    <TouchableOpacity >
                        <MaterialCommunityIcons name="arrow-left" style={Styles.leftArrow} />
                    </TouchableOpacity>
                    <Text style={Styles.Imagetext}>Text to image</Text>
                    <TouchableOpacity>
                        <Entypo name="dots-three-vertical" style={Styles.Dots} />
                    </TouchableOpacity>
                </View>

                <View style={Styles.card}>
                    <Image source={require('../assets/1.jpg')} style={Styles.img} />
                    <Image source={require('../assets/2.jpg')} style={Styles.img} />
                    <Image source={require('../assets/3.jpg')} style={Styles.img} />
                    <Image source={require('../assets/5.jpg')} style={Styles.img} />
                    <Image source={require('../assets/4.jpg')} style={Styles.img} />
                    <Image source={require('../assets/cat.webp')} style={Styles.img} />
                    <Image source={require('../assets/great-white.webp')} style={Styles.img} />
                    <Image source={require('../assets/onion.webp')} style={Styles.img} />
                    <Image source={require('../assets/1.jpg')} style={Styles.img} />
                    <Image source={require('../assets/2.jpg')} style={Styles.img} />
                    <Image source={require('../assets/3.jpg')} style={Styles.img} />
                    <Image source={require('../assets/5.jpg')} style={Styles.img} />
                </View>
            </View>
        </ScrollView>
    )
}

export default ImageGallery;


const Styles = StyleSheet.create({
    container: {

        width: '100%',
        height: '100%',
        paddingVertical: '20%',
        paddingHorizontal: '5%',
    },
    navbar: {

        width: '100%',
        height: 'auto',
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',

    },


    leftArrow: {
        fontSize: 25,
        fontWeight: 'bold'

    },
    Imagetext: {
        fontSize: 20,
        fontWeight: 'bold'
    },
    Dots: {
        fontSize: 20,
        fontWeight: 'bold'
    },
    card: {

        marginTop: 30,
        display: 'flex',
        flexDirection: 'row',
        flexWrap: 'wrap',
        width: '100%',
        height: 'auto',
        gap: 10,
        alignItems: 'center',
        justifyContent: 'space-between',
    },
    img: {
        width: '48%',
        height: 200,
        borderRadius: 9,
    },
})