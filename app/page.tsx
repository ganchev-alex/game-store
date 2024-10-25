import React from "react";
import { Variants } from "framer-motion";

import { IGameResult } from "../utility/interfaces/IGameResult";

import PrimeCarousel from "@/components/home_page_components/primary_carousel/PrimeCarousel";
import Spotlight from "@/components/home_page_components/spotlight/Spotlight";
import GenresGrid from "@/components/home_page_components/genres/GenresGrid";
import FlashSale from "@/components/home_page_components/flash_sales/FlashSale";
import Banner from "@/components/home_page_components/banner/Banner";
import Categories from "@/components/home_page_components/categories/Categories";
import UnderPrice from "@/components/home_page_components/under_price_section/UnderPrice";
import AdditionalGrid from "@/components/home_page_components/additional_grids/AdditionalGrid";
import LoginBanner from "@/components/home_page_components/login_banner/LoginBanner";

const generateGameData = async function (argParams: any) {
  const params = Object.entries(argParams)
    .map(([key, value]) => {
      return `${key}=${value}`;
    })
    .join("&");

  try {
    const response = await fetch(
      `${process.env.API_ROOT}/games?key=${process.env.API_KEY}&${params}`,
      { cache: "force-cache" }
    );

    if (response.ok) {
      return (await response.json()).results as IGameResult[];
    }

    return [] as IGameResult[];
  } catch {
    return [] as IGameResult[];
  }
};

const paramsSets = [
  {
    // Spotligth
    page_size: 15,
    metacritics: "60,80",
    ordering: "-added",
    dates: "2015-01-01,2022-12-31",
    platforms: "4,5,1,18,7",
  },
  {
    // Flash sale
    page_size: 6,
    ordering: "-added",
    dates: "2023-01-01,2023-12-31",
    plaforms: "4,5,1,18,7",
  },
  {
    // New & Treanding
    page_size: 5,
    ordering: "-added",
    dates: "2024-01-01,2024-09-30",
    platforms: "4,5,1,18,7",
  },
  {
    // Top Sellers
    page_size: 5,
    ordering: "-metacritics",
    dates: "2021-01-01,2023-12-31",
    platforms: "4,5,1,18,7",
  },
  {
    // Upcoming
    page_size: 5,
    ordering: "-added",
    dates: "2024-10-10,2025-12-31",
    platforms: "4,5,1,18,7",
  },
  {
    // Under 10 $ and 20 $
    page_size: 12,
    page: 10,
    ordering: "-added",
    dates: "2022-01-01,2023-12-31",
    platforms: "4,5,1,18,7",
  },
  {
    // Recently Updated
    page_size: 6,
    page: 12,
    ordering: "-updated",
    platforms: "4,5,1,18,7",
  },
  {
    // VR Games
    page_size: 6,
    tags: "vr",
    ordering: "-added",
  },
];

interface IVariants {
  scrollFadeUp: Variants;
  scrollFadeDown: Variants;
  scrollFadeLeft: Variants;
  scrollFadeRigth: Variants;
}

const variants: IVariants = {
  scrollFadeUp: {
    offScreen: {
      y: 75,
      opacity: 0,
    },
    onScreen: {
      y: 0,
      opacity: 1,
      transition: {
        type: "spring",
        duration: 1,
      },
    },
  },
  scrollFadeDown: {
    offScreen: {
      y: -100,
      opacity: 0,
    },
    onScreen: {
      y: 0,
      opacity: 1,
      transition: {
        type: "spring",
        duration: 1,
      },
    },
  },
  scrollFadeLeft: {
    offScreen: {
      x: -100,
      opacity: 0,
    },
    onScreen: {
      x: 0,
      opacity: 1,
      transition: {
        type: "spring",
        duration: 1,
      },
    },
  },
  scrollFadeRigth: {
    offScreen: {
      x: 100,
      opacity: 0,
    },
    onScreen: {
      x: 0,
      opacity: 1,
      transition: {
        type: "spring",
        duration: 1,
      },
    },
  },
};

export default async function Home() {
  const promisedData = paramsSets.map((params) => generateGameData(params));
  const [
    spotlight,
    flashSale,
    newAndTrending,
    topSellers,
    upcoming,
    underPrice,
    recentlyUpdated,
    vrGames,
  ] = await Promise.all(promisedData);

  return (
    <>
      <PrimeCarousel />
      <Spotlight
        gamesData={spotlight.filter((game) => game.name !== "Apex Legends")}
        scrollVariants={variants.scrollFadeUp}
      />
      <GenresGrid scrollVariants={variants.scrollFadeUp} />
      <FlashSale
        flashSaleData={flashSale}
        scrollVariants={variants.scrollFadeUp}
      />
      <Banner scrollVariants={variants.scrollFadeDown} />
      <Categories
        newAndTrending={newAndTrending}
        topSellers={topSellers}
        upcoming={upcoming}
        scrollVariants={variants.scrollFadeDown}
      />
      <UnderPrice
        underPrice={underPrice}
        scrollVariantsLeft={variants.scrollFadeLeft}
        scrollVariantsRigth={variants.scrollFadeRigth}
      />
      <AdditionalGrid
        title="Recently Updated"
        gamesData={recentlyUpdated}
        scrollVariants={variants.scrollFadeUp}
      />
      <AdditionalGrid
        title="VR Selection"
        gamesData={vrGames}
        scrollVariants={variants.scrollFadeUp}
      />
      <LoginBanner />
    </>
  );
}
