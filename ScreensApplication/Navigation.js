import React from "react";

import Register from "../ScreensApplication/RegisterLoginScreens/Register";
import Login from "./RegisterLoginScreens/Login";
import Wallet from "./RegisterLoginScreens/Wallet";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Welcome from "./RegisterLoginScreens/Welcome";

const stack = createNativeStackNavigator();

const Navigation = () => {
  return (
    <NavigationContainer>
      <stack.Navigator initialRouteName="firstScreen">

        <stack.Screen name="login" component={Login} options={{ title: '' }} />
        <stack.Screen name="register" component={Register} options={{ title: '' }} />
        <stack.Screen name="wallet" component={Wallet} options={{ title: '' }} />
        <stack.Screen name="welcome" component={Welcome} options={{ title: '' }} />
        <stack.Screen name="firstScreen" component={FirstScreen} options={{ title: '' }} />
      </stack.Navigator>


    </NavigationContainer>



    // <First_screen />

    // <Register />

    // <Wallet />

    // <Login/>

    // <ImageGallery/>


  );
}
export default Navigation;