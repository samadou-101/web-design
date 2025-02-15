import style from "../styles/home-contact.module.css";
import contactPic from "../../../assets/contact-pic.png";
import contactStar from "../../../assets/contact-star.png";
import curve from "../../../assets/Curve.png";
import dropBtn from "../../../assets/drop-btn.png";
import bookRoomBtn from "../../../assets/book-room-btn-contact.png";
const Get_In_Touch = () => {
  return (
    <div className={style["contact-container"]}>
      <div className={style["phone-num"]}>
        <h2>+38 032 297 50 20</h2>
      </div>
      <div className={style["g-i-t"]}>
        <div className={style["background"]}>
          <img src={contactPic} alt="" />
        </div>
        <div className={style["wave"]}>
          <img src={curve} alt="" />
        </div>
        <h4>8 LYSTOPADOVOH CHYNU,LVIV</h4>
        <div className={style["title"]}>
          <span>
            GET IN <img src={contactStar} alt="" />
          </span>
          <span>TOUCH</span>
        </div>
      </div>
      {/* Progress */}
      <div className={style["find-room"]}>
        <div className={style["book-room-btn"]}>
          <img src={bookRoomBtn} alt="" />
        </div>
        <span>FIND A ROOM</span>
        <div className={style["action"]}>
          <div className={style["check-in"]}>
            <span>CHECK IN</span> <img src={dropBtn} alt="" />
          </div>
          <div className={style["check-out"]}>
            <span>CHECK OUT</span> <img src={dropBtn} alt="" />
          </div>
          <div className={style["book-room"]}>BOOK ROOM</div>
        </div>
      </div>
    </div>
  );
};

export default Get_In_Touch;
