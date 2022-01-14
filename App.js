import React from 'react';
import type {Node} from 'react';
import {
  StyleSheet,
  Text,
  useColorScheme,
} from 'react-native';

import { Colors } from 'react-native/Libraries/NewAppScreen';
import BasicComponent from './src/BasicComponent';
import ExerciseAndSol from './src/ExerciseAndSol';

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
    {/* <BasicComponent />   Disable the comment line to show Basic Component */}
    <ExerciseAndSol></ExerciseAndSol>
    </>
  );
};

export default App;