// frontend-mobile/api/mockApi.ts
export async function fetchJobs(urls: string[]): Promise<void> {
  await new Promise((resolve) => setTimeout(resolve, 500));
  console.log('Jobs ingested:', urls);
}

export async function getMatchResults() {
  await new Promise((resolve) => setTimeout(resolve, 500));
  return [
    { jobId: 1, title: 'Data Engineer', score: 0.85 },
    { jobId: 2, title: 'Product Manager', score: 0.74 },
  ];
}

export async function getGeneratedDocuments(jobId: number) {
  await new Promise((resolve) => setTimeout(resolve, 500));
  return {
    resumeText: `Generated resume for job ${jobId}...\n\n(placeholder text)`,
    coverLetterText: `Generated cover letter for job ${jobId}...\n\n(placeholder text)`,
  };
}

export async function submitApplication(jobId: number) {
  await new Promise((resolve) => setTimeout(resolve, 500));
  console.log('Application submitted for job', jobId);
}
