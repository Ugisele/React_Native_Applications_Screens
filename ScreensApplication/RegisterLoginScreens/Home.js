// import React from "react";
// import { StatusBar } from "expo-status-bar";
// import { TextInput, Icon, IconButton } from "react-native-paper";
// import { View, Text, TouchableOpacity, StyleSheet, Image, ScrollView } from "react-native";
// import AntDesign from "react-native-vector-icons/AntDesign"
// import MaterialIcons from "react-native-vector-icons/MaterialIcons"



// const Home = ({ navigation }) => {
//     return (
//         <View style={Styles.container}>
//             <ScrollView>
//                 <StatusBar style="auto" />
//                 <View style={Styles.home}>
//                     <View style={{ display: 'flex', flexDirection: 'row', alignItems: 'center', }}>
//                         <IconButton icon={'arrow-left'} onPress={() => navigation.navigate('Login')} />
//                         <Text style={Styles.homeWord}>Home</Text>
//                     </View>

//                     <View style={Styles.homeIcons}>
//                         <View style={Styles.PriceAlert}>
//                             <TouchableOpacity style={Styles.PriceAlertTouch}>
//                                 <MaterialIcons name="bolt" style={Styles.PriceAlertIcon} />
//                             </TouchableOpacity>
//                         </View>
//                         <View style={Styles.Convert}>
//                             <TouchableOpacity style={Styles.ConvertTouch}>
//                                 <AntDesign name="swap" style={Styles.ConvertIcon} />
//                             </TouchableOpacity>

//                         </View>
//                         <View style={Styles.Copy}>
//                             <TouchableOpacity style={Styles.CopyTouch} >
//                                 <Image source={require('../assets/copy.jpeg')} style={Styles.CopyIcon} />
//                             </TouchableOpacity>
//                         </View>
//                         <View style={Styles.Star}>
//                             <TouchableOpacity style={Styles.StarTouch}>
//                                 <MaterialIcons name="star-border-purple500" style={Styles.StarIcon} />
//                             </TouchableOpacity>
//                         </View>

//                         <View style={Styles.firstWord}>
//                             <Text>Price Alert</Text>
//                             <Text>Convert</Text>
//                             <Text>Compare</Text>
//                             <Text>Watchlist</Text>
//                         </View>
//                     </View>

//                 </View>

//                 <View style={Styles.middle}>
//                     <Text style={Styles.walletWord}>Your Wallet</Text>

//                     <ScrollView contentContainerStyle={Styles.horizontalSV} showsHorizontalScrollIndicator={false} horizontal>

//                         <View style={Styles.scroll1}>
//                             <View style={Styles.money}>
//                                 <Text style={Styles.neo}>Neo</Text>
//                                 <Text style={Styles.neoNumbers}>NEO 0.2124</Text>
//                                 <Text style={Styles.neoMoney}>$32,128.80</Text>
//                             </View>
//                             <View style={Styles.greenIcon}>
//                                 <TouchableOpacity style={Styles.neoTouch}>
//                                     <Image source={require('../assets/neo.jpeg')} style={Styles.neoLogo} />
//                                 </TouchableOpacity>
//                                 <TouchableOpacity style={Styles.percent}>
//                                     <IconButton icon={'chevron-down'} iconColor="#DB7388" style={Styles.dropdown} />
//                                     <Text style={Styles.percentNum}>2.5%</Text>
//                                 </TouchableOpacity>
//                                 {/* vechain */}
//                                 {/* chevron-down */}
//                             </View>
//                         </View>

//                         <View style={Styles.scroll1}>
//                             <View style={Styles.money}>
//                                 <Text style={Styles.neo}>Vechain</Text>
//                                 <Text style={Styles.neoNumbers}>VEC 0.2124</Text>
//                                 <Text style={Styles.neoMoney}>$32,128.80</Text>
//                             </View>
//                             <View style={Styles.greenIcon}>
//                                 <TouchableOpacity style={Styles.vechainTouch}>
//                                     <Image source={require('../assets/vechain.png')} style={Styles.neoLogo} />
//                                 </TouchableOpacity>
//                                 <TouchableOpacity style={Styles.percent}>
//                                     <IconButton icon={'chevron-down'} iconColor="blue" style={Styles.dropdown} />
//                                     <Text style={Styles.percentNum}>2.5%</Text>
//                                 </TouchableOpacity>
//                                 {/* vechain */}
//                                 {/* chevron-down */}
//                             </View>
//                         </View>

