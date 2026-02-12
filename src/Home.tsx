import { useNavigate } from 'react-router-dom';
import { GraduationCap, Users, Package, Briefcase } from 'lucide-react';

function Home() {
  const navigate = useNavigate();

  return (
    <div className="home-container">
      <section className="welcome-section">
        <h2>Welcome to LG CIC Training Portal</h2>
        <p className="text-xl font-semibold text-gray-800 mb-2">Hi I Am Your Virtual Trainner</p>
            <p className="text-gray-600 mb-1">I will help you with the all trainings which required in CIC. 
also if you have any doubt than you can ask me any time by clicking on “Need Assistance”.
</p>
      </section>
        <section className="important-points">
        <h3>Important Points:</h3>
        <ul>
          <li>Be attentive during training through video content & use Headphone for better voice clarity</li>
          <li>Select language as per your requirements</li>
          <li>Review content sequence & Day wise</li>
          <li>Keep Notepad & Pen ready to note down query & important points</li>
          <li>Complete assessment after completing each training</li>
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
