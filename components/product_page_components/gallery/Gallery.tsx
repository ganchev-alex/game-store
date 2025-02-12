"use client";

import { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import Image from "next/image";

import styles from "./Gallery.module.scss";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "./swiper_config.css";

const Gallery: React.FC<{
  title: string;
  screenshots: {
    id: number;
    image: string;
    width: number;
    height: number;
    type: "screenshot";
  }[];
  trailers: {
    id: number;
    name: string;
    preview: string;
    data: {
      "480": string;
      max: string;
    };
    type: "trailer";
  }[];
}> = function ({ title, screenshots, trailers }) {
  const [selectedSlot, setSelectedSlot] = useState(0);
  const slides = [...trailers, ...screenshots];
  console.log(slides);

  return (
    <section className={styles.gallery}>
      <h2 className={styles["gallery__title"]}>{title}</h2>
      {slides[selectedSlot].type === "screenshot" ? (
        <Image
          src={
            slides[selectedSlot].type === "screenshot"
              ? slides[selectedSlot].image
              : ""
          }
          alt={`Screenshot ${slides[selectedSlot].id} at preview`}
          className={styles["gallery__display"]}
          width={1920}
          height={1080}
          loading="lazy"
        />
      ) : (
        <video
          key={slides[selectedSlot].id}
          className={styles["gallery__display"]}
          controls
          autoPlay
          muted
          poster={slides[selectedSlot].preview}
        >
          <source src={slides[selectedSlot].data.max} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      )}
      <Swiper
        modules={[Navigation]}
        slidesPerView={4.8}
        spaceBetween={10}
        navigation
        className={styles["gallery__selector"]}
      >
        {slides.map((s, index) => (
          <SwiperSlide
            key={s.id}
            className={`${styles["gallery__slide"]} ${
              index === selectedSlot ? styles["gallery__slide--active"] : ""
            }`}
          >
            <Image
              src={s.type === "screenshot" ? s.image : s.preview}
              alt={`Screenshot: ${s.id}`}
              width={s.type === "screenshot" ? s.width : 1920}
              height={s.type === "screenshot" ? s.height : 1020}
              onClick={() => setSelectedSlot(index)}
              draggable={false}
              loading="lazy"
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
};

export default Gallery;
