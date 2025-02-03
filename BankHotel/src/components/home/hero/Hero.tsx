import style from "../styles/home-hero.module.css";
import star from "../../../assets/Star.svg";
import btn from "../../../assets/button-default.svg";
import vital from "../../../assets/vital.svg";
const Hero = () => {
  return (
    <div className={style["hero-container"]}>
      <div className={style["background-container"]}></div>
      <div className={style["hero-intro"]}>
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
      <div className={style["hero-action"]}>
        <div className={style["check-in-out"]}>
          <div className={style["check-in"]}>
            <span>CHECK IN</span>
            <img src={vital} alt="" />
          </div>
          <div className={style["separator"]}></div>
          <div className={style["check-out"]}>
            <span>CHECK IN</span>
            <img src={vital} alt="" />
          </div>
        </div>
        <div className={style["book-room"]}>BOOK ROOM</div>
      </div>
      <div className={style["more-info"]}>
        <div className={style["phone-stuff"]}>
          <span>+38 032 297 50 20</span>
          <p>8 LYSTOPADOVOHO CHYNU,LVIV</p>
        </div>
        <p className={style["art-hall"]}>ART & CONGRESS HALL</p>
      </div>
    </div>
  );
};

export default Hero;
