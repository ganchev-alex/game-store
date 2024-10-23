"use client";
import { motion, Variants } from "framer-motion";
import DisplayCard from "../flash_sales/DisplayCard";

import styles from "./AdditionalGrid.module.scss";
import { IGameResult } from "@/utility/interfaces/IGameResult";

const AdditionalGrid: React.FC<{
  title: string;
  gamesData: IGameResult[];
  scrollVariants: Variants;
}> = function ({ title, gamesData, scrollVariants }) {
  return (
    <motion.div
      initial="offScreen"
      whileInView="onScreen"
      variants={scrollVariants}
      viewport={{ once: true, amount: 0.2 }}
    >
      <h2
        className={styles.title}
        style={title.includes("VR") ? { marginTop: "2.7em" } : {}}
      >
        {title}
      </h2>
      <section className={styles.grid}>
        {gamesData.map((gameData) => (
          <DisplayCard
            key={gameData.id}
            gameTitle={gameData.name}
            thumb={gameData.background_image}
          />
        ))}
      </section>
    </motion.div>
  );
};

export default AdditionalGrid;
