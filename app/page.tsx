import PrimeCarousel from "@/components/home_page_components/primary_carousel/PrimeCarousel";
import Spotlight from "@/components/home_page_components/spotlight/Spotlight";

import { IGameResult } from "../utility/interfaces/IGameResult";
import GenresGrid from "@/components/home_page_components/genres/GenresGrid";

const getSpotlightData = async function () {
  console.log(
    `${process.env.API_ROOT}/games?key=${process.env.API_KEY}&page_size=15&metacritic=60,80&ordering=-added&platforms=4,18,1`
  );
  try {
    const response = await fetch(
      `${process.env.API_ROOT}/games?key=${process.env.API_KEY}&page_size=15&metacritic=75,80&ordering=-added&platforms=4,18,1&dates=2010-01-01,2022-12-31`,
      { cache: "force-cache" }
    );

    if (response.ok) {
      return (await response.json()).results as IGameResult[];
    } else {
      return [] as IGameResult[];
    }
  } catch {
    return [] as IGameResult[];
  }
};

export default async function Home() {
  const spotlightData: IGameResult[] = (await getSpotlightData()).filter(
    (game) => game.name !== "Apex Legends"
  );
  return (
    <>
      <PrimeCarousel />
      <Spotlight gamesData={spotlightData} />
      <GenresGrid />
    </>
  );
}
