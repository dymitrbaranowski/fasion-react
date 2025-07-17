import styles from "./Card.module.css";
import cat01Img from "./../../img/categories/cat-01.jpg";
import arrowImg from "./../../img/icons/arrow.svg";

const Card = () => {
  return (
    <div className={styles.card}>
      <img className={styles.card__img} src={cat01Img} alt="Category ..." />
      <div className={styles.card__body}>
        <div className={styles.card__title}>
          <div className={styles.card__title}>Hoodies & Sweatshirts</div>
          <div className={styles.card__subtitle}>Explore now!</div>
        </div>
        <div className={styles.card__icon}>
          <img src={arrowImg} alt="Arrow icon" />
        </div>
      </div>
    </div>
  );
};

export default Card;
