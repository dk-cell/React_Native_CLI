// Import libraries we need to create a componets
import React from 'react'
import { StyleSheet, Text,View,Button, Pressable} from 'react-native'

import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

const Stack = createStackNavigator(); 

function ScreenA({navigation}){
    const onPressHandler = () =>{
        navigation.navigate('Screen_B');
    }
    return (
        <View style = {styles.body}>
            <Text style = {styles.text}>
                Screen A
            </Text>
            <Pressable 
            onPress={onPressHandler}
            style = {({pressed}) => ({backgroundColor : pressed? '#ddd' : '#4AB91D'})}>
                 <Text style = {styles.text}>Go to Screen B</Text>
            </Pressable>
        </View>
    );
};


function ScreenB({navigation}){
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
    )
}
//Creation of navigation
const StackNavigation = () => {
    return (
        <NavigationContainer>
            <Stack.Navigator>
                <Stack.Screen
                name = "Screen_A"
                component = {ScreenA}
                />

                <Stack.Screen
                name = "Screen_B"
                component = {ScreenB}
                />
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

