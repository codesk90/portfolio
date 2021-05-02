import './navbar.css';
import Header from './Header';
import { navItems } from './navbar.data';

const Navbar = () => {
  return (
    <div id="nav">
      <div className="nav-logo text-white">
        <image>PortFo</image>
      </div>
      <Header />
      <div className="nav-link">
        <ul>
          {navItems.map((navItem, i) => (
            <li>
              <a key={i} href={navItem.path} className="text-white">
                {navItem.label}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
