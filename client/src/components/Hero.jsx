import { Navigation, Autoplay } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

const slides = ["home1.png", "home2.png", "home3.png"];

function Hero() {
  return (
    <section id="home">
      <Swiper
        className="swiper-container"
        modules={[Navigation, Autoplay]}
        navigation
        loop
        autoplay={{
          delay: 4000,
          disableOnInteraction: false,
        }}
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
                  <i className="bx bx-right-arrow-alt" />
                </a>
              </div>

              <img src={`/img/${image}`} alt="Healthy food" />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
}

export default Hero;