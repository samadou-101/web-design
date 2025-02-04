import style from "../styles/home-services.module.css";
import star from "../../../assets/Star.svg";
import littleRoom from "../../../assets/little-room1.png";
import bigRoom from "../../../assets/big-room1.png";
import nextRoomBtn from "../../../assets/next-room-btn.svg";
// import Since from "../shared/Since";
const Rooms_Apartments = () => {
  return (
    <div className={style["rooms-apartments-container"]}>
      <div className={style["content"]}>
        <div className={style["header"]}>
          <h1>ROOMS & APARTMENTS</h1>
          <p>
            ALL ROOMS DECORATIONS WAS MADE WITH ECOLOGICAL CERTIFIED AND SAFE
            MATERIALS.
          </p>
        </div>
        <div className={style["rooms"]}>
          <section className={style["left-section"]}>
            <div className={style["little-room"]}>
              <img src={littleRoom} alt="" />
            </div>
            <div className={style["next-room-btn"]}>
              <img src={nextRoomBtn} alt="" />
            </div>
          </section>
          <section className={style["middle-section"]}>
            <div className={style["since"]}>
              <img src={star} alt="star" />
              <span>Since 1973</span>
            </div>

            <div className={style["text"]}>
              <h1>Superior Twin</h1>
              <p>
                The Superior twin is perfect for those who plan to stay long.
                The specious and bright room is equipped with deluxe Italian
                furniture and has a beautiful view to the historical part of the
                city. Stylish interior design and comfortable beds will make
                your stay cozy and pleasant.
              </p>
            </div>

            <div className={style["current-room"]}>
              <span>01</span>
              <div className={style["separator"]}></div>
              <span>04</span>
            </div>
          </section>
          <section className={style["right-section"]}>
            <div className={style["big-room"]}>
              <img src={bigRoom} alt="" />
            </div>
          </section>
        </div>
      </div>
    </div>
  );
};

export default Rooms_Apartments;
