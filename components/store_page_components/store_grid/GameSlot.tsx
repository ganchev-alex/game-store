"use client";
import Image from "next/image";
import { motion } from "framer-motion";

import styles from "./GameSlot.module.scss";
import windowsSrc from "../../../public/assets/icons/windows-platform-logo.png";
import macSrc from "../../../public/assets/icons/mac-os-logo.png";
import xboxSrc from "../../../public/assets/icons/xbox-logo.png";
import playStationSrc from "../../../public/assets/icons/play-station.png";
import nintendoSrc from "../../../public/assets/icons/nintendo-switch.png";
import cartSrc from "../../../public/assets/icons/cart.png";
import plusSrc from "../../../public/assets/icons/plus.png";

const GameSlot: React.FC = function () {
  return (
    <motion.div
      className={styles.slot}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.98 }}
      transition={{
        type: "spring",
        stiffness: 300,
        damping: 20,
      }}
    >
      <div className={styles.visuals}>
        {/* Background Image */}
        <img
          src="https://assets.nintendo.com/image/upload/q_auto/f_auto/ncom/software/switch/70010000084608/ba0572bf9d840b03bf9958809943fb3c76c3adfd6d8f2704b0f1b766f8aa4027"
          className={styles["visuals__thumb"]}
        />
        <div>{/* Preview: Video and Screenshots */}</div>
      </div>
      <div className={styles.description}>
        <span className={styles["description__platforms"]}>
          <Image src={windowsSrc} alt="Windows Logo" />
          <Image src={macSrc} alt="MacOS Logo" />
        </span>
        <h5 className={styles["description__title"]}>
          Game Title Title TitleTitleTitle TitleTitle
        </h5>
        <div className={styles["description__actions"]}>
          <button className={styles["slot__add"]}>
            <Image src={cartSrc} alt="Add To Cart Button" />
            Add
          </button>
          <button className={styles["slot__wish"]}>+ Wish</button>
        </div>
      </div>
      <div className={styles["slot__additional"]}>
        <span>
          <h6>Release Date:</h6>
          <p>02.12.24</p>
        </span>
        <span>
          <h6>Genres:</h6>
          <p>Party Games, Board Games</p>
        </span>
        <span style={{ border: "none" }}>
          <h6>Keywords:</h6>
          <p>Board Games, Party, Fun</p>
        </span>
        <button>Show more like this</button>
      </div>
    </motion.div>
  );
};

export default GameSlot;
