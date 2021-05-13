import { Element } from 'react-scroll';
import Work from './Work';
import { works } from './works.data';

const Works = () => {
  return (
    <Element name="works" id="works">
      <section className="container">
        {works.map((work) => (
          <Work key={work.id} name={work.name} website={work.website} />
        ))}
      </section>
    </Element>
  );
};

export default Works;
