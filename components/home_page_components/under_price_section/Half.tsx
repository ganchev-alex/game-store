"use client";
import { motion, Variants } from "framer-motion";

import PriceCard from "./PriceCard";

import styles from "./Half.module.scss";
import { IGameResult } from "@/utility/interfaces/IGameResult";

const Half: React.FC<{
  heading: string;
  gameData: IGameResult[];
  scrollVariants: Variants;
}> = function ({ heading, gameData, scrollVariants }) {
  return (
    <motion.div
      className={styles.wrapper}
      initial="offScreen"
      whileInView="onScreen"
      variants={scrollVariants}
      viewport={{ once: true, amount: 0.3 }}
    >
      <h4 className={styles["wrapper__title"]}>{heading}</h4>
      <div className={styles["wrapper__grid"]}>
        {gameData.map((game) => (
          <PriceCard
            key={game.id}
            gameData={game}
            isUnderTen={heading.includes("10")}
          />
        ))}
      </div>
    </motion.div>
  );
};

export default Half;
