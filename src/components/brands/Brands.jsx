import "./brands.css";

import hm from "./../../img/brands/HM.png";
import obey from "./../../img/brands/Obey.png";
import shopify from "./../../img/brands/Shopify.png";
import lacoste from "./../../img/brands/Lacoste.png";
import levis from "./../../img/brands/Levis.png";
import amazon from "./../../img/brands/Amazon.png";

const Brands = () => {
  return (
    <section className="brands">
      <div className="container">
        <ul className="brands__list">
          <li className="brands__item">
            <a href="#!" className="brands__link">
              <img src={hm} alt="H&M" />
            </a>
          </li>
          <li className="brands__item">
            <a href="#!" className="brands__link">
              <img src={obey} alt="Obey" />
            </a>
          </li>
          <li className="brands__item">
            <a href="#!" className="brands__link">
              <img src={shopify} alt="Shopify" />
            </a>
          </li>
          <li className="brands__item">
            <a href="#!" className="brands__link">
              <img src={lacoste} alt="Lacoste" />
            </a>
          </li>
          <li className="brands__item">
            <a href="#!" className="brands__link">
              <img src={levis} alt="Levi's" />
            </a>
          </li>
          <li className="brands__item">
            <a href="#!" className="brands__link">
              <img src={amazon} alt="Amazon" />
            </a>
          </li>
        </ul>
      </div>
    </section>
  );
};

export default Brands;
