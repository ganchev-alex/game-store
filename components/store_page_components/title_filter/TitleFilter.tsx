import Image from "next/image";

import styles from "./TitleFilter.module.scss";
import gridSrc from "../../../public/assets/icons/grid_display.png";
import signleSrc from "../../../public/assets/icons/single_display.png";
import mangifierSrc from "../../../public/assets/icons/magnifying-glass.png";

const TitleFilter: React.FC = function () {
  return (
    <header className={styles.heading}>
      <h3>15,450 results</h3>
      <div className={styles.controls}>
        <button className={styles["controls__layout"]}>
          <Image src={gridSrc} alt="Grid Layout" />
        </button>
        <button
          className={`${styles["controls__layout"]} ${styles["controls__layout--disabled"]}`}
        >
          <Image src={signleSrc} alt="Single Card Layout" />
        </button>
        <div className={styles["controls__search"]}>
          <Image src={mangifierSrc} alt="Search" />
          <input type="search" placeholder="Search for a game title" />
        </div>
      </div>
    </header>
  );
};

export default TitleFilter;
