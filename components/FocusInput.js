import React, { useState } from 'react';
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
} from 'react-native';

const FocusInput = ({ setfocusSubject }) => {
  const [inputText, setinputText] = useState('');

  return (
    <View style={{ marginVertical: 70, marginHorizontal: 20 }}>
      <Text
        style={{
          marginTop: -20,
          fontSize: 22,
          fontWeight: '700',
          color: '#fff',
          textAlign: 'center',
        }}>
        FocusTimer
      </Text>
      <Text
        style={{
          fontSize: 22,
          fontWeight: '700',
          color: '#fff',
          marginTop: 40,
        }}>
        What would u like to focus on?
      </Text>
      <View
        style={{
          marginTop: 10,
          flexDirection: 'row',
          justifyContent: 'space-between',
        }}>
        <View style={[styles.inputContainer, { width: '73%' }]}>
          <TextInput
            placeholder='Enter Task to focus on'
            placeholderTextColor='#fff'
            style={styles.input}
            onChangeText={(text) => {
              setinputText(text);
            }}
            // onSubmitEditing={({ nativeEvent }) => {
            //   setinputText(nativeEvent.text);
            //   console.log(nativeEvent.text);
            // }}
          />
        </View>
        <TouchableOpacity
          onPress={() => {
            setfocusSubject(inputText);
            console.log(inputText);
          }}
          activeOpacity={0.8}>
          <View style={[styles.inputContainer, styles.button]}>
            <Text style={{ color: '#fff', fontWeight: 'bold' }}>Submit</Text>
          </View>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default FocusInput;

const styles = StyleSheet.create({
  inputContainer: {
    height: 50,
    backgroundColor: '#2C2C3E',
    alignItems: 'flex-start',
    justifyContent: 'center',
    borderRadius: 10,
  },
  input: {
    paddingHorizontal: 20,
    color: '#fff',
  },
  button: {
    marginLeft: 10,
    borderRadius: 10,
    padding: 10,
  },
});
