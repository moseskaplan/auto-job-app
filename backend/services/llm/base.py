# llm/base.py
from abc import ABC, abstractmethod

class LLMService(ABC):
    @abstractmethod
    def generate_resume(self, job_description: str, user_profile: dict) -> str:
        pass

    @abstractmethod
    def generate_cover_letter(self, job_description: str, company_values: list, user_profile: dict) -> str:
        pass
