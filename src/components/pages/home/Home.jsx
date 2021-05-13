import { FaLongArrowAltDown, FaLongArrowAltRight } from 'react-icons/fa';
import { Element, Link } from 'react-scroll';

const Home = () => {
  return (
    <Element name="home" id="home">
      <section className="container">
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
            Click Here for Works
            <div className="work-button-arrow">
              <FaLongArrowAltDown />
            </div>
          </Link>
        </div>
      </section>
    </Element>
  );
};

export default Home;
