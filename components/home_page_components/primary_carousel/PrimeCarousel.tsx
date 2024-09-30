"use client";
import { useState } from "react";
import { motion, spring } from "framer-motion";

import CarouselDataSlot from "@/utility/interfaces/ICarouselDataSlot";
import CarouselSlot from "./CarouselSlot";
import GalleryController from "./GalleryControler";

import styles from "./PrimaryCarousel.module.scss";
import HomeNavigation from "./HomeNavigation";

const dummyData: CarouselDataSlot[] = [
  {
    gameTitle: "Forza Horizon 4",
    titleLogoUrl:
      "https://logos-world.net/wp-content/uploads/2021/03/Forza-Horizon-4-Logo-2018.png",
    stateTag: "Now available",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos repudiandae dolorem sit molestias laboriosam, pariatur, eum qui placeat sequi maxime nobis iste dignissimos incidunt est doloremque iusto eveniet magnam accusamus!",
    price: 53.99,
    thumb:
      "https://wallpapers.com/images/hd/forza-horizon-5-4k-6npn84pdxkg0yaa6.jpg",
  },
  {
    gameTitle: "Sea of Theives",
    titleLogoUrl:
      "https://status.seaofthieves.com/_next/static/media/assets/global-footer/logo.png",
    stateTag: "New Update",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos repudiandae dolorem sit molestias laboriosam, pariatur, eum qui placeat sequi maxime nobis iste dignissimos incidunt est doloremque iusto eveniet magnam accusamus!",
    price: 39.99,
    thumb:
      "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/1172620/ss_6e8ab9a6fe0bc6b9a11fe55e0c9c8bed0c046639.1920x1080.jpg?t=1723028099",
  },
  {
    gameTitle: "God of War",
    titleLogoUrl:
      "https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/92554480-bde6-4f5c-9861-7022237da1ce/dfk2tos-4299426f-c415-41ad-becf-cae3763ac48d.png/v1/fill/w_1024,h_284/god_of_war_2018_logo_by_brsbr_dfk2tos-fullview.png?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7ImhlaWdodCI6Ijw9Mjg0IiwicGF0aCI6IlwvZlwvOTI1NTQ0ODAtYmRlNi00ZjVjLTk4NjEtNzAyMjIzN2RhMWNlXC9kZmsydG9zLTQyOTk0MjZmLWM0MTUtNDFhZC1iZWNmLWNhZTM3NjNhYzQ4ZC5wbmciLCJ3aWR0aCI6Ijw9MTAyNCJ9XV0sImF1ZCI6WyJ1cm46c2VydmljZTppbWFnZS5vcGVyYXRpb25zIl19.MVMNs_v2I-DeHgKSo8lUt7i3yh56On-52FOiEQ2JRh0",
    stateTag: "Coming January 14, 2022",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos repudiandae dolorem sit molestias laboriosam, pariatur, eum qui placeat sequi maxime nobis iste dignissimos incidunt est doloremque iusto eveniet magnam accusamus!",
    price: 39.99,
    thumb:
      "https://www.jvfrance.com/wp-content/uploads/2016/06/god_of_war_ps4-1920x1080.jpg",
  },
  {
    gameTitle: "Unravel",
    titleLogoUrl:
      "https://cdn2.steamgriddb.com/logo/c7c46d4baf816bfb07c7f3bf96d88544.png",
    stateTag: "On sale",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos repudiandae dolorem sit molestias laboriosam, pariatur, eum qui placeat sequi maxime nobis iste dignissimos incidunt est doloremque iusto eveniet magnam accusamus!",
    price: 4.99,
    discount: 75,
    thumb:
      "https://www.well-played.com.au/wp-content/uploads/2016/02/Unravel-Banner.jpeg",
  },
];

const PrimeCarousel: React.FC = function () {
  const [index, setIndex] = useState(0);

  return (
    <header
      className={styles.base}
      style={{
        backgroundImage: `url(${
          dummyData[(index - 1 + dummyData.length) % dummyData.length].thumb
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
        src={dummyData[index].thumb}
        className={styles["base__thumb"]}
      />
      <div className={styles["base__filter"]} />
      <CarouselSlot
        title={dummyData[index].gameTitle}
        logo={dummyData[index].titleLogoUrl}
        stateTag={dummyData[index].stateTag}
        description={dummyData[index].description}
        price={dummyData[index].price}
        discount={dummyData[index].discount}
      />
      <GalleryController
        thumbs={dummyData.map((set) => set.thumb)}
        setMainIndex={setIndex}
      />
    </header>
  );
};

export default PrimeCarousel;
