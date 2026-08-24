function About() {
  return (
    <section className="about" id="about">
      <img src="/img/about.png" alt="About Delicacy" />

      <div className="about-text">
        <span>About Us</span>

        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit.
          Fugit deserunt quo doloremque qui adipisci non voluptate
          reprehenderit voluptates nostrum sit odio, cupiditate
          voluptatem suscipit totam molestias quasi iste modi
          quidem!
        </p>

        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit.
          Magni, tempora nisi?
        </p>

        <a href="#footer" className="btn">
          Learn More
          <i className="bx bx-right-arrow-alt" />
        </a>
      </div>
    </section>
  );
}

export default About;