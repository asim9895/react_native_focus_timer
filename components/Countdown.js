import React, { useState, useRef, useEffect } from 'react';
import { StyleSheet, Text, View, Dimensions } from 'react-native';

let screenWidth = Dimensions.get('screen').width;
let screenheight = Dimensions.get('screen').height;

const minutesToMillies = (min) => min * 1000 * 60;
const formatTime = (time) => (time < 10 ? `0${time}` : time);

const Countdown = ({ minutes = 20, isPaused }) => {
  const [millies, setmillies] = useState(minutesToMillies(minutes));
  const minute = Math.floor(millies / 1000 / 60) % 60;
  const seconds = Math.floor(millies / 1000) % 60;
  const interval = useRef(null);

  const countDown = () => {
    setmillies((time) => {
      if (time === 0) {
        return time;
      }
      const timeleft = time - 1000;

      return timeleft;
    });
  };

  useEffect(() => {
    if (isPaused) {
      if (interval.current) clearInterval(interval.current);
      return;
    }
    interval.current = setInterval(countDown, 1000);

    return () => clearInterval(interval.current);
  }, [isPaused]);
  return (
    <View style={{ flexDirection: 'column', marginHorizontal: 20 }}>
      <Text
        style={{
          color: '#f7f7f7f7',
          fontWeight: 'bold',
          fontSize: screenWidth / 1.8,
        }}>
        {formatTime(minute)}
      </Text>
      <Text
        style={{
          color: '#f7f7f7f7',
          fontWeight: 'bold',
          fontSize: screenWidth / 1.8,
          marginTop: -80,
        }}>
        {formatTime(seconds)}
      </Text>
    </View>
  );
};

export default Countdown;

const styles = StyleSheet.create({});
