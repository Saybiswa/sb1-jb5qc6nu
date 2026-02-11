import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import NewHired from './pages/NewHired';
import SoftSkill from './pages/SoftSkill';
import ProductTraining from './pages/ProductTraining';
import OJT from './pages/OJT';

function App() {
  return (
    <Router>
      <div className="app-container">
        <Navbar />
        <main className="main-content">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/new-hired" element={<NewHired />} />
            <Route path="/soft-skill" element={<SoftSkill />} />
            <Route path="/product-training" element={<ProductTraining />} />
            <Route path="/ojt" element={<OJT />} />
          </Routes>
        </main>
      </div>
    </Router>
  );
}

export default App;
