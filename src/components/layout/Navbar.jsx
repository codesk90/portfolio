import './navbar.css';

const Navbar = () => {
  return (
    <div id="nav">
      <div className="nav-logo text-white">
        <image>PortFo</image>
      </div>
      <div className="nav-link">
        <ul>
          <li>
            <a href="#home" className="text-white">
              Home
            </a>
          </li>
          <li>
            <a href="#works" className="text-white">
              Works
            </a>
          </li>
          <li>
            <a href="#contact" className="text-white">
              Contact
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
