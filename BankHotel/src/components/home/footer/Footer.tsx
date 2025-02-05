import style from "../styles/home-footer.module.css";
import arrowRight from "../../../assets/arrow-right.png";
const Footer = () => {
  return (
    <div className={style["footer-container"]}>
      <div className={style["about"]}>
        <h4>
          <span>/</span>ABOUT US
        </h4>
        <p>
          The five-star hotel in a beautiful European city with a modern
          restaurant, conference-hall, and art-event
        </p>
        <span className={style["rights"]}>
          2025 All rights reserved. BankHotel
        </span>
      </div>
      <div className={style["news"]}>
        <h4>
          <span>/</span>NEWS
        </h4>
        <p>
          Sign up to our newsletter not to miss exclusive offers and information
          about the upcoming events.
        </p>
        <div className={style["email"]}>
          <p>email</p>
          <img src={arrowRight} alt="" />
        </div>
      </div>
      <div className={style["socials"]}>
        <h4>
          <span>/</span>SOCIALS
        </h4>
        <ul>
          <li>FACEBOOK</li>
          <li>INSTAGRAM</li>
          <li>TWITTER</li>
        </ul>
      </div>
    </div>
  );
};

export default Footer;
