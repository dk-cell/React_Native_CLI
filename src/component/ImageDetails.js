import React from "react";

import { Text , StyleSheet, View, Image  } from "react-native";


const ImageDetails = (prop) =>{
    return(
        <>
        <View>
        <Image source={prop.ImageSource} />
        <Text style={styles.text}>
            {prop.title} and Image Score - {prop.score}
        </Text>
        </View>
        </>
    );
};

const styles = StyleSheet.create({
    text : {
        margin : 10,
         color : 'blue',
         fontSize : 20,
         fontWeight : 'bold'
    }
});


export default ImageDetails;