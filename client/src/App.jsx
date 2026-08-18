import { useState } from 'react';
import { Navigation, Autoplay } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';

const categories = [
  ['cate1.png', 'Fruits', '22 Items', 'box1'],
  ['cate2.png', 'Vegetables', '22 Items', 'box2'],
  ['cate3.png', 'Drinks', '22 Items', 'box3'],
  ['cate4.png', 'Fresh Nuts', '22 Items', 'box4'],
  ['cate5.png', 'Spices', '22 Items', 'box5'],
];

const products = [
  ['p1.png', 'Farm fresh organic fruits 250g', '$7.99'],
  ['p2.png', 'Farm fresh organic fruits 250g', '$7.99'],
  ['p5.png', 'Farm fresh organic fruits 250g', '$7.99'],
  ['p4.png', 'Farm fresh organic fruits 250g', '$7.99'],
  ['p3.png', 'Farm fresh organic Vegetables 250g', '$7.99'],
  ['p6.png', 'Farm fresh organic Vegetables 250g', '$7.99'],
];

const reviews = [
  ['c1.png', 'Ethan smith'],
  ['c2.jpg', 'Ethan smith'],
  ['c3.jpg', 'Ethan smith'],
];

function App() {
  const [menuOpen, setMenuOpen] = useState(false);

  const closeMenu = () => setMenuOpen(false);

  return (
    <>
      <header>
        <a href="#home" className="logo"><i className="bx bxs-basket" />Delicacy</a>
        <div
          className={`bx ${menuOpen ? 'bx-x' : 'bx-menu'}`}
          id="menu-icon"
          onClick={() => setMenuOpen((open) => !open)}
          aria-label="Toggle menu"
        />
        <ul className={`navbar ${menuOpen ? 'active' : ''}`}>
          <li><a href="#home" className="home-active" onClick={closeMenu}>Home</a></li>
          <li><a href="#categories" onClick={closeMenu}>Categories</a></li>
          <li><a href="#products" onClick={closeMenu}>Products</a></li>
          <li><a href="#about" onClick={closeMenu}>About</a></li>
          <li><a href="#customers" onClick={closeMenu}>Customers</a></li>
        </ul>
        <div className="profile">
          <img src="/img/profile.jpg" alt="Abdus Rahman" />
          <span>Abdus Rahman</span>
          <i className="bx bx-caret-down" />
        </div>
      </header>

      <main>
        <section id="home">
          <Swiper
            className="swiper-container"
            modules={[Navigation, Autoplay]}
            navigation
            loop
            autoplay={{ delay: 4000, disableOnInteraction: false }}
          >
            {['home1.png', 'home2.png', 'home3.png'].map((image) => (
              <SwiperSlide key={image}>
                <div className="container">
                  <div className="home-text">
                    <span>We are delicacy</span>
                    <h1>Choose delicacy <br />the best healthy <br />chicken salad</h1>
                    <a href="#products" className="btn">Shop Now<i className="bx bx-right-arrow-alt" /></a>
                  </div>
                  <img src={`/img/${image}`} alt="Healthy food" />
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </section>

        <section className="categories" id="categories">
          <div className="heading">
            <h1>Browse our hotest <br /><span>Ctegories</span></h1>
            <a href="#products" className="btn">See All<i className="bx bx-right-arrow-alt" /></a>
          </div>
          <div className="categories-container">
            {categories.map(([image, name, count, colorClass]) => (
              <div className={`box ${colorClass}`} key={name}>
                <img src={`/img/${image}`} alt={name} />
                <h2>{name}</h2>
                <span>{count}</span>
                <i className="bx bx-right-arrow-alt" />
              </div>
            ))}
          </div>
        </section>

        <section className="products" id="products">
          <div className="heading">
            <h1>Our Popular <br /><span>products</span></h1>
            <a href="#products" className="btn">Shop Now<i className="bx bx-right-arrow-alt" /></a>
          </div>
          <div className="products-container">
            {products.map(([image, name, price]) => (
              <div className="box" key={image}>
                <img src={`/img/${image}`} alt={name} />
                <span>Fresh Items</span>
                <h2>{name}</h2>
                <h3 className="price">{price} <span>/kg</span></h3>
                <i className="bx bx-cart-alt" aria-label="Add to cart" />
                <i className="bx bx-heart" aria-label="Add to wishlist" />
                <span className="discount">-25%</span>
              </div>
            ))}
          </div>
        </section>

        <section className="about" id="about">
          <img src="/img/about.png" alt="About Delicacy" />
          <div className="about-text">
            <span>About Us</span>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit deserunt quo doloremque qui adipisci non voluptate reprehenderit voluptates nostrum sit odio, cupiditate voluptatem suscipit totam molestias quasi iste modi quidem!</p>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni, tempora nisi?</p>
            <a href="#footer" className="btn">Learn More<i className="bx bx-right-arrow-alt" /></a>
          </div>
        </section>

        <section className="customers" id="customers">
          <h2>Why Customer's Love Us ?</h2>
          <div className="customers-container">
            {reviews.map(([image, name]) => (
              <div className="box" key={image}>
                <i className="bx bxs-quote-alt-left" />
                <div className="stars">
                  <i className="bx bxs-star" /><i className="bx bxs-star" /><i className="bx bxs-star" /><i className="bx bxs-star" /><i className="bx bxs-star-half" />
                </div>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique ratione quod est error quae. Itaque, id.</p>
                <div className="review-profile">
                  <img src={`/img/${image}`} alt={name} />
                  <h3>{name}</h3>
                </div>
              </div>
            ))}
          </div>
        </section>
      </main>

      <section className="footer" id="footer">
        <div className="footer-box">
          <a href="#home" className="logo"><i className="bx bxs-basket" />Delicacy</a>
          <p>GymVast,50th Street,4th <br />Floor,NYC 10022</p>
          <div className="social">
            <a href="#facebook"><i className="bx bxl-facebook" /></a>
            <a href="#twitter"><i className="bx bxl-twitter" /></a>
            <a href="#instagram"><i className="bx bxl-instagram" /></a>
            <a href="#youtube"><i className="bx bxl-youtube" /></a>
          </div>
        </div>
        <div className="footer-box">
          <h2>Categories</h2>
          <a href="#categories">Fruits & Vegetabels</a><a href="#categories">Dairy Products</a><a href="#categories">Package Food</a><a href="#categories">Bevarage</a>
        </div>
        <div className="footer-box">
          <h2>Usefull links</h2>
          <a href="#footer">Payment & Tax</a><a href="#footer">Terms Of Use</a><a href="#footer">My Blog</a><a href="#footer">Return Policy</a>
        </div>
        <div className="footer-box">
          <h2>Newsletter</h2>
          <p>Get 10% Discount with <br />Email Newsletter</p>
          <form onSubmit={(event) => event.preventDefault()}>
            <i className="bx bxs-envelope" />
            <input type="email" placeholder="Enter Your Email" aria-label="Email address" />
            <button type="submit" aria-label="Subscribe"><i className="bx bx-arrow-back bx-rotate-180" /></button>
          </form>
        </div>
      </section>

      <div className="copyright"><p>&#169; PalmTree All Right Reserved.</p></div>
    </>
  );
}

export default App;
