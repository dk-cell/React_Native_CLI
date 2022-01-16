import React, {useState} from "react";
import { StyleSheet, Text, Button, View } from "react-native";
import ColorScreen from "../Screen/ColorScreen";

const ColorCounter = (prop) => {

    return (
        <>
        <Text>{prop.color}</Text>
        <Button onPress={()=> prop.onIncrease() } title ={ `Increase ${prop.color} ` }/>
        <Button onPress={()=> prop.onDecrease() }title ={ `Decrease ${prop.color} ` } />
        </>
    )

   
}

export default ColorCounter;