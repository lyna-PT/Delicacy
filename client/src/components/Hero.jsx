import { Autoplay, Navigation } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/navigation";

const slides = ["home1.png", "home2.png", "home3.png"];

function Hero() {
  return (
    <section id="home" className="hero-section">
      <Swiper
        className="hero-swiper"
        modules={[Navigation, Autoplay]}
        navigation
        loop={true}
        autoplay={{
          delay: 4000,
          disableOnInteraction: false,
        }}
        slidesPerView={1}
        spaceBetween={0}
      >
        {slides.map((image) => (
          <SwiperSlide key={image}>
            <div className="container">
              <div className="home-text">
                <span>We are delicacy</span>

                <h1>
                  Choose delicacy <br />
                  the best healthy <br />
                  chicken salad
                </h1>

                <a href="#products" className="btn">
                  Shop Now
                  <i className="bx bx-right-arrow-alt"></i>
                </a>
              </div>

              <img
                src={`/img/${image}`}
                alt="Healthy food"
                className="hero-image"
              />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
}

export default Hero;