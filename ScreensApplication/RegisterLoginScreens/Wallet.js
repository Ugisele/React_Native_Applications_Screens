import React from "react";
import { View, Text, StyleSheet, TouchableOpacity, ScrollView, StatusBar } from "react-native";
import Entypo from "react-native-vector-icons/Entypo";
import AntDesign from "react-native-vector-icons/AntDesign";
import MaterialIcon from "react-native-vector-icons/MaterialIcons";
import { Icon } from "react-native-elements";



const Wallet = () => {
    return (

        <ScrollView>
            <View style={{ backgroundColor: "pink", paddingVertical: 20, paddingHorizontal: 10 }}>
                <Text style={{}}> Home </Text>
                <View style={{ flexDirection: "row", justifyContent: "space-between", width: "100%", paddingHorizontal: 10 }}>
                    <TouchableOpacity style={{ rowGap: 10, alignItems: "center" }}>
                        <View style={{ borderRadius: 30, padding: 10, backgroundColor: "white" }}>
                            <Entypo name="flash" size={30} color={"blue"} />
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

                        <Text > watchList </Text>
                    </TouchableOpacity>
                </View>
            </View>

            <View style={{ backgroundColor: 'green', borderRadius: 30 }}>

                <Text style={{ fontSize: 25, margin: 20, marginLeft: 10, fontWeight: "bold" }}> My Wallet</Text>

                <View style={{ flex: 2, flexDirection: "row", paddingHorizontal: 10, }}>
                    <ScrollView horizontal>
                        <View style={{ flexDirection: "row", backgroundColor: "pink", borderRadius: 10, padding: 10, width: '280px' }}>
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
                        <View style={{ flexDirection: "row", backgroundColor: "pink", borderRadius: 10, padding: 10, width: '280px' }}>
                            <View>
                                <Text style={{ fontSize: 16 }}>Neo</Text>
                                <Text style={{ fontSize: 18, fontWeight: "bold", marginBottom: 15 }}>Neo 0,3456</Text>
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
                        <View style={{ flexDirection: "row", backgroundColor: "pink", borderRadius: 10, padding: 10, width: '280px' }}>
                            <View>
                                <Text style={{ fontSize: 16 }}>Neo</Text>
                                <Text style={{ fontSize: 18, fontWeight: "bold", marginBottom: 15 }}>Neo 0,3456</Text>
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

                        <View style={{ flexDirection: "row", backgroundColor: "pink", borderRadius: 10, padding: 10, width: "280px" }}>
                            <View>
                                <Text style={{ fontSize: 16 }}>Neo</Text>
                                <Text style={{ fontSize: 18, fontWeight: "bold", marginBottom: 10 }}>Neo 0,3456</Text>
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

                <View>
                    <Text style={{ fontSize: 25, fontWeight: 'bold', margin: 20, marginLeft: 10 }}>Trendings</Text>
                    <View>
                        <View>
                            <View>
                                <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                                    <TouchableOpacity style={{ flexDirection: 'row' }}>
                                        <MaterialIcon name="warehouse" color={"white"} size={25} style={{ backgroundColor: 'red', padding: 10, borderRadius: 50, alignItems: "center" }} />
                                        <Text style={{ fontSize: 25, fontWeight: 'bold', flexDirection: 'column', gap: 6 }}>Bitcoin
                                            <Text style={{ fontSize: 12, fontWeight: 'normal' }}>BTC</Text>
                                        </Text>
                                    </TouchableOpacity>
                                </View>
                                <View>
                                    <Text style={{ fontSize: 18, fontWeight: "bold" }}>$3,4556</Text>
                                    <TouchableOpacity style={{ flexDirection: 'column', padding: 10, borderRadius: 50 }}>
                                        <Text style={{ marginTop: 5 }}>2.5%</Text>
                                        <MaterialIcon name="keyboard-arrow-down" color={"red"} size={25} />
                                    </TouchableOpacity>
                                </View>
                            </View>
                            <View>
                                <View>
                                    <TouchableOpacity style={{ padding: 10, borderRadius: 50 }}>
                                        <MaterialIcon name="warehouse" color={"white"} size={25} />
                                        <Text style={{ fontSize: 25, fontWeight: 'bold' }}>Bitcoin</Text>
                                        <Text>BTC</Text>
                                    </TouchableOpacity>
                                </View>
                                <View>
                                    <Text style={{ fontSize: 18, fontWeight: "bold" }}>$3,4556</Text>
                                    <TouchableOpacity style={{ flexDirection: 'row-reverse', padding: 10, borderRadius: 50 }}>
                                        <Text style={{ marginTop: 5 }}>2.5%</Text>
                                        <MaterialIcon name="keyboard-arrow-down" color={"red"} size={25} />
                                    </TouchableOpacity>
                                </View>
                            </View>

                        </View>
                    </View>
                </View>
            </View>
            <StatusBar style={"auto"} />
        </ScrollView>
    )

}

export default Wallet;


