import React, { useEffect, useState } from 'react';
import { ScrollView, StyleSheet, View } from 'react-native';
import { Text, Button, Card } from 'react-native-paper';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { RootStackParamList } from '../navigation';
import { getGeneratedDocuments, submitApplication } from '../api/mockApi';

type Props = NativeStackScreenProps<RootStackParamList, 'Review'>;

const ReviewScreen: React.FC<Props> = ({ route, navigation }) => {
  const { jobId } = route.params;
  const [resume, setResume] = useState<string>('');
  const [coverLetter, setCoverLetter] = useState<string>('');
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    async function fetchDocs() {
      const { resumeText, coverLetterText } = await getGeneratedDocuments(jobId);
      setResume(resumeText);
      setCoverLetter(coverLetterText);
    }
    fetchDocs();
  }, [jobId]);

  const handleSubmit = async () => {
    setLoading(true);
    await submitApplication(jobId); // Mocked API call
    setLoading(false);
    navigation.goBack();
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Card style={styles.card}>
        <Card.Title title="Tailored Resume" />
        <Card.Content><Text>{resume || 'Loading resume...'}</Text></Card.Content>
      </Card>
      <Card style={styles.card}>
        <Card.Title title="Tailored Cover Letter" />
        <Card.Content><Text>{coverLetter || 'Loading cover letter...'}</Text></Card.Content>
      </Card>
      <Button
        mode="contained"
        onPress={handleSubmit}
        loading={loading}
        disabled={loading}
        style={styles.button}
      >
        Submit Application
      </Button>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 20,
  },
  card: {
    marginVertical: 10,
  },
  button: {
    marginTop: 20,
  },
});

export default ReviewScreen;
