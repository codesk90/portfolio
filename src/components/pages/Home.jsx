import { FaLongArrowAltDown, FaLongArrowAltRight } from 'react-icons/fa';
import { Element, Link } from 'react-scroll';
import './styles.scss';

const Home = () => {
  return (
    <Element name="home" id="home">
      <div className="container">
        <div className="wrapper">
          <h1>Sun M Kim</h1>
          <p>Front End Developer</p>
          <div className="about-button">
            <div className="about-button-title">About Me</div>
            <FaLongArrowAltRight />
          </div>
        </div>
        <div className="work-button">
          <Link
            activeClass="active"
            to="works"
            spy={true}
            smooth={true}
            offset={0}
            duration={500}
          >
            Works
            <div className="work-button-arrow">
              <FaLongArrowAltDown />
            </div>
          </Link>
        </div>
      </div>
    </Element>
  );
};

export default Home;
