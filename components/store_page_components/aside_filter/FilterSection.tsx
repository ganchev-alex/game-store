"use client";
import { useState } from "react";
import Image from "next/image";
import { Variants, motion, AnimatePresence } from "framer-motion";
import { useSearchParams, useRouter } from "next/navigation";

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
  untoggled?: boolean;
  title: string;
  dataSet: {
    id?: number;
    name: string;
    criteria?: { key: string; value: string }[];
  }[];
  paramKey: string;
}> = function ({ title, dataSet, untoggled, paramKey }) {
  const [toggleState, setToggleState] = useState(untoggled || false);
  const searchParams = useSearchParams();
  const router = useRouter();

  const params = new URLSearchParams(searchParams);

  const updateMultipleChoiceFilter = function (value: string) {
    const existingSelection = params.get(paramKey)?.split(",") || [];

    if (existingSelection.includes(value)) {
      const newSelection = existingSelection.filter((v) => v !== value);
      if (newSelection.length) {
        params.set(paramKey, newSelection.join(","));
      } else {
        params.delete(paramKey);
      }
    } else {
      existingSelection.push(value);
      params.set(paramKey, existingSelection.join(","));
    }

    params.set("page", "1");
    router.push(`?${params.toString()}`, { scroll: false });
  };

  return (
    <div className={styles.section}>
      <h6
        className={`${styles["section__title"]} ${
          toggleState ? "" : styles["section__title--toggled"]
        }`}
        onClick={() => setToggleState((previousState) => !previousState)}
      >
        {title}
        <motion.div
          variants={toggleVariants}
          initial="untoggled"
          animate={toggleState ? "toggled" : "untoggled"}
        >
          <Image src={arrowSrc} alt="Toggle Icon" />
        </motion.div>
      </h6>
      <AnimatePresence>
        {toggleState && (
          <motion.ul
            className={styles["section__list"]}
            variants={listVariants}
            initial="closed"
            animate="open"
            exit="closed"
          >
            {dataSet.map((set) => {
              const isActive =
                set.id &&
                params.get(paramKey)?.split(",").includes(set.id.toString());

              return (
                <motion.li key={set.id || set.name} variants={itemVariants}>
                  <button
                    className={`${styles["section__option"]} ${
                      isActive ? styles["section__option--active"] : ""
                    }`}
                    onClick={() => {
                      updateMultipleChoiceFilter(
                        set.id?.toString() || set.name
                      );
                    }}
                  >
                    {set.name}
                  </button>
                </motion.li>
              );
            })}
          </motion.ul>
        )}
      </AnimatePresence>
    </div>
  );
};

export default FilterSection;
