"use client";
import { motion, Variants } from "framer-motion";
import Image from "next/image";

import styles from "./Banner.module.scss";
import backgroundSrc from "../../../public/assets/images/stacked_games.png";

const Banner: React.FC<{ scrollVariants: Variants }> = function ({
  scrollVariants,
}) {
  return (
    <motion.section
      className={styles.banner}
      initial="offScreen"
      whileInView="onScreen"
      variants={scrollVariants}
      viewport={{ once: true, amount: 1 }}
    >
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
    </motion.section>
  );
};

export default Banner;
