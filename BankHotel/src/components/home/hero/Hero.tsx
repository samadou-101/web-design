import style from "../styles/home.module.css";
import star from "../../../assets/Star.svg";
import btn from "../../../assets/button-default.svg";
const Hero = () => {
  return (
    <div className={style["hero-container"]}>
      <div className={style["text"]}>
        <h1>
          <span className={style["s1"]}>Bank</span>
          <span className={style["s2"]}>Hotel</span>
        </h1>
        <p className={style["hero-p"]}>
          ROOMS // RESTAURANT // CONGRESS HALL // ORANGE DRINKS
        </p>
      </div>
      <div className={style["info"]}>
        <div className={style["since"]}>
          <img src={star} alt="star" />
          <span>Since 1973</span>
        </div>
        <p>
          The luxurious hotel in the most beautiful European city with an
          exclusive restaurant, conference-hall, and art-rooms
        </p>
      </div>
      <div className={style["btn"]}>
        <img src={btn} alt="" />
      </div>
    </div>
  );
};

export default Hero;
