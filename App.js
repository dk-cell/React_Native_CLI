import React from 'react';
import {
  FlatList,
  StyleSheet,
  Text,
  useColorScheme,
} from 'react-native';

import { Colors } from 'react-native/Libraries/NewAppScreen';
import ExerciseAndSol from './src/ExerciseAndSol';
import ListBuilding from './src/ListBuilding';

const Section = ({children, title}) => {
  const isDarkMode = useColorScheme() === 'dark';
};

const App = () => {
  const isDarkMode = useColorScheme() === 'dark';

  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  };

  return (
    <>
    {/* <ListBuilding></ListBuilding> // Enable to see How List working  */}
    <ExerciseAndSol></ExerciseAndSol>
    </>
  );
};

export default App;