//                         <View style={Styles.scroll1}>
//                             <View style={Styles.money}>
//                                 <Text style={Styles.neo}>Neo</Text>
//                                 <Text style={Styles.neoNumbers}>NEO 0.2124</Text>
//                                 <Text style={Styles.neoMoney}>$32,128.80</Text>
//                             </View>
//                             <View style={Styles.greenIcon}>
//                                 <TouchableOpacity style={Styles.neoTouch}>
//                                     <Image source={require('../assets/neo.jpeg')} style={Styles.neoLogo} />
//                                 </TouchableOpacity>
//                                 <TouchableOpacity style={Styles.percent}>
//                                     <IconButton icon={'chevron-down'} iconColor="#DB7388" style={Styles.dropdown} />
//                                     <Text style={Styles.percentNum}>2.5%</Text>
//                                 </TouchableOpacity>
//                                 {/* vechain */}
//                                 {/* chevron-down */}
//                             </View>
//                         </View>

//                     </ScrollView>
//                 </View>

//                 <View style={Styles.trendingDiv}>
//                     <Text style={Styles.trendingWord}>Trending</Text>

//                     <View style={Styles.all}>
//                         <View style={Styles.twoBitcoinDivs}>
//                             <IconButton icon={'currency-btc'} size={35} iconColor="#F7961A" style={Styles.bitcoinIcon} />
//                             <View style={Styles.bitcoinWordDiv}>
//                                 <Text style={Styles.bitcoinWord}>Bitcoin</Text>
//                                 <Text style={Styles.bitcoinMoney}>$32,128.80</Text>
//                                 <Text style={Styles.btc}>BTC</Text>
//                                 <TouchableOpacity style={Styles.percent2}>
//                                     <IconButton icon={'chevron-up'} iconColor="#7CC39D" style={Styles.dropup} />
//                                     <Text style={Styles.percentNum2}>2.5%</Text>
//                                 </TouchableOpacity>
//                             </View>
//                         </View>

//                         <View style={Styles.twoBitcoinDivs}>
//                             <IconButton icon={'currency-btc'} size={35} iconColor="#D04E80" style={Styles.bytecoinIcon} />
//                             <View style={Styles.bitcoinWordDiv}>
//                                 <Text style={Styles.bitcoinWord}>Bytecoin</Text>
//                                 <Text style={Styles.bitcoinMoney}>$15,128.80</Text>
//                                 <Text style={Styles.btc}>BCN</Text>
//                                 <TouchableOpacity style={Styles.percent2}>
//                                     <IconButton icon={'chevron-up'} iconColor="#7CC39D" style={Styles.dropup} />
//                                     <Text style={Styles.percentNum2}>2.2%</Text>
//                                 </TouchableOpacity>
//                             </View>
//                         </View>
//                     </View>
//                 </View>

//                 <View style={Styles.last}>
//                     <IconButton icon={'home-outline'} size={30} style={Styles.homeIcon} />
//                     <IconButton icon={'chart-bar'} size={30} iconColor="#E1E1E5" style={Styles.homeIcon} />
//                     <IconButton icon={'wallet-outline'} size={30} iconColor="#E1E1E5" style={Styles.homeIcon} />
//                     <IconButton icon={'script-outline'} size={30} iconColor="#E1E1E5" style={Styles.homeIcon} />
//                     <IconButton icon={'account-arrow-left-outline'} size={30} iconColor="#E1E1E5" style={Styles.accountIcon} onPress={() => navigation.navigate('Login')} />
//                 </View>
//             </ScrollView>
//         </View>
//     )
// }

// export default Home;


