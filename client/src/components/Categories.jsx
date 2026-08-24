import { categories } from "../data/storeData";

function Categories() {
  return (
    <section className="categories" id="categories">
      <div className="heading">
        <h1>
          Browse our hotest <br />
          <span>Ctegories</span>
        </h1>

        <a href="#products" className="btn">
          See All
          <i className="bx bx-right-arrow-alt" />
        </a>
      </div>

      <div className="categories-container">
        {categories.map((category) => (
          <div
            className={`box ${category.colorClass}`}
            key={category.name}
          >
            <img
              src={`/img/${category.image}`}
              alt={category.name}
            />

            <h2>{category.name}</h2>

            <span>{category.count}</span>

            <i className="bx bx-right-arrow-alt" />
          </div>
        ))}
      </div>
    </section>
  );
}

export default Categories;