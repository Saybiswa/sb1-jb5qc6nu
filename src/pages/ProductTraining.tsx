import { useNavigate } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';

function ProductTraining() {
  const navigate = useNavigate();

  return (
    <div className="training-page">
      <button className="back-btn" onClick={() => navigate('/')}>
        <ArrowLeft size={20} />
        Back to Home
      </button>

      <h1 className="page-title">Product Training Program</h1>
      <p className="page-subtitle">Duration: 1 Day | Comprehensive Product Knowledge</p>

      <div className="modules-container">
        <div className="module-card">
          <h2>Module 1 – LG Product Portfolio</h2>
          <div className="module-content">
            <div className="day-section">
              <h3>Product Categories Overview</h3>
              <ul>
                <li>Home Appliances: Refrigerators, Washing Machines, Air Conditioners</li>
                <li>Consumer Electronics: TVs, Audio Systems, Home Theater</li>
                <li>Mobile Devices and Accessories</li>
                <li>Commercial Solutions and B2B Products</li>
                <li>Smart Home and IoT Integration</li>
              </ul>
            </div>
            <div className="video-section">
              <h4>Training Video: LG Product Lineup</h4>
              <div className="video-wrapper">
                <iframe
                  src="https://www.youtube.com/embed/dQw4w9WgXcQ"
                  title="Product Overview Video"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                ></iframe>
              </div>
            </div>
          </div>
        </div>

        <div className="module-card">
          <h2>Module 2 – Technology and Innovation</h2>
          <div className="module-content">
            <div className="day-section">
              <h3>LG Technologies</h3>
              <ul>
                <li>AI ThinQ: Smart Device Integration</li>
                <li>InstaView and Door-in-Door Technology</li>
                <li>OLED and NanoCell Display Technology</li>
                <li>Inverter Technology for Energy Efficiency</li>
                <li>Steam and Hygiene Technologies</li>
              </ul>
            </div>
            <div className="video-section">
              <h4>Training Video: Innovation at LG</h4>
              <div className="video-wrapper">
                <iframe
                  src="https://www.youtube.com/embed/dQw4w9WgXcQ"
                  title="Technology Innovation Video"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                ></iframe>
              </div>
            </div>
          </div>
        </div>

        <div className="module-card">
          <h2>Module 3 – Product Features and Benefits</h2>
          <div className="module-content">
            <div className="day-section">
              <h3>Key Features</h3>
              <ul>
                <li>Energy Efficiency and Environmental Benefits</li>
                <li>Design and Aesthetics</li>
                <li>User Experience and Interface</li>
                <li>Durability and Quality Standards</li>
                <li>Warranty and After-Sales Support</li>
              </ul>
            </div>
          </div>
        </div>

        <div className="module-card">
          <h2>Module 4 – Customer Service and Support</h2>
          <div className="module-content">
            <div className="day-section">
              <h3>Service Excellence</h3>
              <ul>
                <li>Product Installation Guidelines</li>
                <li>Troubleshooting Common Issues</li>
                <li>Customer Query Handling</li>
                <li>Maintenance and Care Instructions</li>
                <li>Escalation Procedures</li>
              </ul>
            </div>
            <div className="video-section">
              <h4>Training Video: Customer Service Best Practices</h4>
              <div className="video-wrapper">
                <iframe
                  src="https://www.youtube.com/embed/dQw4w9WgXcQ"
                  title="Customer Service Video"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                ></iframe>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProductTraining;
