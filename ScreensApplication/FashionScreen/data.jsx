import React from "react";
import { ScrollView, StyleSheet, View,Image } from "react-native";
import { StatusBar } from 'expo-status-bar';
import Card from "./card";

const Data = () => {
    const data = [
        {
            id: 1,
            image: 
            "https://pixabay.com/photos/fashion-woman-hat-portrait-2309519/",
            price: 25,
            title: "T-shirt",
        },
        {
            id: 2,
            image: 
            "https://www.istockphoto.com/photo/beautiful-brunette-woman-walking-on-sunset-beach-in-fashionable-maxi-dress-relaxing-gm1362588255",
            price: 25,
            title: "T-shirt"
        },
        {
            id: 3,
            image:
            'https://www.istockphoto.com/photo/happy-beautiful-woman-holding-festive-sparkler-among-christmas-night-gm1346544005-424284803?utm_campaign=srp_photos_top&utm_content=https%3A%2F%2Funsplash.com%2Fs%2Fphotos%2Fdress&utm_medium=affiliate&utm_source=unsplash&utm_term=dress%3A%3A%3A',
            price: 25,
            title: "T-shirt"
        }
    ];
    return(
        <View>
            <ScrollView horizontal showsHorizontalScrollIndicator={false}>
        {data.map((item, index) => {
          return (
            <View style={{ margin: 3 }}>
              <Card
                key={index}
                title={item.title}
                price={item.price}
                image={item.image}
              />
            </View>
          );
        })}
      </ScrollView>
        </View>
    )
}


export default Data;

 


