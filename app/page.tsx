import React from "react";

import { IGameResult } from "../utility/interfaces/IGameResult";

import PrimeCarousel from "@/components/home_page_components/primary_carousel/PrimeCarousel";
import Spotlight from "@/components/home_page_components/spotlight/Spotlight";
import GenresGrid from "@/components/home_page_components/genres/GenresGrid";
import FlashSale from "@/components/home_page_components/flash_sales/FlashSale";
import Banner from "@/components/home_page_components/banner/Banner";
import Categories from "@/components/home_page_components/categories/Categories";

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
    ordering: "-metacritic",
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
];

export default async function Home() {
  const promisedData = paramsSets.map((params) => generateGameData(params));
  const [spotlight, flashSale, newAndTrending, topSellers, upcoming] =
    await Promise.all(promisedData);

  return (
    <>
      <PrimeCarousel />
      {
        <Spotlight
          gamesData={spotlight.filter((game) => game.name !== "Apex Legends")}
        />
      }
      <GenresGrid />
      <FlashSale flashSaleData={flashSale} />
      <Banner />
      <Categories
        newAndTrending={newAndTrending}
        topSellers={topSellers}
        upcoming={upcoming}
      />
    </>
  );
}
