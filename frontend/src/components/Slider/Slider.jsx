import 'swiper/swiper-bundle.min.css';
import 'swiper/swiper.min.css';
import './slider.css';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, EffectCoverflow, Autoplay } from 'swiper';
import nail1 from '../../Images/nail.png';
import nail2 from '../../Images/nailgel.jpg';

const slider = [
  {
    title: 'Nailart1',
    desc: 'Minden a képzeleteden múlik',
    path: './src/Images/Swiper/nailart1.png',
  },
  {
    title: 'Nailart2',
    desc: 'Megvalósítjuk az álmaid',
    path: './src/Images/Swiper/nailart2.jpg',
  },
  {
    title: 'Nailart3',
    desc: 'Professzionális kezekben vagy',
    path: './src/Images/Swiper/nailart3.jpg',
  },
  {
    title: 'Nailart4',
    desc: 'Elégedett,mosolygós ügyfelek',
    path: './src/Images/Swiper/nailart4.jpg',
  },
];
function Slider() {
  return (
    <div className="carousel">
      <div>
        <div className="carousel-content">
          <span>Fedezd fel</span>
          <h1>Nail shop</h1>
          <hr />
          <p>
          Professzionális műkörömépítés, 
géllakkozás  Miskolc belvárosában.
          </p>
        </div>
      </div>

      <Swiper
        className="myswiper"
        modules={[Pagination, EffectCoverflow, Autoplay]}
        effect="coverflow"
        grabCursor
        centeredSlides
        coverflowEffect={{
          rotate: 0,
          stretch: 0,
          depth: 100,
          modifier: 3,
          slideShadows: true,
        }}
        loop
        pagination={{ clickable: true }}
        autoplay={{
          delay: 5000,
          disableOnInteraction: false,
        }}
        breakpoints={{
          640: {
            slidesPerView: 2,
          },
          768: {
            slidesPerView: 1,
          },
          1024: {
            slidesPerView: 2,
          },
          1560: {
            slidesPerView: 3,
          },
        }}
      >
        {slider.map((data) => (
          <SwiperSlide style={{ backgroundImage: `url(${data.path})` }} className="myswiper-slider">
            <div>
              <p>{data.desc}</p>
              {/* <a href={`${data.url}`} target="_blank" className="slider-btn" rel="noreferrer">
                explore
              </a> */}
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
      <img src={nail1} alt="bg nail" className="nail1" />
      <img src={nail2} alt="bg nail" className="nail2" />
    </div>
  );
}
export default Slider;
