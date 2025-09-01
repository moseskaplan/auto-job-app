import React from 'react';
import { View, ScrollView, StyleSheet } from 'react-native';
import { TextInput, Button, Switch, Text } from 'react-native-paper';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { RootStackParamList } from '../navigation';
import { usePreferences } from '../contexts/PreferencesContext';
import PreferenceSlider from '../components/PreferenceSlider';

type Props = NativeStackScreenProps<RootStackParamList, 'Home'>;

const HomeScreen: React.FC<Props> = ({ navigation }) => {
  const { preferences, setPreferences } = usePreferences();

  const updateField = (field: keyof typeof preferences, value: any) => {
    setPreferences({ ...preferences, [field]: value });
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text variant="titleLarge" style={styles.heading}>Control Hub</Text>
      <TextInput
        label="Desired Job Titles"
        value={preferences.desiredTitles}
        onChangeText={(text) => updateField('desiredTitles', text)}
        mode="outlined"
        style={styles.input}
      />
      <TextInput
        label="Preferred Locations"
        value={preferences.locations}
        onChangeText={(text) => updateField('locations', text)}
        mode="outlined"
        style={styles.input}
      />
      <TextInput
        label="Minimum Salary"
        value={preferences.minSalary}
        onChangeText={(text) => updateField('minSalary', text)}
        mode="outlined"
        keyboardType="numeric"
        style={styles.input}
      />
      <PreferenceSlider
        value={preferences.mismatchThreshold}
        onChange={(v) => updateField('mismatchThreshold', v)}
      />
      <View style={styles.toggleRow}>
        <Text>Auto-Apply</Text>
        <Switch
          value={preferences.autoApply}
          onValueChange={(val) => updateField('autoApply', val)}
          color="#00FF00"
        />
      </View>
      <View style={styles.toggleRow}>
        <Text>Daily Email Summary</Text>
        <Switch
          value={preferences.dailyEmail}
          onValueChange={(val) => updateField('dailyEmail', val)}
          color="#00FF00"
        />
      </View>
      <Button
        mode="contained"
        onPress={() => navigation.navigate('LoadZone')}
        style={styles.button}
      >
        Go to Load Zone
      </Button>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 20,
  },
  heading: {
    marginBottom: 20,
    fontWeight: 'bold',
  },
  input: {
    marginBottom: 10,
  },
  button: {
    marginTop: 20,
  },
  toggleRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginVertical: 10,
  },
});

export default HomeScreen;
