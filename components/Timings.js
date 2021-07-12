import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  FlatList,
  TouchableOpacity,
} from 'react-native';
import { count_timer } from '../data/time_data';

const Timings = () => {
  return (
    <FlatList
      data={count_timer}
      showsVerticalScrollIndicator={false}
      style={{ marginBottom: 20, marginTop: -20 }}
      numColumns={4}
      renderItem={({ item }) => (
        <TouchableOpacity onPress={() => console.log(`${item.time}`)}>
          <View style={styles.button}>
            <Text style={{ color: 'white', fontWeight: '700' }}>
              {item.label}
            </Text>
          </View>
        </TouchableOpacity>
      )}
    />
  );
};

export default Timings;

const styles = StyleSheet.create({
  button: {
    padding: 10,
    borderRadius: 10,
    backgroundColor: '#2C2C3E',
    justifyContent: 'center',
    alignItems: 'center',
    margin: 7,
  },
});
