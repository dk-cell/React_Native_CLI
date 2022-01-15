// Import libraries we need to create a componets
import React from 'react'
import { StyleSheet, Text,View,Button, Pressable, Image} from 'react-native'

import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import ImageDetails from '../component/ImageDetails';

export default function ImageScreen({navigation}){
    const onPressHandler = () =>{
        navigation.navigate('Home');
    }

    return (
        <>
        <View style = {styles.body}>
           <View>
           <Text style = {styles.text}>
                <ImageDetails 
                title = "Forest" 
                ImageSource = {require('../assets/forest.jpg')}
                score = {9}
                />
            </Text>
            <Text style = {styles.text}>
                <ImageDetails 
                title = "Beach" 
                ImageSource = {require('../assets/beach.jpg')}
                score = {7}
                />
            </Text>
            <Text style = {styles.text}>
                <ImageDetails 
                title = "Mountain" 
                ImageSource = {require('../assets/mountain.jpg')}
                score = {10}
                />
            </Text>
           </View>
            <View style = {styles.body}>
            </View>
            <Pressable 
            onPress={onPressHandler}
            style = {({pressed}) => ({backgroundColor : pressed? '#ddd' : '#4AB91D'})}>
                 <Text style = {styles.text}>Go Back to Home</Text>
            </Pressable>
        </View>
        </>
    );
};


//Creation of Style sheet for styling for our components

const styles = StyleSheet.create({
    body :{
         flex : 1,
         alignItems : 'center',
         justifyContent : 'center',
         backgroundColor : '#ffffff',
    },
    text : {
        margin : 10,
         color : 'blue',
         fontSize : 35,
         fontWeight : 'bold'
    }
});

