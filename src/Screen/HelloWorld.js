  
import React from 'react'
import { StyleSheet, Text,View} from 'react-native'

const HelloWorld = () => {
    return (
         <View style= {styles.body}>
     <Text style ={styles.text}>Hello World !</Text>
     </View>
    );
};

const styles = StyleSheet.create({
     body :{
          flex : 1,
          alignItems : 'center',
          justifyContent : 'center',
          backgroundColor : '#AE1DB9',
     },
     text : {
          color : 'white',
          fontSize : 50,
          fontWeight : 'bold'
     }
});


export default HelloWorld;

