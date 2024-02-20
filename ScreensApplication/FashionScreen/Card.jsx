import { View, Text, Image, StyleSheet } from "react-native";

const Card = ({ title, image, price }) => {
    return (
        <View style={styles.card}>
            <Image source={{uri:image}} style={styles.image} imageStyle={{ borderRadius: 30 }} />
                <Text style={styles.imageTitle}>#Best Seller</Text>
                <View style={styles.imagefooter}>
                    <Text style={{ color: 'white', fontSize: 15 }}>{title}</Text>
                    <Text style={{ color: 'white', fontSize: 15 }}>$ {price}</Text>
        </View>
        </View>
    );
};
export default Card;

const styles = StyleSheet.create({
    card: {
        margin: 100,
    },
    imageTitle: {
        fontSize: 20,
        color: 'white',
        backgroundColor: 'orange',
        width: '60%',
        // justifyContent:'center',
        // alignContent:'center'
        marginLeft: 30,
        top: 10,
        borderWidth: 1,
        borderRadius: 10,
    },
    image: {
        height: 180,
        width: 250,
        position: 'relative',
    },
    imagefooter: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingHorizontal: 10,
        position: 'absolute',
        height: 50,
        width: '100%',
        backgroundColor: 'rgba(000,000,000,0.5)',
        top: 130

    }
})