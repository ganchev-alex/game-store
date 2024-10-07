import Image from "next/image";

import styles from "./Banner.module.scss";
import backgroundSrc from "../../../public/assets/images/stacked_games.png";

const Banner: React.FC = function () {
  return (
    <section className={styles.banner}>
      <Image
        src={backgroundSrc}
        alt="Stacked video games covers"
        className={styles["banner__background"]}
      />
      <h4 className={styles["banner__title"]}>Best of 2023</h4>
      <h5 className={styles["banner__description"]}>
        A look back at the year's best sellers, <br /> best new realeases, most
        play games and more!
      </h5>
    </section>
  );
};

export default Banner;
