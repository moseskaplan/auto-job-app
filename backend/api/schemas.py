from typing import List, Optional, Dict
from pydantic import BaseModel, Field

class UserRegisterRequest(BaseModel):
    name: str
    email: str
    phone: Optional[str] = None
    work_eligibility: Optional[str] = None

class UserRegisterResponse(BaseModel):
    user_id: int
    message: str

class UploadFileResponse(BaseModel):
    file_id: int
    file_name: str

class JobIngestRequest(BaseModel):
    urls: List[str]

class JobDetail(BaseModel):
    id: int
    url: str
    title: str
    description: str
    company_values: Optional[List[str]]

class JobIngestResponse(BaseModel):
    jobs: List[JobDetail]

class MatchRequest(BaseModel):
    job_id: int
    resume_id: int

class MatchResponse(BaseModel):
    job_id: int
    resume_id: int
    score: float
    breakdown: Dict[str, float]

class GenerateDocRequest(BaseModel):
    job_id: int
    resume_id: int

class GenerateDocResponse(BaseModel):
    resume_text: str
    cover_letter_text: str

class SubmitApplicationRequest(BaseModel):
    job_id: int
    resume_id: int
    cover_letter_id: int

class ApplicationStatus(BaseModel):
    id: int
    job_id: int
    status: str
    submitted_at: Optional[str]
    error_message: Optional[str] = None
    converted: bool = False
    converted_at: Optional[str] = None

class ApplicationStatusResponse(BaseModel):
    applications: List[ApplicationStatus]

class MarkConversionRequest(BaseModel):
    application_id: int

class MetricsResponse(BaseModel):
    total_applications: int
    conversions: int
    conversion_rate: float
    avg_match_score: float
