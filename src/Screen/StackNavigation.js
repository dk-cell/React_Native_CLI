// Import libraries we need to create a componets
import React from 'react'
import { StyleSheet, Text,View,Button, Pressable} from 'react-native'

import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import Home from './Home';  
import ImageScreen from './CounterScreen';  
import ColorScreen from './ColorScreen';
import SquareScreen from './SquareScreen';
import TextScreen from './TextScreen';

const Stack = createStackNavigator(); 
//Creation of navigation
const StackNavigation = () => {
    return (
        <NavigationContainer>
            <Stack.Navigator>
                <Stack.Screen name = "Home" component = {Home} />
                <Stack.Screen name = "Image" component = {ImageScreen}/>
                <Stack.Screen name = "ColorScreen" component = {ColorScreen} />
                <Stack.Screen name = "SquareScreen" component = {SquareScreen} />
                <Stack.Screen name = "TextScreen" component = {TextScreen} />
            </Stack.Navigator>
        </NavigationContainer>
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

//Export the component so we can use it elsewere in our project

export default StackNavigation;

