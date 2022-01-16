import React, {useState} from "react";  
import { View, Stylesheet, Button, Text, FlatList } from "react-native";    
const ColorScreen = ({navigation}) => {
    const onPressHandler = () =>{
        navigation.navigate('Home');
    }

  const [color, setColor] = useState([]);

  return <View>
        <Button title = "Add a color" onPress={ () => {
            setColor([...color, randomRgb()]);
        } }/>
        
        <FlatList
            numColumns={4}
            keyExtractor={(item) => item}
            data = {color}
            renderItem={({ item }) => {
                return <View style = {{ height : 100, width : 100, backgroundColor : randomRgb() }} />

            }}
        />

        <Button title ="Go Back to Home"  onPress={onPressHandler} />

    </View>
};


const randomRgb = () => {
    const red = Math.floor(Math.random() * 256);
    const green = Math.floor(Math.random() * 256);
    const blue = Math.floor(Math.random() * 256);

    return `rgb(${red}, ${green}, ${blue})`;
}


export default ColorScreen;