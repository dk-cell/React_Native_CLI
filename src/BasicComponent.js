// Import libraries we need to create a componets

import React from 'react'
import { StyleSheet, Text,View} from 'react-native'

//Creation of component

// Here is the core component https://reactnative.dev/docs/intro-react-native-components
const BasicComponent = () => {
    return (
         <View style= {styles.body}>
     <Text style ={styles.text}>In this section we are using TEXT and VIEW components of react native</Text>
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
          fontSize : 20,
          fontWeight : 'bold'
     }
});

//Export the component so we can use it elsewere in our project

export default BasicComponent;

