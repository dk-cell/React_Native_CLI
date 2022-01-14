import React, { useState } from 'react';
import {
    Button,
    Linking,
    StyleSheet,
    Text,
    useColorScheme,
    ScrollView,
    View,
    FlatList,
 } from 'react-native';
 
 const ListBuilding = () => {

  //  const [Items, setItems] = useState([
  //    {key:1, item: 'Item 1'},
  //    {key:2, item: 'Item 2'},
  //    {key:3, item: 'Item 3'},
  //    {key:4, item: 'Item 4'},
  //    {key:5, item: 'Item 5'},
  //    {key:6, item: 'Item 6'},
  //    {key:7, item: 'Item 7'},
  //    {key:4, item: 'Item 4'},
  //    {key:5, item: 'Item 5'},
  //    {key:6, item: 'Item 6'},
  //    {key:7, item: 'Item 7'},
  //  ])
 
const [Items, setItems] = useState([
  {key : '1', name : 'Item 1'},
  {key : '2', name : 'Item 2'},
  {key : '3', name : 'Item 3'},
  {key : '4', name : 'Item 4'},
  {key : '5', name : 'Item 5'},
  {key : '6', name : 'Item 6'},
  {key : '7', name : 'Item 7'},
  {key : '8', name : 'Item 8'},
  {key : '9', name : 'Item 9'},
  {key : '10', name : 'Item 10'},
  {key : '11', name : 'Item 11'},
  {key : '12', name : 'Item 12'},
  {key : '13', name : 'Item 13'},
]);

{/* <ScrollView style={styles.body}> */}
    //  {
    //    Items.map((object) => {
        //  return (
        //    <View style = {styles.item} key={object.item}>
        //      <Text style={styles.text}>{object.item}</Text>
        //    </View>
    //      )
    //    })
    //  }
    //  </ScrollView>

    // FlatList
   return (
     <FlatList
     // FlatList by default render content column wise if u want to specify column then 
     numColumns={2}
    //  horizontal //Uncomment if u want to display content horizontally
     data = {Items}
     renderItem ={({item}) => (
      
      <View style = {styles.item} >
      <Text style={styles.text}>{item.name}</Text>
      </View>
     )}
     />
     
   );
 };
 
 const styles = StyleSheet.create({
   body :{
     flex:1,
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
     fontSize : 60,
     margin : 10,
     fontStyle:'italic'
   }
    
 });
 
 export default ListBuilding;
 