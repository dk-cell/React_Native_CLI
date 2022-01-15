// Import libraries we need to create a componets
import React from 'react'
import { StyleSheet, Text,View,Button, Pressable} from 'react-native'

import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';



export default function ScreenB({navigation}){
    const onPressHandler = () =>{
        navigation.navigate('Screen_A');
    }

    return (
        <View style = {styles.body}>
            <Text style = {styles.text}>
                Screen B
            </Text>

            <Pressable 
            onPress={onPressHandler}
            style = {({pressed}) => ({backgroundColor : pressed? '#ddd' : '#4AB91D'})}>
                 <Text style = {styles.text}>Go Back to Screen A</Text>
            </Pressable>
        </View>
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

