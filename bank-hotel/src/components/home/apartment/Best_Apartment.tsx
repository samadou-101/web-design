import style from "../styles/home-apartment.module.css";
import yellowWave from "../../../assets/yellow-wave.png";
const Best_Apartment = () => {
  return (
    <div className={style["apartment-container"]}>
      {/* <div className={style["background-img"]}>
        <img src={apartmentBackground} alt="" />
      </div> */}
      <div className={style["wave"]}>
        <img src={yellowWave} alt="" />
      </div>
      <div className={style["content"]}>
        <h1>BEST APARTMENTS</h1>
        <p>
          ALL ROOM DECORATION WAS MADE WITH ECOLOGICAL CERTIFIED AND SAFE
          MATERIALS
        </p>
      </div>
    </div>
  );
};

export default Best_Apartment;
