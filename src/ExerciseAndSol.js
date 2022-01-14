/*
Make the Flatlist Scroll vertially
Add a new 'age' property to each of our 'friend' objects
Print out that age for each element produced by the Flatlist

Friend 1 - Age 20
Friend 2 - Age 20
Friend 3- Age 20
Friend 4- Age 20... and so on

Here is the solution..
*/


//import necessary lib
import React from "react";

//import components

import { StyleSheet, View ,Text, FlatList} from "react-native";

const friends = [
    { name : 'Friend 1', Age : 20},
    { name : 'Friend 2', Age : 30},
    { name : 'Friend 3', Age : 6},
    { name : 'Friend 4', Age : 10},
    { name : 'Friend 5', Age : 30},
    { name : 'Friend 6', Age : 15},
    { name : 'Friend 7', Age : 20},
];
const ExerciseAndSol = () =>{
    return (
        <FlatList
        // FlatList by default render content column wise if u want to specify column then 
        // numColumns={2}
       //  horizontal //Uncomment if u want to display content horizontally
        data = {friends}
        renderItem ={({item}) => (
         
         <View style = {styles.item} >
         <Text style={styles.text}>{item.name} - Age {item.Age}</Text>
         </View>
        )}
        />
        
      );
};

//Now Create StyleSheet for styling your output
const styles = StyleSheet.create({
    body :{
      flex:1,
      margin:50,
      flexDirection:'column',
      backgroundColor: '#ffffff',
    },
    item:{
      margin:10,
      backgroundColor: '#4ae1fa',
      justifyContent: 'center',
      alignItems: 'center',
    },
    text :{
      color:'#000000',
      fontSize : 30,
      margin : 10,
      fontStyle:'italic'
    }
     
  });

// Export the app

export default ExerciseAndSol;