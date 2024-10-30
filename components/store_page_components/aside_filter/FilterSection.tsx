"use client";
import { useState } from "react";
import Image from "next/image";
import { Variants, motion, AnimatePresence } from "framer-motion";

import styles from "./FilterSection.module.scss";
import arrowSrc from "../../../public/assets/icons/arrow.png";

const toggleVariants: Variants = {
  toggled: {
    opacity: 0.6,
    scaleY: -1,
  },
  untoggled: {
    opacity: 1,
    scaleY: 1,
  },
};

const listVariants = {
  open: {
    opacity: 1,
    height: "auto",
    transition: {
      type: "spring",
      stiffness: 200,
      damping: 25,
      staggerChildren: 0.07,
      delayChildren: 0.1,
    },
  },
  closed: {
    opacity: 0,
    height: 0,
    transition: {
      duration: 0.35,
    },
  },
};

const itemVariants = {
  open: {
    opacity: 1,
    x: 0,
    scale: 1,
    rotate: 0,
    transition: { type: "spring", stiffness: 300, damping: 20 },
  },
  closed: {
    opacity: 0,
    x: -20,
    scale: 0.95,
    rotate: -10,
    transition: { duration: 0.1 },
  },
};

const FilterSection: React.FC<{
  title: string;
  dataSet:
    | { id: number; name: string }[]
    | { criteria: string; name: string }[];
}> = function ({ title, dataSet }) {
  const [toggleState, setToggleState] = useState(false);

  return (
    <div className={styles.section}>
      <motion.h6
        className={`${styles["section__title"]} ${
          toggleState ? "" : styles["section__title--toggled"]
        }`}
        onClick={() => setToggleState((previousState) => !previousState)}
        layout
      >
        {title}
        <motion.div
          variants={toggleVariants}
          initial="untoggled"
          animate={toggleState ? "toggled" : "untoggled"}
        >
          <Image src={arrowSrc} alt="Toggle Icon" />
        </motion.div>
      </motion.h6>
      <AnimatePresence>
        {toggleState && (
          <motion.ul
            className={styles["section__list"]}
            variants={listVariants}
            initial="closed"
            animate="open"
            exit="closed"
          >
            {dataSet.map((set, index) => (
              <motion.li key={index} variants={itemVariants}>
                <button className={styles["section__option"]}>
                  {set.name}
                </button>
              </motion.li>
            ))}
          </motion.ul>
        )}
      </AnimatePresence>
    </div>
  );
};

export default FilterSection;
