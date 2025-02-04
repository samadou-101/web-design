import style from "../styles/home-services.module.css";
import Rooms_Apartments from "./Rooms_Apartments";
const Services = () => {
  return (
    <div className={style["services-container"]}>
      <Rooms_Apartments />
    </div>
  );
};

export default Services;
