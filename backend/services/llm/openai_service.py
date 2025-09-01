import os
import openai
from .base import LLMService

class OpenAIService(LLMService):
    """Concrete implementation of LLMService using OpenAI's API."""

    def __init__(self, api_key: str | None = None):
        # Use provided key or fallback to environment variable
        self.api_key = api_key or os.getenv("OPENAI_API_KEY")
        if not self.api_key:
            raise ValueError("OpenAI API key must be provided")
        openai.api_key = self.api_key

    def _call_openai(self, prompt: str, max_tokens: int = 800) -> str:
        """Call OpenAI with a chat-style prompt and return the generated text."""
        response = openai.ChatCompletion.create(
            model="gpt-4",
            messages=[{"role": "user", "content": prompt}],
            max_tokens=max_tokens,
            temperature=0.7,
            n=1,
        )
        return response.choices[0].message["content"].strip()

    def generate_resume(self, job_description: str, user_profile: dict) -> str:
        """Generate a customised resume based on the job description and user profile."""
        prompt = (
            f"Job description:\n{job_description}\n\n"
            f"User's current resume/profile:\n{user_profile}\n\n"
            "Rewrite the user's resume to better match the job requirements. Focus on relevant skills and achievements. "
            "Return the resume in plain text with clear sections."
        )
        return self._call_openai(prompt)

    def generate_cover_letter(self, job_description: str, company_values: list, user_profile: dict) -> str:
        """Generate a cover letter tailored to the job description and company values."""
        values_text = ", ".join(company_values) if company_values else ""
        prompt = (
            f"Job description:\n{job_description}\n\n"
            f"Company values: {values_text}\n\n"
            f"User's profile:\n{user_profile}\n\n"
            "Draft a concise, personalised cover letter (3 paragraphs max) that aligns the user's skills with the job "
            "and incorporates the company values. Use a professional tone."
        )
        return self._call_openai(prompt)
