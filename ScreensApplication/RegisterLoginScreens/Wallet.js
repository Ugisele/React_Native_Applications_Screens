import React from "react";
import { View, Text, StyleSheet, TouchableOpacity, ScrollView, StatusBar } from "react-native";
import Entypo from "react-native-vector-icons/Entypo";
import AntDesign from "react-native-vector-icons/AntDesign";
import MaterialIcon from "react-native-vector-icons/MaterialIcons";




const Wallet = () => {
    return (

        <ScrollView>
            <View style={{ backgroundColor: "#f2e7f1", paddingVertical: 1, paddingHorizontal: 5 }}>
                <Text style={{ fontSize: 30, fontWeight: 'bold' }}> Home </Text>
                <View style={{ flexDirection: "row", justifyContent: "space-between", width: "100%", paddingHorizontal: 10, }}>
                    <TouchableOpacity style={{ rowGap: 10, alignItems: "center" }}>
                        <View style={{ borderRadius: 30, padding: 10, backgroundColor: "white" }}>
                            <Entypo name="flash" size={30} color={"#bbbef6"} />
                        </View>
                        <Text style={{}}> Price-Alert </Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={{ rowGap: 10, alignItems: "center" }}>
                        <View style={{ borderRadius: 30, padding: 10, backgroundColor: "white" }}>
                            <AntDesign name="swap" size={30} color={"orange"} />
                        </View>

                        <Text >Convert </Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={{ rowGap: 10, alignItems: "center" }}>
                        <View style={{ borderRadius: 30, padding: 10, backgroundColor: "white" }}>
                            <MaterialIcon name="copy-all" size={30} color={"blue"} />
                        </View>

                        <Text > Compare </Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={{ rowGap: 10, alignItems: "center" }}>
                        <View style={{ borderRadius: 30, padding: 10, backgroundColor: "white" }}>
                            <Entypo name="star-outlined" size={30} color={"green"} />
                        </View>
                        <Text > WatchList </Text>
                    </TouchableOpacity>
                </View>


                <View style={{ backgroundColor: '#f7f7fa', borderRadius: 30 }}>

                    <Text style={{ fontSize: 25, margin: 20, marginLeft: 10, fontWeight: "bold" }}> My Wallet</Text>

                    <View style={{ flex: 2, flexDirection: "row", paddingHorizontal: 10, }}>
                        <ScrollView horizontal>
                            <View style={{ flexDirection: "row", backgroundColor: "white", borderRadius: 10, padding: 10, width: '120px' }}>
                                <View>
                                    <Text style={{ fontSize: 16 }}>Neo</Text>
                                    <Text style={{ fontSize: 18, fontWeight: "bold", marginBottom: 15 }}>Neo 0,3456</Text>
                                    <Text style={{ fontSize: 18, fontWeight: "bold" }}>$3,4556</Text>
                                </View>
                                <View style={{ flex: 1, flexDirection: "column", justifyContent: "space-between", alignItems: "center" }}>
                                    <TouchableOpacity style={{ backgroundColor: "green", padding: 10, borderRadius: 50 }}>
                                        <MaterialIcon name="warehouse" color={"white"} size={25} />

                                    </TouchableOpacity>
                                    <TouchableOpacity style={{ flexDirection: 'row-reverse', padding: 10, borderRadius: 50 }}>
                                        <Text style={{ marginTop: 5 }}>2.5%</Text>
                                        <MaterialIcon name="keyboard-arrow-down" color={"red"} size={25} />


                                    </TouchableOpacity>
                                </View>

                            </View>
                            <View style={{ flexDirection: "row", backgroundColor: "white", borderRadius: 10, padding: 10, width: '280px' }}>
                                <View>
                                    <Text style={{ fontSize: 16 }}>Usd</Text>
                                    <Text style={{ fontSize: 18, fontWeight: "bold", marginBottom: 15 }}>Dollar 0,3456</Text>
                                    <Text style={{ fontSize: 18, fontWeight: "bold" }}>$3,4556</Text>
                                </View>
                                <View style={{ flex: 1, flexDirection: "column", gap: 4, justifyContent: "space-between", alignItems: "center" }}>
                                    <TouchableOpacity style={{ backgroundColor: "green", padding: 10, borderRadius: 50 }}>
                                        <MaterialIcon name="warehouse" color={"white"} size={25} />

                                    </TouchableOpacity>
                                    <TouchableOpacity style={{ flexDirection: 'row-reverse', padding: 10, borderRadius: 50 }}>
                                        <Text style={{ marginTop: 5 }}>2.5%</Text>
                                        <MaterialIcon name="keyboard-arrow-down" color={"red"} size={25} />
                                    </TouchableOpacity>
                                </View>

                            </View>
                            <View style={{ flexDirection: "row", backgroundColor: "white", borderRadius: 10, padding: 10, width: '280px' }}>
                                <View>
                                    <Text style={{ fontSize: 16 }}>Euro</Text>
                                    <Text style={{ fontSize: 18, fontWeight: "bold", marginBottom: 15 }}>Euro 0,3456</Text>
                                    <Text style={{ fontSize: 18, fontWeight: "bold" }}>$3,4556</Text>
                                </View>
                                <View style={{ flex: 1, flexDirection: "column", gap: 4, justifyContent: "space-between", alignItems: "center" }}>
                                    <TouchableOpacity style={{ backgroundColor: "green", padding: 10, borderRadius: 50 }}>
                                        <MaterialIcon name="warehouse" color={"white"} size={25} />
                                    </TouchableOpacity>
                                    <TouchableOpacity style={{ flexDirection: 'row-reverse', padding: 10, borderRadius: 50 }}>
                                        <Text style={{ marginTop: 5 }}>2.5%</Text>
                                        <MaterialIcon name="keyboard-arrow-down" color={"red"} size={25} />
                                    </TouchableOpacity>
                                </View>

                            </View>

                            <View style={{ flexDirection: "row", backgroundColor: "white", borderRadius: 10, padding: 10, width: "280px" }}>
                                <View>
                                    <Text style={{ fontSize: 16 }}>Usd</Text>
                                    <Text style={{ fontSize: 18, fontWeight: "bold", marginBottom: 10 }}>Vent 0,3456</Text>
                                    <Text style={{ fontSize: 18, fontWeight: "bold" }}>$3,4556</Text>
                                </View>
                                <View style={{ flex: 1, flexDirection: "column", gap: 4, justifyContent: "space-between", alignItems: "center" }}>
                                    <TouchableOpacity style={{ backgroundColor: "green", padding: 10, borderRadius: 50 }}>
                                        <MaterialIcon name="warehouse" color={"white"} size={25} />

                                    </TouchableOpacity>
                                    <TouchableOpacity style={{ flexDirection: 'row-reverse', padding: 10, borderRadius: 50 }}>

                                        <Text style={{ marginTop: 5 }}>2.5%</Text>
                                        <MaterialIcon name="keyboard-arrow-down" color={"red"} size={25} />


                                    </TouchableOpacity>
                                </View>
                            </View>
                        </ScrollView>
                    </View>

                    <View style={Styles.trendingView}>
                        <Text style={Styles.trendingtext}>Trending</Text>

                        <View style={Styles.all}>
                            <View style={Styles.twoBitcoinview}>
                                <IconButton icon={'currency-btc'} size={35} iconColor="#F7961A" style={Styles.bitcoinIcon} />
                                <View style={Styles.bitcointextview}>
                                    <Text style={Styles.bitcoinWord}>Bitcoin</Text>
                                    <Text style={Styles.bitcoinMoney}>$32,128.80</Text>
                                    <Text style={Styles.btc}>BTC</Text>
                                    <TouchableOpacity style={Styles.percent2}>
                                        <IconButton icon={'chevron-up'} iconColor="#7CC39D" style={Styles.dropup} />
                                        <Text style={Styles.percentNum2}>2.5%</Text>
                                    </TouchableOpacity>
                                </View>
                            </View>

                            <View style={Styles.twoBitcoinviews}>
                                <IconButton icon={'currency-btc'} size={35} iconColor="#D04E80" style={Styles.bytecoinIcon} />
                                <View style={Styles.bitcointextview}>
                                    <Text style={Styles.bitcointext}>Bytecoin</Text>
                                    <Text style={Styles.bitcoinMoney}>$15,128.80</Text>
                                    <Text style={Styles.btc}>BCN</Text>
                                    <TouchableOpacity style={Styles.percent2}>
                                        <IconButton icon={'chevron-up'} iconColor="#7CC39D" style={Styles.dropup} />
                                        <Text style={Styles.percentNum2}>2.2%</Text>
                                    </TouchableOpacity>
                                </View>
                            </View>
                        </View>
                    </View>

                </View>

                <View style={{ flexDirection: "row", justifyContent: "space-between", width: "100%", paddingHorizontal: 10, }}>
                    <TouchableOpacity style={{ rowGap: 10, alignItems: "center" }}>
                        <View style={{ borderRadius: 30, padding: 10, backgroundColor: "white" }}>
                            <Entypo name="home" size={30} color={"#bbbef6"} />
                        </View>

                    </TouchableOpacity>
                    <TouchableOpacity style={{ rowGap: 10, alignItems: "center" }}>
                        <View style={{ borderRadius: 30, padding: 10, backgroundColor: "white" }}>
                            <AntDesign name="swap" size={30} color={"orange"} />
                        </View>


                    </TouchableOpacity>
                    <TouchableOpacity style={{ rowGap: 10, alignItems: "center" }}>
                        <View style={{ borderRadius: 30, padding: 10, backgroundColor: "white" }}>
                            <MaterialIcon name="copy-all" size={30} color={"blue"} />
                        </View>


                    </TouchableOpacity>
                    <TouchableOpacity style={{ rowGap: 10, alignItems: "center" }}>
                        <View style={{ borderRadius: 30, padding: 10, backgroundColor: "white" }}>
                            <Entypo name="user" size={30} color={"gray"} />
                        </View>

                    </TouchableOpacity>
                </View>
            </View>
            <StatusBar style={"auto"} />
        </ScrollView>
    )

}

