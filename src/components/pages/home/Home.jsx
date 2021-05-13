import { FaLongArrowAltDown, FaLongArrowAltRight } from 'react-icons/fa';
import { Element, Link } from 'react-scroll';

const Home = () => {
  return (
    <Element name="home" id="home">
      <div className="container">
        <div className="wrapper">
          <h1>Sun M Kim</h1>
          <p>Front End Developer</p>
          <div className="about-button-container">
            <div className="about-button">
              <button onClick={() => console.log('here')}>
                <div className="about-button-title">About Me</div>
                <FaLongArrowAltRight className="icon" />
              </button>
            </div>
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
