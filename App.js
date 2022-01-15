import React from 'react';
import {
  StyleSheet,
  Text,
  useColorScheme,
} from 'react-native';

import { Colors } from 'react-native/Libraries/NewAppScreen';
import StackNavigation from './src/Screen/StackNavigation';


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
    <StackNavigation></StackNavigation>
    </>
  );
};

export default App;