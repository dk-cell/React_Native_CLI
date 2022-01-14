import React from 'react';
import type {Node} from 'react';
import {
  StyleSheet,
  Text,
  useColorScheme,
} from 'react-native';

import { Colors } from 'react-native/Libraries/NewAppScreen';
import BasicComponent from './src/BasicComponent';


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
    <BasicComponent />
    </>
  );
};

export default App;