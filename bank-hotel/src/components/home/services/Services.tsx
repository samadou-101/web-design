import style from "../styles/home-services.module.css";
import Facilities from "./Facilities";
import Rooms_Apartments from "./Rooms_Apartments";
const Services = () => {
  return (
    <div className={style["services-container"]}>
      <Rooms_Apartments />
      <Facilities />
    </div>
  );
};

export default Services;