export default Wallet;

const Styles = StyleSheet.create({

    trendingView: {
        backgroundColor: '#F6F6FA',
        paddingHorizontal: '5%',
        width: '100%',
        height: 180,
    },
    trendingtext: {
        fontSize: 25,
    },
    all: {
        display: 'flex',
        flexDirection: 'column',
        gap: -20,
    },
    twoBitcoinview: {
        backgroundColor: 'F6F6FA',
        width: '100%',
        height: '36%',
        marginTop: 20,
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingRight: '5%',
        marginTop: 25,
        alignItems: 'center',
    },
    bitcointextview: {
        width: '80%',
        height: '100%',
        backgroundColor: 'F6F6FA',
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        flexWrap: 'wrap',
        gap: 40,
    },
    bitcointext: {
        fontSize: 20,
    },
    bitcoinMoney: {
        fontSize: 22,
    },
    btc: {
        marginTop: -35,
        color: '#ADACB3',
    },
    percent2: {
        backgroundColor: 'F6F6FA',
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        width: '35%',
        gap: -10,
        height: '29%',
        marginTop: -35,
    },
    percentNum2: {
        marginRight: '20%',
        color: '#ADACB3',
    },
    bitcoinIcon: {
        backgroundColor: '#FFE1C5',
        marginLeft: '-0.2%',
    },
    bytecoinIcon: {
        backgroundColor: '#FFE2ED',
        marginLeft: '-0.2%',
    },
})


