import style from "../styles/home-gallery.module.css";
import littleRoom from "../../../assets/little-room1.png";
import table from "../../../assets/table.png";
import label from "../../../assets/label1.png";
import hall from "../../../assets/hall.png";
import closing from "../../../assets/Polygon1.png";
import hallSide from "../../../assets/hall-side.png";
import mirror from "../../../assets/mirror.png";

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
        <div className={style["closing"]}>
          <img src={closing} alt="" />
          <p>It is our pleasure to meet your most unrealistic expectations.</p>
        </div>
      </div>
      {/* Progress */}
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