// const Styles = StyleSheet.create({
//     container: {
//         backgroundColor: '#EFECF7',
//         width: '100%',
//         height: 'auto',
//         paddingTop: 33,
//     },
//     home: {
//         backgroundColor: '#EFECF7',
//         width: '100%',
//         height: 'auto',
//         paddingHorizontal: '5%',
//     },
//     homeText: {
//         fontSize: 25,
//         color: 'black',
//         fontWeight: 'bold',
//     },
//     homeIcons: {
//         backgroundColor: '#EFECF7',
//         width: '100%',
//         height: 100,
//         marginTop: 20,
//         display: 'flex',
//         flexDirection: 'row',
//         gap: 10,
//         justifyContent: 'space-between',
//         alignItems: 'center',
//         flexWrap: 'wrap',
//     },
//     firstIcon: {
//         display: 'flex',
//         flexDirection: 'column',
//     },
//     PriceAlert: {
//         backgroundColor: 'white',
//         width: '20%',
//         height: '65%',
//         display: 'flex',
//         flexDirection: 'column',
//         justifyContent: 'center',
//         alignItems: 'center',
//         borderRadius: 100,
//     },
//     PriceAlertTouch: {
//         borderWidth: 2,
//         borderRadius: 100,
//         borderColor: '#DDDBF4',
//         width: '35%',
//         height: '35%',
//         display: 'flex',
//         flexDirection: 'row',
//         justifyContent: 'center',
//         alignItems: 'center',
//     },
//     PriceAlertIcon: {
//         fontSize: 30,
//         color: '#7E8CE8',
//         marginTop: -12,
//         marginLeft: '-10%',
//     },
//     Convert: {
//         backgroundColor: 'white',
//         width: '20%',
//         height: '65%',
//         display: 'flex',
//         flexDirection: 'row',
//         justifyContent: 'center',
//         alignItems: 'center',
//         borderRadius: 100,
//     },
//     ConvertTouch: {
//         borderWidth: 2,
//         borderRadius: 100,
//         borderColor: '#F6EBDF',
//         width: '50%',
//         height: '50%',
//         display: 'flex',
//         flexDirection: 'row',
//         justifyContent: 'center',
//         alignItems: 'center',
//     },
//     ConvertIcon: {
//         fontSize: 25,
//         color: '#F2C58B',
//     },
//     Copy: {
//         backgroundColor: 'white',
//         width: '20%',
//         height: '65%',
//         display: 'flex',
//         flexDirection: 'row',
//         justifyContent: 'center',
//         alignItems: 'center',
//         borderRadius: 100,
//     },
//     CopyTouch: {
//         // borderWidth: 2,
//         // borderColor: '#F6EBDF',
//         width: '50%',
//         height: '50%',
//         display: 'flex',
//         flexDirection: 'row',
//         justifyContent: 'center',
//         alignItems: 'center',
//     },
//     CopyIcon: {
//         width: '100%',
//         height: '100%',
//     },
//     Star: {
//         backgroundColor: 'white',
//         width: '20%',
//         height: '65%',
//         display: 'flex',
//         flexDirection: 'row',
//         justifyContent: 'center',
//         alignItems: 'center',
//         borderRadius: 100,
//     },
//     StarTouch: {
//         borderWidth: 2,
//         borderRadius: 100,
//         borderColor: '#D1E7DD',
//         width: '50%',
//         height: '50%',
//         display: 'flex',
//         flexDirection: 'row',
//         justifyContent: 'center',
//         alignItems: 'center',
//     },
//     StarIcon: {
//         fontSize: 30,
//         color: '#6EC386',
//         marginTop: -3,
//     },
//     firstWord: {
//         display: 'flex',
//         flexDirection: 'row',
//         justifyContent: 'space-between',
//         gap: 33,
//     },

