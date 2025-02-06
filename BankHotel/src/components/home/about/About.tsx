import style from "../styles/home-about.module.css";
import { motion } from "framer-motion";
const About = () => {
  return (
    <div className={style["about-container"]}>
      <div className={style["background-drawings"]}>
        <div className={style["rectangle-radius"]}></div>
      </div>
      <div className={style["about-content"]}>
        <motion.section
          className={style["left-img"]}
          initial={{ opacity: 0, x: -200 }}
          transition={{ duration: 1, ease: "linear" }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.4 }}
        ></motion.section>
        <div className={style["about-text"]}>
          <div className={style["about-logo"]}>
            <p>
              <span>ABOUT</span>
              <span>US</span>
            </p>
          </div>
          <div className={style["text"]}>
            <h4>High Quality</h4>
            <p>
              The five-star Bank Hotel was reopened to visitors in 2016. The
              building was renovated and modernized to meet the expectations of
              the most demanding guests. We offer luxurious rooms. numerous
              facilities, and exceptional service.
            </p>
          </div>
        </div>
        <div className={style["right-section"]}>
          <motion.div
            className={style["right-img"]}
            initial={{ opacity: 0, x: 200 }}
            whileInView={{
              opacity: 1,
              x: 0,
              transition: { duration: 1, ease: "linear" },
            }}
            viewport={{ once: true, amount: 0.4 }}
          ></motion.div>
          <div className={style["rooms-btn"]}>
            {/* <img src={roomsBtn} alt="" /> */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
