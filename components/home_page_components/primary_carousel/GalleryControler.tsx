"use client";
import { Dispatch, SetStateAction, useState } from "react";
import { easeOut, motion } from "framer-motion";

import styles from "./GalleryControler.module.scss";

const variants = {
  mainInitial: {
    x: 125,
    opacity: 0.5,
  },
  mainAnimate: {
    x: 0,
    opacity: 1,
  },
  baseInitial: {
    x: 0,
    opacity: 1,
  },
  baseAnimate: {
    x: -100,
    opacity: 0,
  },
  previewInitial: {
    opacity: 0,
  },
  previewAnimate: {
    opacity: [0.9, 0],
    transition: {
      duration: 0.5,
      mode: easeOut,
    },
  },
};

const GalleryController: React.FC<{
  thumbs: string[];
  setMainIndex: Dispatch<SetStateAction<number>>;
}> = function (props) {
  const [index, setIndex] = useState(1);
  const length = props.thumbs.length;

  const onPreviewNext = function () {
    setIndex((previousIndex) => {
      const newIndex = (previousIndex + 1) % length;
      props.setMainIndex((newIndex - 1 + length) % length);
      return newIndex;
    });
  };

  const onSkip = function (skipIndex: number) {
    setIndex(skipIndex);
    props.setMainIndex((skipIndex - 1 + length) % length);
  };

  return (
    <>
      <div className={styles.gallery}>
        <div>
          <motion.img
            key={(index - 1 + length) % length}
            src={props.thumbs[(index - 1 + length) % length]}
            className={styles["gallery__base"]}
            variants={variants}
            initial="baseInitial"
            animate="baseAnimate"
          />
          <motion.img
            key={index}
            src={props.thumbs[index]}
            onClick={onPreviewNext}
            variants={variants}
            initial="mainInitial"
            animate="mainAnimate"
          />
        </div>
        <div className={styles["gallery__flash"]}>
          <motion.div
            key={(index + 1) % length}
            variants={variants}
            initial="previewInitial"
            animate="previewAnimate"
          />
          <img src={props.thumbs[(index + 1) % length]} />
        </div>
      </div>
      <div className={styles.pagination}>
        {Array.from({ length }, (_, i) => (
          <div
            style={
              i === index % length
                ? {
                    width: 350 / length,
                    height: 5.5,
                    backgroundColor: "#f2f2f2",
                  }
                : { width: 300 / length }
            }
            className={styles["pagination__line"]}
            onClick={() => onSkip(i)}
          />
        ))}
      </div>
    </>
  );
};

export default GalleryController;
