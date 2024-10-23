"use client";
import { motion, Variants } from "framer-motion";

import Genre from "./Genre";

import styles from "./GenresGrid.module.scss";
import { genres as genreData } from "../../../utility/data/genres";

const GenresGrid: React.FC<{ scrollVariants: Variants }> = function ({
  scrollVariants,
}) {
  return (
    <motion.div
      initial="offScreen"
      whileInView="onScreen"
      viewport={{ once: true, amount: 0.1 }}
      variants={scrollVariants}
    >
      <h2 className={styles.title}>Browse By Genre or Theme</h2>
      <section className={styles.grid}>
        {genreData.map((genreData, index) => (
          <Genre
            key={index}
            genre={genreData.genre}
            thumb={genreData.thumb}
            filterColor={genreData.filterColor}
          />
        ))}
      </section>
    </motion.div>
  );
};

export default GenresGrid;
