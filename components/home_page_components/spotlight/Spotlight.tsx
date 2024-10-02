import React from "react";
import Image from "next/image";

import CardSlot from "./CardSlot";

import styles from "./Spotlight.module.scss";
import arrowSrc from "../../../public/assets/icons/arrow.png";

const Spotlight: React.FC = function () {
  return (
    <React.Fragment>
      <div className={styles.heading}>
        <h2>Spotlight</h2>
        <span className={styles["heading__controls"]}>
          <button>
            <Image src={arrowSrc} alt="Left Arrow Icon" draggable={false} />
          </button>
          <button>
            <Image src={arrowSrc} alt="Rigth Arrow Icon" draggable={false} />
          </button>
        </span>
      </div>
      <div className={styles.grid}>
        <CardSlot />
        <CardSlot />
        <CardSlot />
        <CardSlot />
        <CardSlot />
      </div>
    </React.Fragment>
  );
};

export default Spotlight;
