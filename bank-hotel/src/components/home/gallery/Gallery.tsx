import style from "../styles/home-gallery.module.css";
import littleRoom from "../../../assets/little-room1.png";
import table from "../../../assets/table.png";
import label from "../../../assets/label1.png";
import hall from "../../../assets/hall.png";
import closing from "../../../assets/Polygon1.png";
import hallSide from "../../../assets/hall-side.png";
import mirror from "../../../assets/mirror.png";
import mirrorMobile from "../../../assets/mobile-home-gallery-pics/mobile-mirror.png";
import showerStall from "../../../assets/mobile-home-gallery-pics/shower-stall.png";
import hallMobile from "../../../assets/mobile-home-gallery-pics/mobile-hall.png";
import brownRoom from "../../../assets/mobile-home-gallery-pics/mobile-copenhagen.png";
import apartmentMobile from "../../../assets/mobile-home-gallery-pics/mobile-apartment.png";
const Gallery = () => {
  return (
    <div className={style["gallery-container"]}>
      <div className={style["gal-left-section"]}>
        <h3>ART & CONGRESS HALL</h3>
        <div className={style["img1"]}>
          <img src={littleRoom} alt="" />
        </div>
        <div className={style["img2"]}>
          <img src={table} alt="" />
        </div>
      </div>
      <div className={style["gal-middle-section"]}>
        <div className={style["img1"]}>
          <img src={label} alt="" />
        </div>
        <h2>OUR GALLERY</h2>
        <p className={style["content"]}>
          Explolre our specious rooms with the gorgeous view to the historical
          part of the city. Each rooms has an exclusive interior design
          decorated with modern art pieces that will ake your stay
          unforgettable.
        </p>

        <div className={style["img2"]}>
          <img src={hall} alt="" />
        </div>
        <div className={style["mobile-middle-section-pics"]}>
          <div className={style["main-pic"]}>
            <img src={apartmentMobile} alt="" />
          </div>
          <div className={style["left-section"]}>
            <div className={style["img-1"]}>
              <img src={brownRoom} alt="" />
            </div>
            <div
              className={style["img-2"]}
              style={{ width: "auto", height: "auto" }}
            >
              <img src={showerStall} alt="" />
            </div>
          </div>
          <div className={style["right-section"]}>
            <div className={style["img-1"]}>
              <img src={mirrorMobile} alt="" />
            </div>
            <div
              className={style["img-2"]}
              style={{ width: "auto", height: "auto" }}
            >
              <img src={hallMobile} alt="" />
            </div>
          </div>
        </div>
        <div className={style["closing"]}>
          <img src={closing} alt="" />
          <p>It is our pleasure to meet your most unrealistic expectations.</p>
        </div>
      </div>
      <div className={style["gal-right-section"]}>
        <div className={style["img1"]}>
          <img src={hallSide} alt="" />
        </div>
        <div className={style["img2"]}>
          <img src={mirror} alt="" />
        </div>
      </div>
    </div>
  );
};

export default Gallery;
