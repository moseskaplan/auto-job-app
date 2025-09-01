import React from 'react';
import { View, StyleSheet } from 'react-native';
import { Text } from 'react-native-paper';
import Slider from '@react-native-community/slider';

type Props = {
  value: number;
  onChange: (v: number) => void;
};

const PreferenceSlider: React.FC<Props> = ({ value, onChange }) => {
  return (
    <View style={styles.container}>
      <Text>Minimum Match Threshold: {Math.round(value * 100)}%</Text>
      <Slider
        style={{ width: '100%', height: 40 }}
        minimumValue={0}
        maximumValue={1}
        step={0.05}
        minimumTrackTintColor="#00FF00"
        maximumTrackTintColor="#CCCCCC"
        thumbTintColor="#00FF00"
        value={value}
        onValueChange={onChange}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: '100%',
    marginVertical: 10,
  },
});

export default PreferenceSlider;
