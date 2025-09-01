import React, { useState } from 'react';
import { View, StyleSheet } from 'react-native';
import { TextInput, Button, Text } from 'react-native-paper';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { RootStackParamList } from '../navigation';
import { fetchJobs } from '../api/mockApi';

type Props = NativeStackScreenProps<RootStackParamList, 'LoadZone'>;

const LoadZoneScreen: React.FC<Props> = ({ navigation }) => {
  const [urlInput, setUrlInput] = useState<string>('');
  const [loading, setLoading] = useState(false);

  const handleIngest = async () => {
    const urls = urlInput.split(/\s+/).filter(Boolean);
    if (!urls.length) return;
    setLoading(true);
    try {
      await fetchJobs(urls); // Mocked API call
      navigation.navigate('MatchResults');
    } finally {
      setLoading(false);
    }
  };

  return (
    <View style={styles.container}>
      <Text variant="titleLarge">Load Job Links</Text>
      <TextInput
        label="Paste job URLs (separated by spaces or new lines)"
        value={urlInput}
        onChangeText={setUrlInput}
        multiline
        numberOfLines={4}
        mode="outlined"
        style={styles.input}
      />
      <Button
        mode="contained"
        onPress={handleIngest}
        loading= {loading}
        disabled={loading}
        style={styles.button}
      >
        Ingest Jobs
      </Button>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 20,
  },
  input: {
    marginVertical: 10,
  },
  button: {
    marginTop: 20,
  },
});

export default LoadZoneScreen;
