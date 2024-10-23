"use client";
import { motion, Variants } from "framer-motion";
import Column from "./Column";

import styles from "./Categories.module.scss";
import { IGameResult } from "@/utility/interfaces/IGameResult";

const Categories: React.FC<{
  newAndTrending: IGameResult[];
  topSellers: IGameResult[];
  upcoming: IGameResult[];
  scrollVariants: Variants;
}> = function ({ newAndTrending, topSellers, upcoming, scrollVariants }) {
  return (
    <motion.section
      className={styles.section}
      initial="offScreen"
      whileInView="onScreen"
      variants={scrollVariants}
      viewport={{ once: true, amount: 0.2 }}
    >
      <Column sectionTitle="New & Trending" gamesData={newAndTrending} />
      <Column sectionTitle="Top Sellers" gamesData={topSellers} />
      <Column sectionTitle="Upcoming" gamesData={upcoming} />
    </motion.section>
  );
};

export default Categories;
