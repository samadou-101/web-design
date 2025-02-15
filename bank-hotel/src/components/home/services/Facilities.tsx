import style from "../styles/home-services.module.css";
import manKitchen from "../../../assets/man-kitchen.png";
import starPNG from "../../../assets/star.png";
import chef from "../../../assets/chef.png";
import goDown from "../../../assets/go-down.png";
import spaceCopenhagen from "../../../assets/space-copenhagen.png";
import conferenceHall from "../../../assets/conference-hall.png";
import nextRoom from "../../../assets/next-room-btn.svg";
import cafeteria from "../../../assets/cafeteria.jpg";
const Facilities = () => {
  return (
    <div className={style["facilities-container"]}>
      <div className={style["fac-header"]}>
        <div className={style["fac-left-section"]}>
          <h3>ART & CONGRESS HALL</h3>
          <div className={style["img"]}>
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

      <div className={style["fac-content"]}>
        <div className={style["fac-left-section"]}>
          <img src={goDown} alt="" />
        </div>
        <div className={style["fac-middle-section"]}>
          <h2>01</h2>
          <div className={style["fac-text"]}>
            <h2>Ice Restaurant</h2>
            <p>
              The hotel's exclusive infrastructure is complemented by the unique
              atmosphere of the Safe Restaurant. Author's menu, extensive orange
              card, and live event will set you for the correct mood.
            </p>
          </div>
        </div>
        <div className={style["fac-right-section"]}>
          <div className={style["img"]}>
            <img src={spaceCopenhagen} alt="" />
          </div>
        </div>
      </div>

      {/*    progress       */}
      <div className={style["fac-more"]}>
        <div className={style["two"]}>
          <div className={style["img"]}>
            <img src={conferenceHall} alt="" />
          </div>
          <h2>02</h2>
          <h2>Conference Hall</h2>
          <img src={nextRoom} alt="" />
        </div>
        <div className={style["three"]}>
          <div className={style["img"]}>
            <img src={cafeteria} alt="" />
          </div>
          <h2>03</h2>
          <h2>Cafeteria "Reserve"</h2>
          <img src={nextRoom} alt="" />
        </div>
      </div>
    </div>
  );
};

export default Facilities;
