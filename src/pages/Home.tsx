import { useNavigate } from 'react-router-dom';
import { GraduationCap, Users, Package, Briefcase } from 'lucide-react';

function Home() {
  const navigate = useNavigate();

  return (
    <div className="home-container">
      <section className="welcome-section">
        <h2>Welcome to LG CIC Training Portal</h2>
        <p>
          Dear <span className="highlight">Virtual Trainer</span>, this platform contains
          comprehensive training materials for all LG CIC employees.
          <span className="highlight"> Need Assistance?</span> Contact the HR department.
        </p>
      </section>

      <section className="important-points">
        <h3>Important Points:</h3>
        <ul>
          <li>All training modules are mandatory for new employees</li>
          <li>Complete each module within the specified timeframe</li>
          <li>Ensure you watch all embedded videos and complete assessments</li>
          <li>Certificate will be issued upon successful completion</li>
          <li>Keep track of your progress using the dashboard</li>
        </ul>
      </section>

      <section className="lets-start">
        <h2>Let's Start Your Training Journey</h2>
        <p>Choose a training module to begin:</p>

        <div className="training-buttons">
          <button
            className="training-btn"
            onClick={() => navigate('/new-hired')}
          >
            <GraduationCap size={40} />
            <h3>New Hired Training</h3>
            <p>3 Days</p>
          </button>

          <button
            className="training-btn"
            onClick={() => navigate('/soft-skill')}
          >
            <Users size={40} />
            <h3>Soft Skill</h3>
            <p>2 Hours</p>
          </button>

          <button
            className="training-btn"
            onClick={() => navigate('/product-training')}
          >
            <Package size={40} />
            <h3>Product Training</h3>
            <p>1 Day</p>
          </button>

          <button
            className="training-btn"
            onClick={() => navigate('/ojt')}
          >
            <Briefcase size={40} />
            <h3>On Job Training</h3>
            <p>3 Days</p>
          </button>
        </div>
      </section>
    </div>
  );
}

export default Home;
