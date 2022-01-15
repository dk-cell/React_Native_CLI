// Import libraries we need to create a componets
import React from 'react'
import { StyleSheet, Text,View,Button, Pressable} from 'react-native'

export default function ScreenA({navigation}){
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

