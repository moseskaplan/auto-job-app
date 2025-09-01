import React, { useEffect, useState } from 'react';
import { View, StyleSheet } from 'react-native';
import { List, Button, Text } from 'react-native-paper';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { RootStackParamList } from '../navigation';
import { getMatchResults } from '../api/mockApi';

type Props = NativeStackScreenProps<RootStackParamList, 'MatchResults'>;

type MatchResult = {
  jobId: number;
  title: string;
  score: number;
};

const MatchResultsScreen: React.FC<Props> = ({ navigation }) => {
  const [results, setResults] = useState<MatchResult[]>([]);

  useEffect(() => {
    async function fetchResults() {
      const data = await getMatchResults(); // Mocked API call
      setResults(data);
    }
    fetchResults();
  }, []);

  return (
    <View style={styles.container}>
      <Text variant="titleLarge">Match Results</Text>
      {results.map((result) => (
        <List.Item
          key={result.jobId}
          title={result.title}
          description={`Match: ${Math.round(result.score * 100)}%`}
          right={() =>
            <Button mode="outlined" onPress={() => navigation.navigate('Review', { jobId: result.jobId })}>
              Review
            </Button>
          }
        />
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 20,
  },
});

export default MatchResultsScreen;
