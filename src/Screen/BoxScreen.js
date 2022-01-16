// Import libraries we need to create a componets
import React, { useState } from 'react';
import { StyleSheet, Text,View,Button, Pressable, ViewComponent} from 'react-native'


export default function BoxScreen({navigation}){
    const onPressHandler = () =>{
        navigation.navigate('Home');
    }
    return (
        <>
        <View style = {styles.body}>
           <View style ={styles.viewOne}></View>
           <View style = {styles.viewTwo}></View>
           <View style={styles.viewThree}></View>
        </View>
        <Button  title ="Go Back to Home"  onPress={onPressHandler} />
        </>
    );
};


//Creation of Style sheet for styling for our components

const styles = StyleSheet.create({
    body :{
         borderWidth : 3,
         borderColor : 'black',
         height : 200,
         flexDirection : 'row',
         justifyContent : 'space-between',
    },

    viewOne:{
        height : 50,
        width : 50,
        backgroundColor : 'red',

    },
    viewTwo:{
        height : 50,
        width : 50,
        backgroundColor:'green',
        top : 50,
    },
    viewThree:{
        height : 50,
        width : 50,
        backgroundColor : 'blue',

    }
});