//     middle: {
//         paddingLeft: '5%',
//         backgroundColor: '#F8F7FB',
//         borderTopLeftRadius: 30,
//         borderTopRightRadius: 30,
//         marginTop: 50,
//         paddingTop: 30,
//         width: '100%',
//         height: 260,
//         display: 'flex',
//         flexDirection: 'column',
//     },
//     walletWord: {
//         fontSize: 25,
//     },
//     horizontalSV: {
//         backgroundColor: 'F8F7FB',
//         alignItems: 'center',
//         gap: 20,
//         height: 170,
//     },
//     scroll1: {
//         display: 'flex',
//         flexDirection: 'row',
//         justifyContent: 'space-between',
//         alignItems: 'center',
//         paddingVertical: 20,
//         paddingHorizontal: '2%',
//         backgroundColor: 'white',
//         width: 290,
//         height: 'auto',
//         borderRadius: 30,
//     },
//     money: {
//         backgroundColor: 'white',
//         width: '49%',
//         height: '55%',
//         gap: 3,
//     },
//     neo: {
//         color: '#B7B6BE',
//         fontSize: 15,
//     },
//     neoNumbers: {
//         fontSize: 16,
//     },
//     neoMoney: {
//         marginTop: 6,
//         fontSize: 22,
//     },
//     greenIcon: {
//         backgroundColor: 'white',
//         display: 'flex',
//         flexDirection: 'column',
//         width: '50%',
//         height: '80%',
//         gap: 15,
//         justifyContent: 'center',
//         alignItems: 'flex-end',
//     },
//     neoTouch: {
//         backgroundColor: '#D0EDC9',
//         width: '45%',
//         height: '45%',
//         alignItems: 'center',
//         justifyContent: 'center',
//         borderRadius: 30,
//         marginTop: -18,
//     },
//     vechainTouch: {
//         backgroundColor: '#E0E2FF',
//         width: '45%',
//         height: '45%',
//         alignItems: 'center',
//         justifyContent: 'center',
//         borderRadius: 30,
//         marginTop: -18,
//     },
//     neoLogo: {
//         width: '50%',
//         height: '50%',
//     },
//     percent: {
//         backgroundColor: 'white',
//         width: '50%',
//         height: '20%',
//         display: 'flex',
//         flexDirection: 'row',
//         justifyContent: 'center',
//         alignItems: 'center',
//         gap: -13,
//     },
//     dropdown: {
//         marginLeft: '-20%',
//     },
//     percentNum: {
//         color: '#B7B6BE',
//         fontSize: 13,
//     },


//     trendingDiv: {
//         backgroundColor: '#F6F6FA',
//         paddingHorizontal: '5%',
//         width: '100%',
//         height: 180,
//     },
//     trendingWord: {
//         fontSize: 25,
//     },
//     all: {
//         display: 'flex',
//         flexDirection: 'column',
//         gap: -20,
//     },
//     twoBitcoinDivs: {
//         backgroundColor: 'F6F6FA',
//         width: '100%',
//         height: '36%',
//         marginTop: 20,
//         display: 'flex',
//         flexDirection: 'row',
//         justifyContent: 'space-between',
//         paddingRight: '5%',
//         marginTop: 25,
//         alignItems: 'center',
//     },
//     bitcoinWordDiv: {
//         width: '80%',
//         height: '100%',
//         backgroundColor: 'F6F6FA',
//         display: 'flex',
//         flexDirection: 'row',
//         justifyContent: 'space-between',
//         flexWrap: 'wrap',
//         gap: 40,
//     },
//     bitcoinWord: {
//         fontSize: 20,
//     },
//     bitcoinMoney: {
//         fontSize: 22,
//     },
//     btc: {
//         marginTop: -35,
//         color: '#ADACB3',
//     },
//     percent2: {
//         backgroundColor: 'F6F6FA',
//         display: 'flex',
//         flexDirection: 'row',
//         justifyContent: 'center',
//         alignItems: 'center',
//         width: '35%',
//         gap: -10,
//         height: '29%',
//         marginTop: -35,
//     },
//     dropup: {
//         // marginRight: '10%',
//     },
//     percentNum2: {
//         marginRight: '20%',
//         color: '#ADACB3',
//     },
//     bitcoinIcon: {
//         backgroundColor: '#FFE1C5',
//         marginLeft: '-0.2%',
//     },
//     bytecoinIcon: {
//         backgroundColor: '#FFE2ED',
//         marginLeft: '-0.2%',
//     },

//     last: {
//         backgroundColor: 'white',
//         marginTop: 30,
//         height: 80,
//         borderTopLeftRadius: 30,
//         borderTopRightRadius: 30,
//         width: '100%',
//         display: 'flex',
//         flexDirection: 'row',
//         justifyContent: 'space-between',
//         alignItems: 'center',
//     },

// })