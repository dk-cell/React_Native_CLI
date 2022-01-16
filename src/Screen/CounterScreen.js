// Import libraries we need to create a componets
import React, { useState } from 'react';
import { StyleSheet, Text,View,Button, Pressable} from 'react-native'
import ImageDetails from '../component/ImageDetails';

export default function CounterScreen({navigation}){
    const onPressHandler = () =>{
        navigation.navigate('Home');
    }

    const [counter, setCounter] = useState(0);
    return (
        <>
        <View style = {styles}>
           <View>
           <Button title='Increase' onPress={ () => {
               setCounter(counter +1);
           } } />
           <Button title='Decrease' onPress={ () => {
               setCounter(counter-1);
           } } />
           <Text style={styles.text}>Current count : {counter}</Text>
           </View>
           <Button title ="Go Back to Home"  onPress={onPressHandler} />
        </View>
        </>
    );
};


//Creation of Style sheet for styling for our components

const styles = StyleSheet.create({
    body :{
         flex : 1,
         alignItems : 'bottom',
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

