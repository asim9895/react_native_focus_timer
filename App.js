import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import FocusInput from './components/FocusInput';
import Timer from './components/Timer';

const App = () => {
  const [focusSubject, setfocusSubject] = useState('green energy');
  return (
    <View style={styles.container}>
      {focusSubject ? (
        <Timer focusSubject={focusSubject} />
      ) : (
        <FocusInput setfocusSubject={setfocusSubject} />
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#1D192B',
  },
});

export default App;
