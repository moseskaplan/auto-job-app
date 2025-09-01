from sqlalchemy import (
    Column, Integer, String, Float, Boolean,
    DateTime, Text, ForeignKey
)
from sqlalchemy.orm import relationship, declarative_base
from datetime import datetime

Base = declarative_base()

class User(Base):
    __tablename__ = "users"
    id = Column(Integer, primary_key=True)
    name = Column(String(100))
    email = Column(String(100), unique=True)
    phone = Column(String(50))
    work_eligibility = Column(String(50))
    # Additional encrypted fields can be added as needed

class Resume(Base):
    __tablename__ = "resumes"
    id = Column(Integer, primary_key=True)
    user_id = Column(Integer, ForeignKey("users.id"))
    label = Column(String(100))
    file_path = Column(String(255))  # Path to stored resume PDF
    created_at = Column(DateTime, default=datetime.utcnow)
    user = relationship("User", back_populates="resumes")

User.resumes = relationship("Resume", back_populates="user")

class Job(Base):
    __tablename__ = "jobs"
    id = Column(Integer, primary_key=True)
    url = Column(String(255))
    title = Column(String(255))
    description = Column(Text)
    company_values = Column(Text)

class MatchResult(Base):
    __tablename__ = "match_results"
    id = Column(Integer, primary_key=True)
    job_id = Column(Integer, ForeignKey("jobs.id"))
    resume_id = Column(Integer, ForeignKey("resumes.id"))
    score = Column(Float)
    breakdown = Column(Text)  # JSON string with keyword/semantic breakdown
    job = relationship("Job")
    resume = relationship("Resume")

class GeneratedDocument(Base):
    __tablename__ = "documents"
    id = Column(Integer, primary_key=True)
    job_id = Column(Integer, ForeignKey("jobs.id"))
    resume_id = Column(Integer, ForeignKey("resumes.id"))
    doc_type = Column(String(50))  # 'resume' or 'cover_letter'
    file_path = Column(String(255))  # Path to generated document
    created_at = Column(DateTime, default=datetime.utcnow)

class Application(Base):
    __tablename__ = "applications"
    id = Column(Integer, primary_key=True)
    job_id = Column(Integer, ForeignKey("jobs.id"))
    status = Column(String(50))  # e.g. 'pending', 'submitted', 'error'
    submitted_at = Column(DateTime)
    error_message = Column(Text)
    converted = Column(Boolean, default=False)
    converted_at = Column(DateTime)
    job = relationship("Job")
