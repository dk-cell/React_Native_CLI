// Import libraries we need to create a componets
import React from 'react'
import { StyleSheet, Text,View,Button, Pressable} from 'react-native'

export default function Home({navigation}){
    const onPressHandler = () =>{
        navigation.navigate('Image');
    }
    const goToColorScreen = () =>{
        navigation.navigate('ColorScreen');
    }
    const goToSquareScreen = () =>{
        navigation.navigate('SquareScreen');
    }
    const goToTextScreen = () =>{
        navigation.navigate('TextScreen');
    }

    const goToBoxScreen = () =>{
        navigation.navigate('BoxScreen');
    }
    return (
        <View style = {styles.body}>
            <Text style = {styles.text}>
                Home
            </Text>
            <Button title='Go to Counter' onPress={onPressHandler} />
            <Button title='Go to Color Screen' onPress={goToColorScreen} />
            <Button title='Make Color' onPress={goToSquareScreen} />
            <Button title='Go to Text Screen' onPress={goToTextScreen} />
            <Button title='Go to Box Screen' onPress={goToBoxScreen} />

            {/* <Pressable 
            onPress={onPressHandler}
            style = {({pressed}) => ({backgroundColor : pressed? '#ddd' : '#4AB91D'})}>
                 <Text style = {styles.text}>Go to Counter</Text>
            </Pressable>
            <Pressable 
            onPress={goToColorScreen}
            style = {({pressed}) => ({backgroundColor : pressed? '#ddd' : '#4AB91D'})}>
                 <Text style = {styles.text}>Go to ColorScreen</Text>
            </Pressable>
            <Pressable 
            onPress={goToSquareScreen}
            style = {({pressed}) => ({backgroundColor : pressed? '#ddd' : '#4AB91D'})}>
                 <Text style = {styles.text}>Make Color</Text>
            </Pressable> */}
        </View>
    );
};


//Creation of Style sheet for styling for our components

const styles = StyleSheet.create({
    body :{
         flex : 1,
         alignItems : 'center',
         backgroundColor : '#ffffff',
    },
    text : {
        margin : 10,
         color : 'blue',
         fontSize : 35,
         fontWeight : 'bold'
    }
});

