import { useNavigate } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';

function NewHired() {
  const navigate = useNavigate();

  return (
    <div className="training-page">
      <button className="back-btn" onClick={() => navigate('/')}>
        <ArrowLeft size={20} />
        Back to Home
      </button>

      <h1 className="page-title">New Hired Training Program</h1>
      <p className="page-subtitle">Duration: 3 Days | Comprehensive Onboarding Experience</p>

      <div className="modules-container">
        <div className="module-card">
          <h2>Module 1 – Company Introduction</h2>
          <div className="module-content">
            <div className="day-section">
              <h3>Day 1 – Company Overview</h3>
              <ul>
                <li>LG Corporation History and Global Presence</li>
                <li>Company Vision, Mission, and Core Values</li>
                <li>LG CIC Indonesia Introduction</li>
                <li>Organizational Structure and Key Departments</li>
              </ul>
            </div>
            <div className="day-section">
              <h3>Day 2 – Policies and Procedures</h3>
              <ul>
                <li>Employee Code of Conduct</li>
                <li>HR Policies and Benefits</li>
                <li>Work Schedule and Leave Management</li>
                <li>Safety and Security Guidelines</li>
              </ul>
            </div>
            <div className="day-section">
              <h3>Day 3 – Culture and Integration</h3>
              <ul>
                <li>LG Way and Corporate Culture</li>
                <li>Team Dynamics and Collaboration</li>
                <li>Communication Channels and Tools</li>
                <li>Career Development Opportunities</li>
              </ul>
            </div>
            <div className="video-section">
              <h4>Training Video: Welcome to LG</h4>
              <div className="video-wrapper">
                <iframe
                  src="https://www.youtube.com/embed/dQw4w9WgXcQ"
                  title="New Hired Training Video"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                ></iframe>
              </div>
            </div>
          </div>
        </div>

        <div className="module-card">
          <h2>Module 2 – Systems and Tools</h2>
          <div className="module-content">
            <div className="day-section">
              <h3>Essential Tools Training</h3>
              <ul>
                <li>Email and Communication Systems</li>
                <li>HRIS and Self-Service Portal</li>
                <li>Project Management Tools</li>
                <li>Document Management System</li>
                <li>Security and Access Management</li>
              </ul>
            </div>
            <div className="video-section">
              <h4>Training Video: System Navigation</h4>
              <div className="video-wrapper">
                <iframe
                  src="https://www.youtube.com/embed/dQw4w9WgXcQ"
                  title="Systems Training Video"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                ></iframe>
              </div>
            </div>
          </div>
        </div>

        <div className="module-card">
          <h2>Module 3 – Quality and Compliance</h2>
          <div className="module-content">
            <div className="day-section">
              <h3>Quality Standards</h3>
              <ul>
                <li>ISO Standards and Certifications</li>
                <li>Quality Control Procedures</li>
                <li>Continuous Improvement Practices</li>
                <li>Customer Satisfaction Focus</li>
                <li>Compliance and Regulatory Requirements</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default NewHired;
