import style from "../styles/home-about.module.css";
import roomsBtn from "../../../assets/rooms-btn.svg";
const About = () => {
  return (
    <div className={style["about-container"]}>
      <div className={style["background-drawings"]}>
        <div className={style["rectangle-radius"]}></div>
      </div>
      <div className={style["about-content"]}>
        <section className={style["left-img"]}></section>
        <div className={style["about-text"]}>
          <div className={style["about-logo"]}>
            <p>
              <span>ABOUT</span>
              <span>US</span>
            </p>
          </div>
          <div className={style["text"]}>
            <h4>High Quality</h4>
            <p>
              The five-star Bank Hotel was reopened to visitors in 2016. The
              building was renovated and modernized to meet the expectations of
              the most demanding guests. We offer luxurious rooms. numerous
              facilities, and exceptional service.
            </p>
          </div>
        </div>
        <div className={style["right-section"]}>
          <div className={style["right-img"]}></div>
          <div className={style["rooms-btn"]}>
            {/* <img src={roomsBtn} alt="" /> */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
