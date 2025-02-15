import star from "../../../assets/Star.svg";
import style from "../styles/home-hero.module.css";
const Since = () => {
  return (
    <div className={style["since"]}>
      <img src={star} alt="star" />
      <span>Since 1973</span>
    </div>
  );
};

export default Since;
