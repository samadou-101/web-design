import style from "../styles/home-services.module.css";
import manKitchen from "../../../assets/man-kitchen.png";
import starPNG from "../../../assets/star.png";
import chef from "../../../assets/chef.png";
const Facilities = () => {
  return (
    <div className={style["facilities-container"]}>
      <div className={style["fac-header"]}>
        <div className={style["fac-left-section"]}>
          <h3>ART & CONGRESS HALL</h3>
          <div className="img">
            <img src={manKitchen} alt="" />
          </div>
        </div>
        <div className={style["fac-middle-section"]}>
          <div className={style["header"]}>
            <h1>OUR FACI</h1>
            <h1>
              <img src={starPNG} alt="" />
              LITIES
            </h1>
          </div>
          <p className={style["content"]}>
            Bank Hotel offers you a wide range of additional services and
            facilities. Visit our restaurant to try exclusive meals, book a
            conference hall to organize a business meeting, or relax in the
            art-bar.
          </p>
        </div>
        <div className={style["fac-right-section"]}>
          <div className={style["hotel-premium"]}></div>
          <div className={style["fac-r-img"]}>
            <img src={chef} alt="" />
          </div>
        </div>
      </div>

      {/*    working       */}
      <div className={style["fac-content"]}>
        <div className="fac-left-section">
          <img src="" alt="" />
        </div>
        <div className={style['"fac-middle-section"']}>
          <h2>01</h2>
          <div className={style["text"]}>
            <h2></h2>
            <p></p>
          </div>
        </div>
        <div className={style['"fac-right-section"']}>
          <div className={style["img"]}></div>
        </div>
      </div>

      <div className={style["fac-more"]}>
        <div className={style["two"]}>
          <div className={style["img"]}>
            <img src="" alt="" />
          </div>
          <h2></h2>
          <h2></h2>
          <img src="" alt="" />
        </div>
        <div className={style["three"]}>
          <div className={style["img"]}>
            <img src="" alt="" />
          </div>
          <h2></h2>
          <h2></h2>
          <img src="" alt="" />
        </div>
      </div>
    </div>
  );
};

export default Facilities;
