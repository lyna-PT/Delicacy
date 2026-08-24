import { reviews } from "../data/storeData";

function Customers() {
  return (
    <section className="customers" id="customers">
      <h2>Why Customer's Love Us ?</h2>

      <div className="customers-container">
        {reviews.map((review) => (
          <div className="box" key={review.image}>
            <i className="bx bxs-quote-alt-left" />

            <div className="stars">
              <i className="bx bxs-star" />
              <i className="bx bxs-star" />
              <i className="bx bxs-star" />
              <i className="bx bxs-star" />
              <i className="bx bxs-star-half" />
            </div>

            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing
              elit. Similique ratione quod est error quae. Itaque,
              id.
            </p>

            <div className="review-profile">
              <img
                src={`/img/${review.image}`}
                alt={review.name}
              />

              <h3>{review.name}</h3>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Customers;