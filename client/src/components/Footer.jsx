function Footer() {
  return (
    <>
      <section className="footer" id="footer">
        <div className="footer-box">
          <a href="#home" className="logo">
            <i className="bx bxs-basket" />
            Delicacy
          </a>

          <p>
            GymVast,50th Street,4th <br />
            Floor,NYC 10022
          </p>

          <div className="social">
            <a href="#facebook">
              <i className="bx bxl-facebook" />
            </a>

            <a href="#twitter">
              <i className="bx bxl-twitter" />
            </a>

            <a href="#instagram">
              <i className="bx bxl-instagram" />
            </a>

            <a href="#youtube">
              <i className="bx bxl-youtube" />
            </a>
          </div>
        </div>

        <div className="footer-box">
          <h2>Categories</h2>

          <a href="#categories">Fruits & Vegetabels</a>
          <a href="#categories">Dairy Products</a>
          <a href="#categories">Package Food</a>
          <a href="#categories">Bevarage</a>
        </div>

        <div className="footer-box">
          <h2>Usefull links</h2>

          <a href="#footer">Payment & Tax</a>
          <a href="#footer">Terms Of Use</a>
          <a href="#footer">My Blog</a>
          <a href="#footer">Return Policy</a>
        </div>

        <div className="footer-box">
          <h2>Newsletter</h2>

          <p>
            Get 10% Discount with <br />
            Email Newsletter
          </p>

          <form onSubmit={(event) => event.preventDefault()}>
            <i className="bx bxs-envelope" />

            <input
              type="email"
              placeholder="Enter Your Email"
              aria-label="Email address"
            />

            <button type="submit" aria-label="Subscribe">
              <i className="bx bx-arrow-back bx-rotate-180" />
            </button>
          </form>
        </div>
      </section>

      <div className="copyright">
        <p>&#169; PalmTree All Right Reserved.</p>
      </div>
    </>
  );
}

export default Footer;