import React, {useState} from "react";

import { Text, View, StyleSheet, TextInput , Button} from "react-native";
const TextScreen = ({navigation}) => {
    const onPressHandler = () =>{
        navigation.navigate('Home');
    }

    const [password, setPassword] = useState('');
    return (
        <>
        <Text>Enter Your Password : </Text>
        <TextInput
         style={styles.input}
         autoCapitalize="none"
         autoCorrect={false}
         value = {password}
         onChangeText = {(newValue) => setPassword(newValue) }

        />
        {password.length < 4 ? <Text>Password Length must be 4 length</Text> : null }


        <Button title ="Go Back to Home"  onPress={onPressHandler} />
        </>


    )
};

const styles = StyleSheet.create({
    input : {
        margin : 15,
        borderColor : 'black',
        borderWidth : 1
    }
});
export default TextScreen;