import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <nav className="navbar">
      <div className="navbar-container">
        <Link to="/" className="navbar-logo">
          <div className="lg-logo">LG</div>
        </Link>
        <div className="navbar-title">
          <h1>LG CIC Training Content</h1>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
