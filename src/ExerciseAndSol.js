/*
show 2 text element 
1. font size of 45
2. font size of 20
For second text element assign your name to a variable then print it up in the jsx element


Here is the solution..
*/


//import necessary lib
import React from "react";

//import components

import { StyleSheet, View ,Text} from "react-native";

const name ='Deepak Singh';
const ExerciseAndSol = () =>{
    return (
        <View style = {styles.body}>
            <Text style = {styles.t1}>Getting Started With React Native</Text>
            <Text style = {styles.t2}>My name is {name}</Text>
        </View>

    );
};

//Now Create StyleSheet for styling your output

const styles = StyleSheet.create({
    body :{
         flex : 1,
         alignItems : 'center',
         justifyContent : 'center',
         backgroundColor : '#ffffff',
    },
    t1 : {
        margin : 10,
         color : 'blue',
         fontSize : 45,
         fontWeight : 'bold'
    },
    t2 : {
        margin : 10,
         color : 'blue',
         fontSize : 20,
         fontWeight : 'bold'
    }
});


// Export the app

export default ExerciseAndSol;