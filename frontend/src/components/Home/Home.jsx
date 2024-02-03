import './home.css';
import Slider from '../Slider/Slider';
import Gallery from '../Gallery/Gallery';
import Owner from '../Owner/Owner';
import ServicesMini from '../ServicesMini/ServicesMini';

function Home() {
  return (
    <>
      <Slider />
      <Owner/>
      <ServicesMini/>
      <Gallery />
    </>
  );
}

export default Home;
