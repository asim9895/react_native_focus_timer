import React, { useState } from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import Countdown from './Countdown';
import { FontAwesome, AntDesign } from '@expo/vector-icons';

import Timings from './Timings';

const Timer = ({ focusSubject }) => {
  const [isPaused, setisPaused] = useState(true);
  return (
    <View
      style={{ justifyContent: 'center', alignItems: 'center', marginTop: 10 }}>
      <Countdown isPaused={isPaused} />
      <Timings />
      <Text style={{ color: 'gray', fontSize: 20 }}>Focusing On:</Text>
      <Text
        style={{
          color: 'white',
          fontSize: 24,
          fontWeight: '700',
          textTransform: 'uppercase',
        }}>
        {focusSubject}
      </Text>

      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-around',
          padding: 10,
          marginTop: 20,
          marginHorizontal: 20,
        }}>
        {isPaused === true ? (
          <TouchableOpacity
            activeOpacity={0.8}
            onPress={() => {
              setisPaused(false);
              console.log(isPaused);
            }}>
            <View style={styles.button}>
              <AntDesign name='caretright' color='white' size={40} />
            </View>
          </TouchableOpacity>
        ) : (
          <TouchableOpacity
            activeOpacity={0.8}
            onPress={() => {
              setisPaused(true);
              console.log(isPaused);
            }}>
            <View style={styles.button}>
              <FontAwesome name='pause' color='white' size={40} />
            </View>
          </TouchableOpacity>
        )}
      </View>
    </View>
  );
};

export default Timer;

const styles = StyleSheet.create({
  button: {
    backgroundColor: '#2C2C3E',
    height: 80,
    width: 80,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 40,
    marginHorizontal: 20,
  },
  buttonr: {
    padding: 10,
    borderRadius: 10,
    backgroundColor: '#2C2C3E',
    justifyContent: 'center',
    alignItems: 'center',
    margin: 7,
  },
});
