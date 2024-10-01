"use client";
import { useState } from "react";
import { motion, spring } from "framer-motion";

import ICarouselDataSlot from "@/utility/interfaces/ICarouselDataSlot";
import CarouselSlot from "./CarouselSlot";
import GalleryController from "./GalleryControler";

import styles from "./PrimaryCarousel.module.scss";
import HomeNavigation from "./HomeNavigation";

const PrimeCarousel: React.FC<{ carouselData: ICarouselDataSlot[] }> =
  function (props) {
    const [index, setIndex] = useState(0);
    const { carouselData } = props;

    return (
      <header
        className={styles.base}
        style={{
          backgroundImage: `url(${
            carouselData[
              (index - 1 + carouselData.length) % carouselData.length
            ].thumb
          })`,
        }}
      >
        <HomeNavigation />
        <motion.img
          key={index}
          initial={{ x: 35 }}
          animate={{ x: 0 }}
          transition={{
            duration: 0.5,
            ease: "backOut",
          }}
          src={carouselData[index].thumb}
          className={styles["base__thumb"]}
        />
        <div className={styles["base__filter"]} />
        <CarouselSlot
          title={carouselData[index].gameTitle}
          logo={carouselData[index].titleLogoUrl}
          stateTag={carouselData[index].stateTag}
          description={carouselData[index].description}
          price={carouselData[index].price}
          discount={carouselData[index].discount}
        />
        <GalleryController
          thumbs={carouselData.map((set) => set.thumb)}
          setMainIndex={setIndex}
        />
      </header>
    );
  };

export default PrimeCarousel;
