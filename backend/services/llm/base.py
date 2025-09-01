from abc import ABC, abstractmethod

class LLMService(ABC):
    """Abstract base class for language model services."""

    @abstractmethod
    def generate_resume(self, job_description: str, user_profile: dict) -> str:
        """Generate a tailored resume based on a job description and user profile."""
        pass

    @abstractmethod
    def generate_cover_letter(self, job_description: str, company_values: list, user_profile: dict) -> str:
        """Generate a customised cover letter based on a job description, company values and user profile."""
        pass
