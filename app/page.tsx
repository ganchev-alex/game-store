import React from "react";

import PrimeCarousel from "@/components/home_page_components/primary_carousel/PrimeCarousel";
import Spotlight from "@/components/home_page_components/spotlight/Spotlight";

import { IGameResult } from "../utility/interfaces/IGameResult";
import GenresGrid from "@/components/home_page_components/genres/GenresGrid";
import FlashSale from "@/components/home_page_components/flash_sales/FlashSale";
import Banner from "@/components/home_page_components/banner/Banner";

const getSpotlightData = async function () {
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

const getFlashSaleData = async function () {
  try {
    const response = await fetch(
      `${process.env.API_ROOT}/games?key=${process.env.API_KEY}&page_size=6&ordering=-metacritic&platforms=4,18,1&dates=2023-01-01,2023-12-31`,
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
  const [spotlightData, flashSaleData] = await Promise.all([
    getSpotlightData(),
    getFlashSaleData(),
  ]);
  // const spotlightData: IGameResult[] = dummyTestingData; // Prevent Request Count Increament: (await getSpotlightData()).filter((game) => game.name !== "Apex Legends");
  return (
    <>
      <PrimeCarousel />
      <Spotlight
        gamesData={spotlightData.filter((game) => game.name !== "Apex Legends")}
      />
      <GenresGrid />
      <FlashSale flashSaleData={flashSaleData} />
      <Banner />
    </>
  );
}

const dummyTestingData = [
  {
    slug: "payday-2",
    name: "PAYDAY 2",
    playtime: 9,
    platforms: [
      {
        platform: {
          id: 4,
          name: "PC",
          slug: "pc",
        },
      },
      {
        platform: {
          id: 1,
          name: "Xbox One",
          slug: "xbox-one",
        },
      },
      {
        platform: {
          id: 6,
          name: "Linux",
          slug: "linux",
        },
      },
    ],
    stores: [
      {
        store: {
          id: 1,
          name: "Steam",
          slug: "steam",
        },
      },
      {
        store: {
          id: 3,
          name: "PlayStation Store",
          slug: "playstation-store",
        },
      },
      {
        store: {
          id: 6,
          name: "Nintendo Store",
          slug: "nintendo",
        },
      },
      {
        store: {
          id: 7,
          name: "Xbox 360 Store",
          slug: "xbox360",
        },
      },
      {
        store: {
          id: 11,
          name: "Epic Games",
          slug: "epic-games",
        },
      },
    ],
    released: "2013-08-13",
    tba: false,
    background_image:
      "https://media.rawg.io/media/games/73e/73eecb8909e0c39fb246f457b5d6cbbe.jpg",
    rating: 3.51,
    rating_top: 4,
    ratings: [
      {
        id: 4,
        title: "recommended",
        count: 1123,
        percent: 51.63,
      },
      {
        id: 3,
        title: "meh",
        count: 598,
        percent: 27.49,
      },
      {
        id: 1,
        title: "skip",
        count: 228,
        percent: 10.48,
      },
      {
        id: 5,
        title: "exceptional",
        count: 226,
        percent: 10.39,
      },
    ],
    ratings_count: 2157,
    reviews_text_count: 14,
    added: 13440,
    added_by_status: {
      yet: 499,
      owned: 10505,
      beaten: 802,
      toplay: 106,
      dropped: 1407,
      playing: 121,
    },
    metacritic: 79,
    suggestions_count: 425,
    updated: "2024-10-02T11:05:26",
    id: 3939,
    score: null,
    clip: null,
    tags: [
      {
        id: 31,
        name: "Singleplayer",
        slug: "singleplayer",
        language: "eng",
        games_count: 228522,
        image_background:
          "https://media.rawg.io/media/games/4be/4be6a6ad0364751a96229c56bf69be59.jpg",
      },
      {
        id: 42396,
        name: "Для одного игрока",
        slug: "dlia-odnogo-igroka",
        language: "rus",
        games_count: 52641,
        image_background:
          "https://media.rawg.io/media/games/942/9424d6bb763dc38d9378b488603c87fa.jpg",
      },
      {
        id: 42417,
        name: "Экшен",
        slug: "ekshen",
        language: "rus",
        games_count: 41787,
        image_background:
          "https://media.rawg.io/media/games/f87/f87457e8347484033cb34cde6101d08d.jpg",
      },
      {
        id: 42392,
        name: "Приключение",
        slug: "prikliuchenie",
        language: "rus",
        games_count: 39846,
        image_background:
          "https://media.rawg.io/media/games/b45/b45575f34285f2c4479c9a5f719d972e.jpg",
      },
      {
        id: 40847,
        name: "Steam Achievements",
        slug: "steam-achievements",
        language: "eng",
        games_count: 40163,
        image_background:
          "https://media.rawg.io/media/games/2ba/2bac0e87cf45e5b508f227d281c9252a.jpg",
      },
      {
        id: 7,
        name: "Multiplayer",
        slug: "multiplayer",
        language: "eng",
        games_count: 38830,
        image_background:
          "https://media.rawg.io/media/games/4a0/4a0a1316102366260e6f38fd2a9cfdce.jpg",
      },
      {
        id: 40836,
        name: "Full controller support",
        slug: "full-controller-support",
        language: "eng",
        games_count: 19081,
        image_background:
          "https://media.rawg.io/media/games/4be/4be6a6ad0364751a96229c56bf69be59.jpg",
      },
      {
        id: 42425,
        name: "Для нескольких игроков",
        slug: "dlia-neskolkikh-igrokov",
        language: "rus",
        games_count: 10383,
        image_background:
          "https://media.rawg.io/media/games/34b/34b1f1850a1c06fd971bc6ab3ac0ce0e.jpg",
      },
      {
        id: 7808,
        name: "steam-trading-cards",
        slug: "steam-trading-cards",
        language: "eng",
        games_count: 7569,
        image_background:
          "https://media.rawg.io/media/games/8cc/8cce7c0e99dcc43d66c8efd42f9d03e3.jpg",
      },
      {
        id: 42401,
        name: "Отличный саундтрек",
        slug: "otlichnyi-saundtrek",
        language: "rus",
        games_count: 4631,
        image_background:
          "https://media.rawg.io/media/games/d82/d82990b9c67ba0d2d09d4e6fa88885a7.jpg",
      },
      {
        id: 42,
        name: "Great Soundtrack",
        slug: "great-soundtrack",
        language: "eng",
        games_count: 3410,
        image_background:
          "https://media.rawg.io/media/games/bc0/bc06a29ceac58652b684deefe7d56099.jpg",
      },
      {
        id: 18,
        name: "Co-op",
        slug: "co-op",
        language: "eng",
        games_count: 12102,
        image_background:
          "https://media.rawg.io/media/games/ec3/ec3a7db7b8ab5a71aad622fe7c62632f.jpg",
      },
      {
        id: 411,
        name: "cooperative",
        slug: "cooperative",
        language: "eng",
        games_count: 5265,
        image_background:
          "https://media.rawg.io/media/games/736/73619bd336c894d6941d926bfd563946.jpg",
      },
      {
        id: 42421,
        name: "Стратегия",
        slug: "strategiia",
        language: "rus",
        games_count: 19855,
        image_background:
          "https://media.rawg.io/media/games/310/3106b0e012271c5ffb16497b070be739.jpg",
      },
      {
        id: 42428,
        name: "Шутер",
        slug: "shuter",
        language: "rus",
        games_count: 9476,
        image_background:
          "https://media.rawg.io/media/games/ec3/ec3a7db7b8ab5a71aad622fe7c62632f.jpg",
      },
      {
        id: 42429,
        name: "От первого лица",
        slug: "ot-pervogo-litsa",
        language: "rus",
        games_count: 11729,
        image_background:
          "https://media.rawg.io/media/games/34b/34b1f1850a1c06fd971bc6ab3ac0ce0e.jpg",
      },
      {
        id: 8,
        name: "First-Person",
        slug: "first-person",
        language: "eng",
        games_count: 32655,
        image_background:
          "https://media.rawg.io/media/games/2ba/2bac0e87cf45e5b508f227d281c9252a.jpg",
      },
      {
        id: 30,
        name: "FPS",
        slug: "fps",
        language: "eng",
        games_count: 13557,
        image_background:
          "https://media.rawg.io/media/games/198/1988a337305e008b41d7f536ce9b73f6.jpg",
      },
      {
        id: 42427,
        name: "Шутер от первого лица",
        slug: "shuter-ot-pervogo-litsa",
        language: "rus",
        games_count: 5540,
        image_background:
          "https://media.rawg.io/media/games/73e/73eecb8909e0c39fb246f457b5d6cbbe.jpg",
      },
      {
        id: 42413,
        name: "Симулятор",
        slug: "simuliator",
        language: "rus",
        games_count: 20366,
        image_background:
          "https://media.rawg.io/media/games/73e/73eecb8909e0c39fb246f457b5d6cbbe.jpg",
      },
      {
        id: 42482,
        name: "Смешная",
        slug: "smeshnaia",
        language: "rus",
        games_count: 9565,
        image_background:
          "https://media.rawg.io/media/games/c89/c89ca70716080733d03724277df2c6c7.jpg",
      },
      {
        id: 9,
        name: "Online Co-Op",
        slug: "online-co-op",
        language: "eng",
        games_count: 5971,
        image_background:
          "https://media.rawg.io/media/games/c6b/c6bfece1daf8d06bc0a60632ac78e5bf.jpg",
      },
      {
        id: 4,
        name: "Funny",
        slug: "funny",
        language: "eng",
        games_count: 25554,
        image_background:
          "https://media.rawg.io/media/games/d69/d69810315bd7e226ea2d21f9156af629.jpg",
      },
      {
        id: 42433,
        name: "Совместная игра по сети",
        slug: "sovmestnaia-igra-po-seti",
        language: "rus",
        games_count: 1226,
        image_background:
          "https://media.rawg.io/media/games/858/858c016de0cf7bc21a57dcc698a04a0c.jpg",
      },
      {
        id: 15,
        name: "Stealth",
        slug: "stealth",
        language: "eng",
        games_count: 6417,
        image_background:
          "https://media.rawg.io/media/games/120/1201a40e4364557b124392ee50317b99.jpg",
      },
      {
        id: 42439,
        name: "Стелс",
        slug: "stels",
        language: "rus",
        games_count: 2277,
        image_background:
          "https://media.rawg.io/media/games/4e6/4e6e8e7f50c237d76f38f3c885dae3d2.jpg",
      },
      {
        id: 42436,
        name: "Тактика",
        slug: "taktika",
        language: "rus",
        games_count: 3988,
        image_background:
          "https://media.rawg.io/media/games/9c4/9c47f320eb73c9a02d462e12f6206b26.jpg",
      },
      {
        id: 80,
        name: "Tactical",
        slug: "tactical",
        language: "eng",
        games_count: 5362,
        image_background:
          "https://media.rawg.io/media/games/0bd/0bd5646a3d8ee0ac3314bced91ea306d.jpg",
      },
      {
        id: 40837,
        name: "In-App Purchases",
        slug: "in-app-purchases",
        language: "eng",
        games_count: 2779,
        image_background:
          "https://media.rawg.io/media/games/651/651ae84f2d5e36206aad90976a453329.jpg",
      },
      {
        id: 11,
        name: "Team-Based",
        slug: "team-based",
        language: "eng",
        games_count: 1683,
        image_background:
          "https://media.rawg.io/media/games/1a1/1a17e9b6286edb7e1f1e510110ccb0c0.jpg",
      },
      {
        id: 42450,
        name: "Командная",
        slug: "komandnaia",
        language: "rus",
        games_count: 1382,
        image_background:
          "https://media.rawg.io/media/games/bff/bff7d82316cddea9541261a045ba008a.jpg",
      },
      {
        id: 144,
        name: "Crime",
        slug: "crime",
        language: "eng",
        games_count: 2912,
        image_background:
          "https://media.rawg.io/media/games/233/233cdc08cce0228f6f35222eca3bff92.jpg",
      },
      {
        id: 42443,
        name: "Криминал",
        slug: "kriminal",
        language: "rus",
        games_count: 1033,
        image_background:
          "https://media.rawg.io/media/games/470/470d21d6971de8f13ec0e1664a120cc0.jpg",
      },
      {
        id: 171,
        name: "PvE",
        slug: "pve",
        language: "eng",
        games_count: 5478,
        image_background:
          "https://media.rawg.io/media/games/f87/f87457e8347484033cb34cde6101d08d.jpg",
      },
      {
        id: 42567,
        name: "Игра против ИИ",
        slug: "igra-protiv-ii",
        language: "rus",
        games_count: 2327,
        image_background:
          "https://media.rawg.io/media/screenshots/5ff/5ff7e855a4d0f4de1bfa515cd0e19071.jpg",
      },
      {
        id: 216,
        name: "Heist",
        slug: "heist",
        language: "eng",
        games_count: 538,
        image_background:
          "https://media.rawg.io/media/games/d2b/d2b33b26e0d61aca35d434c8a69e3711.jpg",
      },
      {
        id: 42447,
        name: "Ограбления",
        slug: "ogrableniia",
        language: "rus",
        games_count: 267,
        image_background:
          "https://media.rawg.io/media/games/2ed/2ed38a102fe66a0ea98a8e09c660a458.jpg",
      },
      {
        id: 42652,
        name: "Кастомизация оружия",
        slug: "kastomizatsiia-oruzhiia",
        language: "rus",
        games_count: 649,
        image_background:
          "https://media.rawg.io/media/screenshots/e0e/e0ec4788a286aef109574c324e97d135.jpg",
      },
      {
        id: 274,
        name: "Gun Customization",
        slug: "gun-customization",
        language: "eng",
        games_count: 633,
        image_background:
          "https://media.rawg.io/media/screenshots/65e/65eaac98b80c4e39cee959ff266a24c2.jpg",
      },
    ],
    esrb_rating: {
      id: 5,
      name: "Adults Only",
      slug: "adults-only",
      name_en: "Adults Only",
      name_ru: "Только для взрослых",
    },
    user_game: null,
    reviews_count: 2175,
    saturated_color: "0f0f0f",
    dominant_color: "0f0f0f",
    short_screenshots: [
      {
        id: -1,
        image:
          "https://media.rawg.io/media/games/73e/73eecb8909e0c39fb246f457b5d6cbbe.jpg",
      },
      {
        id: 74194,
        image:
          "https://media.rawg.io/media/screenshots/c38/c38f5aa479eebab20cedcdae370e6e18.jpg",
      },
      {
        id: 74195,
        image:
          "https://media.rawg.io/media/screenshots/442/442be5656b314e3289ecd1486b5282f1.jpg",
      },
      {
        id: 74196,
        image:
          "https://media.rawg.io/media/screenshots/c2c/c2ccfeaeda357f932d1899a91f298850.jpg",
      },
      {
        id: 74197,
        image:
          "https://media.rawg.io/media/screenshots/a18/a18da938def6ce6e5b571f1c20272ab0.jpg",
      },
      {
        id: 74198,
        image:
          "https://media.rawg.io/media/screenshots/a5d/a5da0d01195f01cdedec974d52892128.jpg",
      },
      {
        id: 74199,
        image:
          "https://media.rawg.io/media/screenshots/4ee/4ee5c3c8b850ab4ba8e04b9f5d5ab060.jpg",
      },
    ],
    parent_platforms: [
      {
        platform: {
          id: 1,
          name: "PC",
          slug: "pc",
        },
      },
      {
        platform: {
          id: 3,
          name: "Xbox",
          slug: "xbox",
        },
      },
      {
        platform: {
          id: 6,
          name: "Linux",
          slug: "linux",
        },
      },
    ],
    genres: [
      {
        id: 2,
        name: "Shooter",
        slug: "shooter",
      },
      {
        id: 4,
        name: "Action",
        slug: "action",
      },
    ],
  },
  {
    slug: "cyberpunk-2077",
    name: "Cyberpunk 2077",
    playtime: 28,
    platforms: [
      {
        platform: {
          id: 4,
          name: "PC",
          slug: "pc",
        },
      },
      {
        platform: {
          id: 187,
          name: "PlayStation 5",
          slug: "playstation5",
        },
      },
      {
        platform: {
          id: 1,
          name: "Xbox One",
          slug: "xbox-one",
        },
      },
      {
        platform: {
          id: 18,
          name: "PlayStation 4",
          slug: "playstation4",
        },
      },
      {
        platform: {
          id: 186,
          name: "Xbox Series S/X",
          slug: "xbox-series-x",
        },
      },
    ],
    stores: [
      {
        store: {
          id: 1,
          name: "Steam",
          slug: "steam",
        },
      },
      {
        store: {
          id: 3,
          name: "PlayStation Store",
          slug: "playstation-store",
        },
      },
      {
        store: {
          id: 2,
          name: "Xbox Store",
          slug: "xbox-store",
        },
      },
      {
        store: {
          id: 5,
          name: "GOG",
          slug: "gog",
        },
      },
      {
        store: {
          id: 11,
          name: "Epic Games",
          slug: "epic-games",
        },
      },
    ],
    released: "2020-12-10",
    tba: false,
    background_image:
      "https://media.rawg.io/media/games/26d/26d4437715bee60138dab4a7c8c59c92.jpg",
    rating: 4.18,
    rating_top: 5,
    ratings: [
      {
        id: 5,
        title: "exceptional",
        count: 1337,
        percent: 48.21,
      },
      {
        id: 4,
        title: "recommended",
        count: 930,
        percent: 33.54,
      },
      {
        id: 3,
        title: "meh",
        count: 345,
        percent: 12.44,
      },
      {
        id: 1,
        title: "skip",
        count: 161,
        percent: 5.81,
      },
    ],
    ratings_count: 2676,
    reviews_text_count: 60,
    added: 12886,
    added_by_status: {
      yet: 835,
      owned: 6539,
      beaten: 2153,
      toplay: 2411,
      dropped: 458,
      playing: 490,
    },
    metacritic: 73,
    suggestions_count: 623,
    updated: "2024-10-02T02:53:28",
    id: 41494,
    score: null,
    clip: null,
    tags: [
      {
        id: 31,
        name: "Singleplayer",
        slug: "singleplayer",
        language: "eng",
        games_count: 228522,
        image_background:
          "https://media.rawg.io/media/games/4be/4be6a6ad0364751a96229c56bf69be59.jpg",
      },
      {
        id: 42396,
        name: "Для одного игрока",
        slug: "dlia-odnogo-igroka",
        language: "rus",
        games_count: 52641,
        image_background:
          "https://media.rawg.io/media/games/942/9424d6bb763dc38d9378b488603c87fa.jpg",
      },
      {
        id: 42417,
        name: "Экшен",
        slug: "ekshen",
        language: "rus",
        games_count: 41787,
        image_background:
          "https://media.rawg.io/media/games/f87/f87457e8347484033cb34cde6101d08d.jpg",
      },
      {
        id: 42392,
        name: "Приключение",
        slug: "prikliuchenie",
        language: "rus",
        games_count: 39846,
        image_background:
          "https://media.rawg.io/media/games/b45/b45575f34285f2c4479c9a5f719d972e.jpg",
      },
      {
        id: 13,
        name: "Atmospheric",
        slug: "atmospheric",
        language: "eng",
        games_count: 34397,
        image_background:
          "https://media.rawg.io/media/games/120/1201a40e4364557b124392ee50317b99.jpg",
      },
      {
        id: 42400,
        name: "Атмосфера",
        slug: "atmosfera",
        language: "rus",
        games_count: 6083,
        image_background:
          "https://media.rawg.io/media/games/618/618c2031a07bbff6b4f611f10b6bcdbc.jpg",
      },
      {
        id: 42401,
        name: "Отличный саундтрек",
        slug: "otlichnyi-saundtrek",
        language: "rus",
        games_count: 4631,
        image_background:
          "https://media.rawg.io/media/games/d82/d82990b9c67ba0d2d09d4e6fa88885a7.jpg",
      },
      {
        id: 42,
        name: "Great Soundtrack",
        slug: "great-soundtrack",
        language: "eng",
        games_count: 3410,
        image_background:
          "https://media.rawg.io/media/games/bc0/bc06a29ceac58652b684deefe7d56099.jpg",
      },
      {
        id: 42394,
        name: "Глубокий сюжет",
        slug: "glubokii-siuzhet",
        language: "rus",
        games_count: 13440,
        image_background:
          "https://media.rawg.io/media/games/b8c/b8c243eaa0fbac8115e0cdccac3f91dc.jpg",
      },
      {
        id: 24,
        name: "RPG",
        slug: "rpg",
        language: "eng",
        games_count: 22061,
        image_background:
          "https://media.rawg.io/media/games/f87/f87457e8347484033cb34cde6101d08d.jpg",
      },
      {
        id: 42412,
        name: "Ролевая игра",
        slug: "rolevaia-igra",
        language: "rus",
        games_count: 18470,
        image_background:
          "https://media.rawg.io/media/games/021/021c4e21a1824d2526f925eff6324653.jpg",
      },
      {
        id: 118,
        name: "Story Rich",
        slug: "story-rich",
        language: "eng",
        games_count: 22579,
        image_background:
          "https://media.rawg.io/media/games/4be/4be6a6ad0364751a96229c56bf69be59.jpg",
      },
      {
        id: 42442,
        name: "Открытый мир",
        slug: "otkrytyi-mir",
        language: "rus",
        games_count: 6004,
        image_background:
          "https://media.rawg.io/media/games/e6d/e6de699bd788497f4b52e2f41f9698f2.jpg",
      },
      {
        id: 36,
        name: "Open World",
        slug: "open-world",
        language: "eng",
        games_count: 7819,
        image_background:
          "https://media.rawg.io/media/games/16b/16b1b7b36e2042d1128d5a3e852b3b2f.jpg",
      },
      {
        id: 42429,
        name: "От первого лица",
        slug: "ot-pervogo-litsa",
        language: "rus",
        games_count: 11729,
        image_background:
          "https://media.rawg.io/media/games/34b/34b1f1850a1c06fd971bc6ab3ac0ce0e.jpg",
      },
      {
        id: 8,
        name: "First-Person",
        slug: "first-person",
        language: "eng",
        games_count: 32655,
        image_background:
          "https://media.rawg.io/media/games/2ba/2bac0e87cf45e5b508f227d281c9252a.jpg",
      },
      {
        id: 42435,
        name: "Шедевр",
        slug: "shedevr",
        language: "rus",
        games_count: 1059,
        image_background:
          "https://media.rawg.io/media/games/310/3106b0e012271c5ffb16497b070be739.jpg",
      },
      {
        id: 32,
        name: "Sci-fi",
        slug: "sci-fi",
        language: "eng",
        games_count: 19693,
        image_background:
          "https://media.rawg.io/media/games/951/951572a3dd1e42544bd39a5d5b42d234.jpg",
      },
      {
        id: 42423,
        name: "Научная фантастика",
        slug: "nauchnaia-fantastika",
        language: "rus",
        games_count: 8594,
        image_background:
          "https://media.rawg.io/media/games/490/49016e06ae2103881ff6373248843069.jpg",
      },
      {
        id: 30,
        name: "FPS",
        slug: "fps",
        language: "eng",
        games_count: 13557,
        image_background:
          "https://media.rawg.io/media/games/198/1988a337305e008b41d7f536ce9b73f6.jpg",
      },
      {
        id: 42427,
        name: "Шутер от первого лица",
        slug: "shuter-ot-pervogo-litsa",
        language: "rus",
        games_count: 5540,
        image_background:
          "https://media.rawg.io/media/games/73e/73eecb8909e0c39fb246f457b5d6cbbe.jpg",
      },
      {
        id: 6,
        name: "Exploration",
        slug: "exploration",
        language: "eng",
        games_count: 24128,
        image_background:
          "https://media.rawg.io/media/games/b54/b54598d1d5cc31899f4f0a7e3122a7b0.jpg",
      },
      {
        id: 37,
        name: "Sandbox",
        slug: "sandbox",
        language: "eng",
        games_count: 7195,
        image_background:
          "https://media.rawg.io/media/games/960/960b601d9541cec776c5fa42a00bf6c4.jpg",
      },
      {
        id: 42402,
        name: "Насилие",
        slug: "nasilie",
        language: "rus",
        games_count: 5842,
        image_background:
          "https://media.rawg.io/media/games/1f1/1f1888e1308959dfd3be4c144a81d19c.jpg",
      },
      {
        id: 34,
        name: "Violent",
        slug: "violent",
        language: "eng",
        games_count: 6881,
        image_background:
          "https://media.rawg.io/media/games/744/744adc36e6573dd67a0cb0e373738d19.jpg",
      },
      {
        id: 97,
        name: "Action RPG",
        slug: "action-rpg",
        language: "eng",
        games_count: 7270,
        image_background:
          "https://media.rawg.io/media/games/364/3642d850efb217c58feab80b8affaa89.jpg",
      },
      {
        id: 42489,
        name: "Ролевой экшен",
        slug: "rolevoi-ekshen",
        language: "rus",
        games_count: 4258,
        image_background:
          "https://media.rawg.io/media/games/d1f/d1f872a48286b6b751670817d5c1e1be.jpg",
      },
      {
        id: 69,
        name: "Action-Adventure",
        slug: "action-adventure",
        language: "eng",
        games_count: 17316,
        image_background:
          "https://media.rawg.io/media/games/c89/c89ca70716080733d03724277df2c6c7.jpg",
      },
      {
        id: 42406,
        name: "Нагота",
        slug: "nagota",
        language: "rus",
        games_count: 6507,
        image_background:
          "https://media.rawg.io/media/games/2ad/2ad87a4a69b1104f02435c14c5196095.jpg",
      },
      {
        id: 468,
        name: "role-playing",
        slug: "role-playing",
        language: "eng",
        games_count: 1602,
        image_background:
          "https://media.rawg.io/media/games/424/424facd40f4eb1f2794fe4b4bb28a277.jpg",
      },
      {
        id: 44,
        name: "Nudity",
        slug: "nudity",
        language: "eng",
        games_count: 6898,
        image_background:
          "https://media.rawg.io/media/games/a0e/a0ef08621301a1eab5e04fa5c96978fa.jpeg",
      },
      {
        id: 42529,
        name: "Для взрослых",
        slug: "dlia-vzroslykh",
        language: "rus",
        games_count: 3239,
        image_background:
          "https://media.rawg.io/media/games/0be/0bea0a08a4d954337305391b778a7f37.jpg",
      },
      {
        id: 192,
        name: "Mature",
        slug: "mature",
        language: "eng",
        games_count: 3431,
        image_background:
          "https://media.rawg.io/media/games/4fb/4fb548e4816c84d1d70f1a228fb167cc.jpg",
      },
      {
        id: 42405,
        name: "Сексуальный контент",
        slug: "seksualnyi-kontent",
        language: "rus",
        games_count: 6618,
        image_background:
          "https://media.rawg.io/media/games/6cc/6cc23249972a427f697a3d10eb57a820.jpg",
      },
      {
        id: 110,
        name: "Cinematic",
        slug: "cinematic",
        language: "eng",
        games_count: 2370,
        image_background:
          "https://media.rawg.io/media/games/5c0/5c0dd63002cb23f804aab327d40ef119.jpg",
      },
      {
        id: 167,
        name: "Futuristic",
        slug: "futuristic",
        language: "eng",
        games_count: 5665,
        image_background:
          "https://media.rawg.io/media/games/ac2/ac25b5cef220bf5b8d052e0978451cab.jpg",
      },
      {
        id: 42451,
        name: "Будущее",
        slug: "budushchee",
        language: "rus",
        games_count: 3801,
        image_background:
          "https://media.rawg.io/media/games/f87/f87457e8347484033cb34cde6101d08d.jpg",
      },
      {
        id: 42470,
        name: "Киберпанк",
        slug: "kiberpank",
        language: "rus",
        games_count: 1949,
        image_background:
          "https://media.rawg.io/media/games/d37/d37e110ddcc0bd52d99f0f647b737a0a.jpg",
      },
      {
        id: 226,
        name: "Cyberpunk",
        slug: "cyberpunk",
        language: "eng",
        games_count: 4666,
        image_background:
          "https://media.rawg.io/media/games/5e4/5e4bff02098b2b6f824c68286d5da1a6.jpg",
      },
      {
        id: 50,
        name: "Sexual Content",
        slug: "sexual-content",
        language: "eng",
        games_count: 6647,
        image_background:
          "https://media.rawg.io/media/games/473/473bd9a5e9522629d6cb28b701fb836a.jpg",
      },
      {
        id: 144,
        name: "Crime",
        slug: "crime",
        language: "eng",
        games_count: 2912,
        image_background:
          "https://media.rawg.io/media/games/233/233cdc08cce0228f6f35222eca3bff92.jpg",
      },
      {
        id: 197,
        name: "Robots",
        slug: "robots",
        language: "eng",
        games_count: 8350,
        image_background:
          "https://media.rawg.io/media/games/acc/acc3de7aaa850ad998d49b15f8901e23.jpg",
      },
      {
        id: 478,
        name: "3rd-Person Perspective",
        slug: "3rd-person-perspective",
        language: "eng",
        games_count: 87,
        image_background:
          "https://media.rawg.io/media/games/21c/21cc15d233117c6809ec86870559e105.jpg",
      },
      {
        id: 270,
        name: "Blood",
        slug: "blood",
        language: "eng",
        games_count: 2078,
        image_background:
          "https://media.rawg.io/media/games/ae1/ae1518c3dc1e847344661905fd2a8d16.jpg",
      },
      {
        id: 42408,
        name: "Симулятор свиданий",
        slug: "simuliator-svidanii",
        language: "rus",
        games_count: 3124,
        image_background:
          "https://media.rawg.io/media/screenshots/5d9/5d9d6da555c357edde9cfa2db622083f.jpg",
      },
      {
        id: 78,
        name: "America",
        slug: "america",
        language: "eng",
        games_count: 727,
        image_background:
          "https://media.rawg.io/media/screenshots/b79/b797325a14fc62444ca6032d59aa1c75.jpg",
      },
      {
        id: 578,
        name: "Masterpiece",
        slug: "masterpiece",
        language: "eng",
        games_count: 300,
        image_background:
          "https://media.rawg.io/media/games/9b5/9b5b8cf04ca150ec83867b388f29b999.jpg",
      },
      {
        id: 295,
        name: "Soundtrack",
        slug: "soundtrack",
        language: "eng",
        games_count: 3091,
        image_background:
          "https://media.rawg.io/media/games/562/562553814dd54e001a541e4ee83a591c.jpg",
      },
      {
        id: 227,
        name: "Hacking",
        slug: "hacking",
        language: "eng",
        games_count: 1064,
        image_background:
          "https://media.rawg.io/media/games/eb2/eb24800b4491701eca481e7c990bce4a.jpg",
      },
      {
        id: 467,
        name: "Role Playing Game",
        slug: "role-playing-game",
        language: "eng",
        games_count: 19,
        image_background:
          "https://media.rawg.io/media/games/8ea/8ea1e2850d7568bc9733d546c0ac6ce1.jpg",
      },
      {
        id: 1500,
        name: "immersive",
        slug: "immersive",
        language: "eng",
        games_count: 962,
        image_background:
          "https://media.rawg.io/media/games/26d/26d4437715bee60138dab4a7c8c59c92.jpg",
      },
      {
        id: 683,
        name: "Photorealistic",
        slug: "photorealistic",
        language: "eng",
        games_count: 454,
        image_background:
          "https://media.rawg.io/media/screenshots/907/907d69cf2727bf0a3f89d8184a48c8af.jpg",
      },
    ],
    esrb_rating: {
      id: 4,
      name: "Mature",
      slug: "mature",
      name_en: "Mature",
      name_ru: "С 17 лет",
    },
    user_game: null,
    reviews_count: 2773,
    saturated_color: "0f0f0f",
    dominant_color: "0f0f0f",
    short_screenshots: [
      {
        id: -1,
        image:
          "https://media.rawg.io/media/games/26d/26d4437715bee60138dab4a7c8c59c92.jpg",
      },
      {
        id: 779381,
        image:
          "https://media.rawg.io/media/screenshots/814/814c25d6fd1fd34a4e6dade645a3bda7.jpg",
      },
      {
        id: 779383,
        image:
          "https://media.rawg.io/media/screenshots/2ab/2ab0b67e68b6ede6b19d80094b6f7f2a_qTSfS2g.jpg",
      },
      {
        id: 779384,
        image:
          "https://media.rawg.io/media/screenshots/cd2/cd22af9d6ac593440defac6082760e4a.jpg",
      },
      {
        id: 779385,
        image:
          "https://media.rawg.io/media/screenshots/9b5/9b51535beb9d9e416cb9aac874091334.jpg",
      },
      {
        id: 779386,
        image:
          "https://media.rawg.io/media/screenshots/d84/d84d3a16c1e2cb24dcf73e0108d78455.jpg",
      },
      {
        id: 779387,
        image:
          "https://media.rawg.io/media/screenshots/a55/a5583c11e4fd11a9eb5d52e8ddd41ac3.jpg",
      },
    ],
    parent_platforms: [
      {
        platform: {
          id: 1,
          name: "PC",
          slug: "pc",
        },
      },
      {
        platform: {
          id: 2,
          name: "PlayStation",
          slug: "playstation",
        },
      },
      {
        platform: {
          id: 3,
          name: "Xbox",
          slug: "xbox",
        },
      },
    ],
    genres: [
      {
        id: 2,
        name: "Shooter",
        slug: "shooter",
      },
      {
        id: 4,
        name: "Action",
        slug: "action",
      },
      {
        id: 5,
        name: "RPG",
        slug: "role-playing-games-rpg",
      },
    ],
  },
  {
    slug: "warframe",
    name: "Warframe",
    playtime: 8,
    platforms: [
      {
        platform: {
          id: 4,
          name: "PC",
          slug: "pc",
        },
      },
      {
        platform: {
          id: 187,
          name: "PlayStation 5",
          slug: "playstation5",
        },
      },
      {
        platform: {
          id: 1,
          name: "Xbox One",
          slug: "xbox-one",
        },
      },
      {
        platform: {
          id: 18,
          name: "PlayStation 4",
          slug: "playstation4",
        },
      },
      {
        platform: {
          id: 186,
          name: "Xbox Series S/X",
          slug: "xbox-series-x",
        },
      },
      {
        platform: {
          id: 7,
          name: "Nintendo Switch",
          slug: "nintendo-switch",
        },
      },
      {
        platform: {
          id: 3,
          name: "iOS",
          slug: "ios",
        },
      },
    ],
    stores: [
      {
        store: {
          id: 1,
          name: "Steam",
          slug: "steam",
        },
      },
      {
        store: {
          id: 3,
          name: "PlayStation Store",
          slug: "playstation-store",
        },
      },
      {
        store: {
          id: 2,
          name: "Xbox Store",
          slug: "xbox-store",
        },
      },
      {
        store: {
          id: 4,
          name: "App Store",
          slug: "apple-appstore",
        },
      },
      {
        store: {
          id: 6,
          name: "Nintendo Store",
          slug: "nintendo",
        },
      },
      {
        store: {
          id: 11,
          name: "Epic Games",
          slug: "epic-games",
        },
      },
    ],
    released: "2013-03-25",
    tba: false,
    background_image:
      "https://media.rawg.io/media/games/f87/f87457e8347484033cb34cde6101d08d.jpg",
    rating: 3.42,
    rating_top: 4,
    ratings: [
      {
        id: 4,
        title: "recommended",
        count: 852,
        percent: 41.3,
      },
      {
        id: 3,
        title: "meh",
        count: 654,
        percent: 31.7,
      },
      {
        id: 5,
        title: "exceptional",
        count: 283,
        percent: 13.72,
      },
      {
        id: 1,
        title: "skip",
        count: 274,
        percent: 13.28,
      },
    ],
    ratings_count: 2050,
    reviews_text_count: 10,
    added: 12487,
    added_by_status: {
      yet: 296,
      owned: 10029,
      beaten: 260,
      toplay: 72,
      dropped: 1565,
      playing: 265,
    },
    metacritic: 73,
    suggestions_count: 730,
    updated: "2024-09-24T22:28:38",
    id: 766,
    score: null,
    clip: null,
    tags: [
      {
        id: 31,
        name: "Singleplayer",
        slug: "singleplayer",
        language: "eng",
        games_count: 228522,
        image_background:
          "https://media.rawg.io/media/games/4be/4be6a6ad0364751a96229c56bf69be59.jpg",
      },
      {
        id: 42396,
        name: "Для одного игрока",
        slug: "dlia-odnogo-igroka",
        language: "rus",
        games_count: 52641,
        image_background:
          "https://media.rawg.io/media/games/942/9424d6bb763dc38d9378b488603c87fa.jpg",
      },
      {
        id: 42417,
        name: "Экшен",
        slug: "ekshen",
        language: "rus",
        games_count: 41787,
        image_background:
          "https://media.rawg.io/media/games/f87/f87457e8347484033cb34cde6101d08d.jpg",
      },
      {
        id: 7,
        name: "Multiplayer",
        slug: "multiplayer",
        language: "eng",
        games_count: 38830,
        image_background:
          "https://media.rawg.io/media/games/4a0/4a0a1316102366260e6f38fd2a9cfdce.jpg",
      },
      {
        id: 42425,
        name: "Для нескольких игроков",
        slug: "dlia-neskolkikh-igrokov",
        language: "rus",
        games_count: 10383,
        image_background:
          "https://media.rawg.io/media/games/34b/34b1f1850a1c06fd971bc6ab3ac0ce0e.jpg",
      },
      {
        id: 7808,
        name: "steam-trading-cards",
        slug: "steam-trading-cards",
        language: "eng",
        games_count: 7569,
        image_background:
          "https://media.rawg.io/media/games/8cc/8cce7c0e99dcc43d66c8efd42f9d03e3.jpg",
      },
      {
        id: 24,
        name: "RPG",
        slug: "rpg",
        language: "eng",
        games_count: 22061,
        image_background:
          "https://media.rawg.io/media/games/f87/f87457e8347484033cb34cde6101d08d.jpg",
      },
      {
        id: 18,
        name: "Co-op",
        slug: "co-op",
        language: "eng",
        games_count: 12102,
        image_background:
          "https://media.rawg.io/media/games/ec3/ec3a7db7b8ab5a71aad622fe7c62632f.jpg",
      },
      {
        id: 42412,
        name: "Ролевая игра",
        slug: "rolevaia-igra",
        language: "rus",
        games_count: 18470,
        image_background:
          "https://media.rawg.io/media/games/021/021c4e21a1824d2526f925eff6324653.jpg",
      },
      {
        id: 411,
        name: "cooperative",
        slug: "cooperative",
        language: "eng",
        games_count: 5265,
        image_background:
          "https://media.rawg.io/media/games/736/73619bd336c894d6941d926bfd563946.jpg",
      },
      {
        id: 42428,
        name: "Шутер",
        slug: "shuter",
        language: "rus",
        games_count: 9476,
        image_background:
          "https://media.rawg.io/media/games/ec3/ec3a7db7b8ab5a71aad622fe7c62632f.jpg",
      },
      {
        id: 42441,
        name: "От третьего лица",
        slug: "ot-tretego-litsa",
        language: "rus",
        games_count: 7620,
        image_background:
          "https://media.rawg.io/media/games/021/021c4e21a1824d2526f925eff6324653.jpg",
      },
      {
        id: 149,
        name: "Third Person",
        slug: "third-person",
        language: "eng",
        games_count: 12099,
        image_background:
          "https://media.rawg.io/media/games/618/618c2031a07bbff6b4f611f10b6bcdbc.jpg",
      },
      {
        id: 32,
        name: "Sci-fi",
        slug: "sci-fi",
        language: "eng",
        games_count: 19693,
        image_background:
          "https://media.rawg.io/media/games/951/951572a3dd1e42544bd39a5d5b42d234.jpg",
      },
      {
        id: 42423,
        name: "Научная фантастика",
        slug: "nauchnaia-fantastika",
        language: "rus",
        games_count: 8594,
        image_background:
          "https://media.rawg.io/media/games/490/49016e06ae2103881ff6373248843069.jpg",
      },
      {
        id: 40845,
        name: "Partial Controller Support",
        slug: "partial-controller-support",
        language: "eng",
        games_count: 12124,
        image_background:
          "https://media.rawg.io/media/games/d46/d46373f39458670305704ef089387520.jpg",
      },
      {
        id: 30,
        name: "FPS",
        slug: "fps",
        language: "eng",
        games_count: 13557,
        image_background:
          "https://media.rawg.io/media/games/198/1988a337305e008b41d7f536ce9b73f6.jpg",
      },
      {
        id: 42427,
        name: "Шутер от первого лица",
        slug: "shuter-ot-pervogo-litsa",
        language: "rus",
        games_count: 5540,
        image_background:
          "https://media.rawg.io/media/games/73e/73eecb8909e0c39fb246f457b5d6cbbe.jpg",
      },
      {
        id: 9,
        name: "Online Co-Op",
        slug: "online-co-op",
        language: "eng",
        games_count: 5971,
        image_background:
          "https://media.rawg.io/media/games/c6b/c6bfece1daf8d06bc0a60632ac78e5bf.jpg",
      },
      {
        id: 42433,
        name: "Совместная игра по сети",
        slug: "sovmestnaia-igra-po-seti",
        language: "rus",
        games_count: 1226,
        image_background:
          "https://media.rawg.io/media/games/858/858c016de0cf7bc21a57dcc698a04a0c.jpg",
      },
      {
        id: 79,
        name: "Free to Play",
        slug: "free-to-play",
        language: "eng",
        games_count: 7460,
        image_background:
          "https://media.rawg.io/media/games/2fd/2fd1b58116b10cc1f4442bee5593ca7c.jpg",
      },
      {
        id: 42538,
        name: "Бесплатная игра",
        slug: "besplatnaia-igra",
        language: "rus",
        games_count: 7447,
        image_background:
          "https://media.rawg.io/media/games/d0f/d0f91fe1d92332147e5db74e207cfc7a.jpg",
      },
      {
        id: 42446,
        name: "Шутер от третьего лица",
        slug: "shuter-ot-tretego-litsa",
        language: "rus",
        games_count: 2173,
        image_background:
          "https://media.rawg.io/media/games/1bd/1bd2657b81eb0c99338120ad444b24ff.jpg",
      },
      {
        id: 150,
        name: "Third-Person Shooter",
        slug: "third-person-shooter",
        language: "eng",
        games_count: 3562,
        image_background:
          "https://media.rawg.io/media/games/f87/f87457e8347484033cb34cde6101d08d.jpg",
      },
      {
        id: 25,
        name: "Space",
        slug: "space",
        language: "eng",
        games_count: 43106,
        image_background:
          "https://media.rawg.io/media/games/174/1743b3dd185bda4a7be349347d4064df.jpg",
      },
      {
        id: 468,
        name: "role-playing",
        slug: "role-playing",
        language: "eng",
        games_count: 1602,
        image_background:
          "https://media.rawg.io/media/games/424/424facd40f4eb1f2794fe4b4bb28a277.jpg",
      },
      {
        id: 42487,
        name: "Слэшер",
        slug: "slesher",
        language: "rus",
        games_count: 2934,
        image_background:
          "https://media.rawg.io/media/games/f90/f90ee1a4239247a822771c40488e68c5.jpg",
      },
      {
        id: 42422,
        name: "Космос",
        slug: "kosmos-2",
        language: "rus",
        games_count: 4450,
        image_background:
          "https://media.rawg.io/media/games/f87/f87457e8347484033cb34cde6101d08d.jpg",
      },
      {
        id: 68,
        name: "Hack and Slash",
        slug: "hack-and-slash",
        language: "eng",
        games_count: 4424,
        image_background:
          "https://media.rawg.io/media/games/559/559bc0768f656ad0c63c54b80a82d680.jpg",
      },
      {
        id: 42453,
        name: "ММО",
        slug: "mmo-2",
        language: "rus",
        games_count: 2542,
        image_background:
          "https://media.rawg.io/media/games/34b/34b1f1850a1c06fd971bc6ab3ac0ce0e.jpg",
      },
      {
        id: 40837,
        name: "In-App Purchases",
        slug: "in-app-purchases",
        language: "eng",
        games_count: 2779,
        image_background:
          "https://media.rawg.io/media/games/651/651ae84f2d5e36206aad90976a453329.jpg",
      },
      {
        id: 167,
        name: "Futuristic",
        slug: "futuristic",
        language: "eng",
        games_count: 5665,
        image_background:
          "https://media.rawg.io/media/games/ac2/ac25b5cef220bf5b8d052e0978451cab.jpg",
      },
      {
        id: 42643,
        name: "Паркур",
        slug: "parkur-2",
        language: "rus",
        games_count: 1307,
        image_background:
          "https://media.rawg.io/media/games/5bb/5bb55ccb8205aadbb6a144cf6d8963f1.jpg",
      },
      {
        id: 42451,
        name: "Будущее",
        slug: "budushchee",
        language: "rus",
        games_count: 3801,
        image_background:
          "https://media.rawg.io/media/games/f87/f87457e8347484033cb34cde6101d08d.jpg",
      },
      {
        id: 188,
        name: "Parkour",
        slug: "parkour",
        language: "eng",
        games_count: 3628,
        image_background:
          "https://media.rawg.io/media/games/37a/37a9536e92cf8fe3b60045aa75dbd41f.jpg",
      },
      {
        id: 42470,
        name: "Киберпанк",
        slug: "kiberpank",
        language: "rus",
        games_count: 1949,
        image_background:
          "https://media.rawg.io/media/games/d37/d37e110ddcc0bd52d99f0f647b737a0a.jpg",
      },
      {
        id: 226,
        name: "Cyberpunk",
        slug: "cyberpunk",
        language: "eng",
        games_count: 4666,
        image_background:
          "https://media.rawg.io/media/games/5e4/5e4bff02098b2b6f824c68286d5da1a6.jpg",
      },
      {
        id: 171,
        name: "PvE",
        slug: "pve",
        language: "eng",
        games_count: 5478,
        image_background:
          "https://media.rawg.io/media/games/f87/f87457e8347484033cb34cde6101d08d.jpg",
      },
      {
        id: 42567,
        name: "Игра против ИИ",
        slug: "igra-protiv-ii",
        language: "rus",
        games_count: 2327,
        image_background:
          "https://media.rawg.io/media/screenshots/5ff/5ff7e855a4d0f4de1bfa515cd0e19071.jpg",
      },
      {
        id: 42584,
        name: "Ниндзя",
        slug: "nindzia",
        language: "rus",
        games_count: 528,
        image_background:
          "https://media.rawg.io/media/games/9eb/9ebae11c9f394b12c24901c9afb867ce.jpg",
      },
      {
        id: 186,
        name: "Ninja",
        slug: "ninja",
        language: "eng",
        games_count: 2380,
        image_background:
          "https://media.rawg.io/media/screenshots/f7e/f7e70957c14ead1fa187a616dfa83e09.jpg",
      },
      {
        id: 38844,
        name: "looter shooter",
        slug: "looter-shooter",
        language: "eng",
        games_count: 585,
        image_background:
          "https://media.rawg.io/media/screenshots/108/108628a1f93b1bceeaf3a2cb0146f103.jpg",
      },
    ],
    esrb_rating: null,
    user_game: null,
    reviews_count: 2063,
    saturated_color: "0f0f0f",
    dominant_color: "0f0f0f",
    short_screenshots: [
      {
        id: -1,
        image:
          "https://media.rawg.io/media/games/f87/f87457e8347484033cb34cde6101d08d.jpg",
      },
      {
        id: 6718,
        image:
          "https://media.rawg.io/media/screenshots/2e1/2e15c9f4cca692ebca67b7652e559f6d.jpg",
      },
      {
        id: 6730,
        image:
          "https://media.rawg.io/media/screenshots/70d/70de629465e39f8108aa533df9cff554.jpg",
      },
      {
        id: 6734,
        image:
          "https://media.rawg.io/media/screenshots/b3a/b3a368123558e7f4010e8b68518d6412.jpg",
      },
      {
        id: 6736,
        image:
          "https://media.rawg.io/media/screenshots/fd2/fd2225327c9dca60c9acea0edca8c5fc.jpg",
      },
      {
        id: 6740,
        image:
          "https://media.rawg.io/media/screenshots/34e/34e3c0d71551f07c3bb709fe12f18ca2.jpg",
      },
      {
        id: 6743,
        image:
          "https://media.rawg.io/media/screenshots/977/977735a2fad2bc47917424e20e9dff56.jpg",
      },
    ],
    parent_platforms: [
      {
        platform: {
          id: 1,
          name: "PC",
          slug: "pc",
        },
      },
      {
        platform: {
          id: 2,
          name: "PlayStation",
          slug: "playstation",
        },
      },
      {
        platform: {
          id: 3,
          name: "Xbox",
          slug: "xbox",
        },
      },
      {
        platform: {
          id: 4,
          name: "iOS",
          slug: "ios",
        },
      },
      {
        platform: {
          id: 7,
          name: "Nintendo",
          slug: "nintendo",
        },
      },
    ],
    genres: [
      {
        id: 2,
        name: "Shooter",
        slug: "shooter",
      },
      {
        id: 59,
        name: "Massively Multiplayer",
        slug: "massively-multiplayer",
      },
      {
        id: 4,
        name: "Action",
        slug: "action",
      },
      {
        id: 5,
        name: "RPG",
        slug: "role-playing-games-rpg",
      },
    ],
  },
  {
    slug: "metro-2033",
    name: "Metro 2033",
    playtime: 2,
    platforms: [
      {
        platform: {
          id: 4,
          name: "PC",
          slug: "pc",
        },
      },
      {
        platform: {
          id: 14,
          name: "Xbox 360",
          slug: "xbox360",
        },
      },
    ],
    stores: [
      {
        store: {
          id: 1,
          name: "Steam",
          slug: "steam",
        },
      },
      {
        store: {
          id: 7,
          name: "Xbox 360 Store",
          slug: "xbox360",
        },
      },
    ],
    released: "2010-03-16",
    tba: false,
    background_image:
      "https://media.rawg.io/media/games/120/1201a40e4364557b124392ee50317b99.jpg",
    rating: 3.94,
    rating_top: 4,
    ratings: [
      {
        id: 4,
        title: "recommended",
        count: 1146,
        percent: 52.07,
      },
      {
        id: 5,
        title: "exceptional",
        count: 602,
        percent: 27.35,
      },
      {
        id: 3,
        title: "meh",
        count: 311,
        percent: 14.13,
      },
      {
        id: 1,
        title: "skip",
        count: 142,
        percent: 6.45,
      },
    ],
    ratings_count: 2194,
    reviews_text_count: 3,
    added: 12163,
    added_by_status: {
      yet: 615,
      owned: 8997,
      beaten: 1889,
      toplay: 172,
      dropped: 451,
      playing: 39,
    },
    metacritic: 79,
    suggestions_count: 577,
    updated: "2024-10-02T11:19:36",
    id: 29028,
    score: null,
    clip: null,
    tags: [
      {
        id: 31,
        name: "Singleplayer",
        slug: "singleplayer",
        language: "eng",
        games_count: 228522,
        image_background:
          "https://media.rawg.io/media/games/4be/4be6a6ad0364751a96229c56bf69be59.jpg",
      },
      {
        id: 40847,
        name: "Steam Achievements",
        slug: "steam-achievements",
        language: "eng",
        games_count: 40163,
        image_background:
          "https://media.rawg.io/media/games/2ba/2bac0e87cf45e5b508f227d281c9252a.jpg",
      },
      {
        id: 40836,
        name: "Full controller support",
        slug: "full-controller-support",
        language: "eng",
        games_count: 19081,
        image_background:
          "https://media.rawg.io/media/games/4be/4be6a6ad0364751a96229c56bf69be59.jpg",
      },
      {
        id: 40849,
        name: "Steam Cloud",
        slug: "steam-cloud",
        language: "eng",
        games_count: 19108,
        image_background:
          "https://media.rawg.io/media/games/198/1988a337305e008b41d7f536ce9b73f6.jpg",
      },
      {
        id: 13,
        name: "Atmospheric",
        slug: "atmospheric",
        language: "eng",
        games_count: 34397,
        image_background:
          "https://media.rawg.io/media/games/120/1201a40e4364557b124392ee50317b99.jpg",
      },
      {
        id: 42,
        name: "Great Soundtrack",
        slug: "great-soundtrack",
        language: "eng",
        games_count: 3410,
        image_background:
          "https://media.rawg.io/media/games/bc0/bc06a29ceac58652b684deefe7d56099.jpg",
      },
      {
        id: 118,
        name: "Story Rich",
        slug: "story-rich",
        language: "eng",
        games_count: 22579,
        image_background:
          "https://media.rawg.io/media/games/4be/4be6a6ad0364751a96229c56bf69be59.jpg",
      },
      {
        id: 8,
        name: "First-Person",
        slug: "first-person",
        language: "eng",
        games_count: 32655,
        image_background:
          "https://media.rawg.io/media/games/2ba/2bac0e87cf45e5b508f227d281c9252a.jpg",
      },
      {
        id: 32,
        name: "Sci-fi",
        slug: "sci-fi",
        language: "eng",
        games_count: 19693,
        image_background:
          "https://media.rawg.io/media/games/951/951572a3dd1e42544bd39a5d5b42d234.jpg",
      },
      {
        id: 16,
        name: "Horror",
        slug: "horror",
        language: "eng",
        games_count: 45168,
        image_background:
          "https://media.rawg.io/media/games/e6d/e6de699bd788497f4b52e2f41f9698f2.jpg",
      },
      {
        id: 30,
        name: "FPS",
        slug: "fps",
        language: "eng",
        games_count: 13557,
        image_background:
          "https://media.rawg.io/media/games/198/1988a337305e008b41d7f536ce9b73f6.jpg",
      },
      {
        id: 1,
        name: "Survival",
        slug: "survival",
        language: "eng",
        games_count: 9097,
        image_background:
          "https://media.rawg.io/media/games/b54/b54598d1d5cc31899f4f0a7e3122a7b0.jpg",
      },
      {
        id: 15,
        name: "Stealth",
        slug: "stealth",
        language: "eng",
        games_count: 6417,
        image_background:
          "https://media.rawg.io/media/games/120/1201a40e4364557b124392ee50317b99.jpg",
      },
      {
        id: 41,
        name: "Dark",
        slug: "dark",
        language: "eng",
        games_count: 16250,
        image_background:
          "https://media.rawg.io/media/games/5bf/5bf88a28de96321c86561a65ee48e6c2.jpg",
      },
      {
        id: 17,
        name: "Survival Horror",
        slug: "survival-horror",
        language: "eng",
        games_count: 8685,
        image_background:
          "https://media.rawg.io/media/games/152/152e788b7504aa2753c86dae912fb34c.jpg",
      },
      {
        id: 43,
        name: "Post-apocalyptic",
        slug: "post-apocalyptic",
        language: "eng",
        games_count: 4144,
        image_background:
          "https://media.rawg.io/media/games/b7d/b7d3f1715fa8381a4e780173a197a615.jpg",
      },
      {
        id: 133,
        name: "3D Vision",
        slug: "3d-vision",
        language: "eng",
        games_count: 882,
        image_background:
          "https://media.rawg.io/media/games/ae1/ae1518c3dc1e847344661905fd2a8d16.jpg",
      },
      {
        id: 305,
        name: "Linear",
        slug: "linear",
        language: "eng",
        games_count: 6734,
        image_background:
          "https://media.rawg.io/media/games/e9c/e9c042d14515eb3ff7cb4db9fe78e435.jpg",
      },
      {
        id: 283,
        name: "Based On A Novel",
        slug: "based-on-a-novel",
        language: "eng",
        games_count: 51,
        image_background:
          "https://media.rawg.io/media/screenshots/f47/f4730de27325b072a52ce102b296f590.jpg",
      },
      {
        id: 296,
        name: "Benchmark",
        slug: "benchmark",
        language: "eng",
        games_count: 31,
        image_background:
          "https://media.rawg.io/media/screenshots/72c/72c82e9730089407f103c840a4f549fa.jpg",
      },
    ],
    esrb_rating: {
      id: 4,
      name: "Mature",
      slug: "mature",
      name_en: "Mature",
      name_ru: "С 17 лет",
    },
    user_game: null,
    reviews_count: 2201,
    saturated_color: "0f0f0f",
    dominant_color: "0f0f0f",
    short_screenshots: [
      {
        id: -1,
        image:
          "https://media.rawg.io/media/games/120/1201a40e4364557b124392ee50317b99.jpg",
      },
      {
        id: 462425,
        image:
          "https://media.rawg.io/media/screenshots/e79/e7946cab379370fdef03c2e2c9dfcce3.jpg",
      },
      {
        id: 462426,
        image:
          "https://media.rawg.io/media/screenshots/ad4/ad433938bd2377b1beaa8a184bb67405.jpg",
      },
      {
        id: 462427,
        image:
          "https://media.rawg.io/media/screenshots/28e/28e63b7f13e9ec24ad64ef5ae75e258c.jpg",
      },
      {
        id: 462428,
        image:
          "https://media.rawg.io/media/screenshots/b99/b99a0bf0f09991d76ad13c65f7e64562.jpg",
      },
      {
        id: 462429,
        image:
          "https://media.rawg.io/media/screenshots/df1/df1aa556c727ad4f4753dbb9e43875c0.jpg",
      },
      {
        id: 462430,
        image:
          "https://media.rawg.io/media/screenshots/94b/94bcd09e75c34712fa85ea6b4945a57c.jpg",
      },
    ],
    parent_platforms: [
      {
        platform: {
          id: 1,
          name: "PC",
          slug: "pc",
        },
      },
      {
        platform: {
          id: 3,
          name: "Xbox",
          slug: "xbox",
        },
      },
    ],
    genres: [
      {
        id: 2,
        name: "Shooter",
        slug: "shooter",
      },
      {
        id: 4,
        name: "Action",
        slug: "action",
      },
    ],
  },
  {
    slug: "apex-legends",
    name: "Apex Legends",
    playtime: 5,
    platforms: [
      {
        platform: {
          id: 4,
          name: "PC",
          slug: "pc",
        },
      },
      {
        platform: {
          id: 1,
          name: "Xbox One",
          slug: "xbox-one",
        },
      },
      {
        platform: {
          id: 18,
          name: "PlayStation 4",
          slug: "playstation4",
        },
      },
      {
        platform: {
          id: 7,
          name: "Nintendo Switch",
          slug: "nintendo-switch",
        },
      },
      {
        platform: {
          id: 5,
          name: "macOS",
          slug: "macos",
        },
      },
    ],
    stores: [
      {
        store: {
          id: 1,
          name: "Steam",
          slug: "steam",
        },
      },
      {
        store: {
          id: 3,
          name: "PlayStation Store",
          slug: "playstation-store",
        },
      },
      {
        store: {
          id: 2,
          name: "Xbox Store",
          slug: "xbox-store",
        },
      },
      {
        store: {
          id: 6,
          name: "Nintendo Store",
          slug: "nintendo",
        },
      },
    ],
    released: "2019-02-04",
    tba: false,
    background_image:
      "https://media.rawg.io/media/games/737/737ea5662211d2e0bbd6f5989189e4f1.jpg",
    rating: 3.65,
    rating_top: 4,
    ratings: [
      {
        id: 4,
        title: "recommended",
        count: 1155,
        percent: 48.82,
      },
      {
        id: 3,
        title: "meh",
        count: 640,
        percent: 27.05,
      },
      {
        id: 5,
        title: "exceptional",
        count: 380,
        percent: 16.06,
      },
      {
        id: 1,
        title: "skip",
        count: 191,
        percent: 8.07,
      },
    ],
    ratings_count: 2342,
    reviews_text_count: 21,
    added: 11329,
    added_by_status: {
      yet: 169,
      owned: 8461,
      beaten: 433,
      toplay: 82,
      dropped: 1666,
      playing: 518,
    },
    metacritic: 80,
    suggestions_count: 665,
    updated: "2024-09-28T01:53:03",
    id: 290856,
    score: null,
    clip: null,
    tags: [
      {
        id: 42417,
        name: "Экшен",
        slug: "ekshen",
        language: "rus",
        games_count: 41787,
        image_background:
          "https://media.rawg.io/media/games/f87/f87457e8347484033cb34cde6101d08d.jpg",
      },
      {
        id: 42392,
        name: "Приключение",
        slug: "prikliuchenie",
        language: "rus",
        games_count: 39846,
        image_background:
          "https://media.rawg.io/media/games/b45/b45575f34285f2c4479c9a5f719d972e.jpg",
      },
      {
        id: 7,
        name: "Multiplayer",
        slug: "multiplayer",
        language: "eng",
        games_count: 38830,
        image_background:
          "https://media.rawg.io/media/games/4a0/4a0a1316102366260e6f38fd2a9cfdce.jpg",
      },
      {
        id: 40836,
        name: "Full controller support",
        slug: "full-controller-support",
        language: "eng",
        games_count: 19081,
        image_background:
          "https://media.rawg.io/media/games/4be/4be6a6ad0364751a96229c56bf69be59.jpg",
      },
      {
        id: 13,
        name: "Atmospheric",
        slug: "atmospheric",
        language: "eng",
        games_count: 34397,
        image_background:
          "https://media.rawg.io/media/games/120/1201a40e4364557b124392ee50317b99.jpg",
      },
      {
        id: 42425,
        name: "Для нескольких игроков",
        slug: "dlia-neskolkikh-igrokov",
        language: "rus",
        games_count: 10383,
        image_background:
          "https://media.rawg.io/media/games/34b/34b1f1850a1c06fd971bc6ab3ac0ce0e.jpg",
      },
      {
        id: 42400,
        name: "Атмосфера",
        slug: "atmosfera",
        language: "rus",
        games_count: 6083,
        image_background:
          "https://media.rawg.io/media/games/618/618c2031a07bbff6b4f611f10b6bcdbc.jpg",
      },
      {
        id: 18,
        name: "Co-op",
        slug: "co-op",
        language: "eng",
        games_count: 12102,
        image_background:
          "https://media.rawg.io/media/games/ec3/ec3a7db7b8ab5a71aad622fe7c62632f.jpg",
      },
      {
        id: 42428,
        name: "Шутер",
        slug: "shuter",
        language: "rus",
        games_count: 9476,
        image_background:
          "https://media.rawg.io/media/games/ec3/ec3a7db7b8ab5a71aad622fe7c62632f.jpg",
      },
      {
        id: 42429,
        name: "От первого лица",
        slug: "ot-pervogo-litsa",
        language: "rus",
        games_count: 11729,
        image_background:
          "https://media.rawg.io/media/games/34b/34b1f1850a1c06fd971bc6ab3ac0ce0e.jpg",
      },
      {
        id: 8,
        name: "First-Person",
        slug: "first-person",
        language: "eng",
        games_count: 32655,
        image_background:
          "https://media.rawg.io/media/games/2ba/2bac0e87cf45e5b508f227d281c9252a.jpg",
      },
      {
        id: 32,
        name: "Sci-fi",
        slug: "sci-fi",
        language: "eng",
        games_count: 19693,
        image_background:
          "https://media.rawg.io/media/games/951/951572a3dd1e42544bd39a5d5b42d234.jpg",
      },
      {
        id: 42423,
        name: "Научная фантастика",
        slug: "nauchnaia-fantastika",
        language: "rus",
        games_count: 8594,
        image_background:
          "https://media.rawg.io/media/games/490/49016e06ae2103881ff6373248843069.jpg",
      },
      {
        id: 30,
        name: "FPS",
        slug: "fps",
        language: "eng",
        games_count: 13557,
        image_background:
          "https://media.rawg.io/media/games/198/1988a337305e008b41d7f536ce9b73f6.jpg",
      },
      {
        id: 42427,
        name: "Шутер от первого лица",
        slug: "shuter-ot-pervogo-litsa",
        language: "rus",
        games_count: 5540,
        image_background:
          "https://media.rawg.io/media/games/73e/73eecb8909e0c39fb246f457b5d6cbbe.jpg",
      },
      {
        id: 9,
        name: "Online Co-Op",
        slug: "online-co-op",
        language: "eng",
        games_count: 5971,
        image_background:
          "https://media.rawg.io/media/games/c6b/c6bfece1daf8d06bc0a60632ac78e5bf.jpg",
      },
      {
        id: 6,
        name: "Exploration",
        slug: "exploration",
        language: "eng",
        games_count: 24128,
        image_background:
          "https://media.rawg.io/media/games/b54/b54598d1d5cc31899f4f0a7e3122a7b0.jpg",
      },
      {
        id: 42452,
        name: "Выживание",
        slug: "vyzhivanie",
        language: "rus",
        games_count: 6561,
        image_background:
          "https://media.rawg.io/media/games/995/9951d9d55323d08967640f7b9ab3e342.jpg",
      },
      {
        id: 1,
        name: "Survival",
        slug: "survival",
        language: "eng",
        games_count: 9097,
        image_background:
          "https://media.rawg.io/media/games/b54/b54598d1d5cc31899f4f0a7e3122a7b0.jpg",
      },
      {
        id: 42433,
        name: "Совместная игра по сети",
        slug: "sovmestnaia-igra-po-seti",
        language: "rus",
        games_count: 1226,
        image_background:
          "https://media.rawg.io/media/games/858/858c016de0cf7bc21a57dcc698a04a0c.jpg",
      },
      {
        id: 79,
        name: "Free to Play",
        slug: "free-to-play",
        language: "eng",
        games_count: 7460,
        image_background:
          "https://media.rawg.io/media/games/2fd/2fd1b58116b10cc1f4442bee5593ca7c.jpg",
      },
      {
        id: 42436,
        name: "Тактика",
        slug: "taktika",
        language: "rus",
        games_count: 3988,
        image_background:
          "https://media.rawg.io/media/games/9c4/9c47f320eb73c9a02d462e12f6206b26.jpg",
      },
      {
        id: 69,
        name: "Action-Adventure",
        slug: "action-adventure",
        language: "eng",
        games_count: 17316,
        image_background:
          "https://media.rawg.io/media/games/c89/c89ca70716080733d03724277df2c6c7.jpg",
      },
      {
        id: 80,
        name: "Tactical",
        slug: "tactical",
        language: "eng",
        games_count: 5362,
        image_background:
          "https://media.rawg.io/media/games/0bd/0bd5646a3d8ee0ac3314bced91ea306d.jpg",
      },
      {
        id: 42477,
        name: "Мрачная",
        slug: "mrachnaia",
        language: "rus",
        games_count: 5727,
        image_background:
          "https://media.rawg.io/media/games/9dd/9ddabb34840ea9227556670606cf8ea3.jpg",
      },
      {
        id: 41,
        name: "Dark",
        slug: "dark",
        language: "eng",
        games_count: 16250,
        image_background:
          "https://media.rawg.io/media/games/5bf/5bf88a28de96321c86561a65ee48e6c2.jpg",
      },
      {
        id: 157,
        name: "PvP",
        slug: "pvp",
        language: "eng",
        games_count: 9763,
        image_background:
          "https://media.rawg.io/media/games/6fc/6fcf4cd3b17c288821388e6085bb0fc9.jpg",
      },
      {
        id: 42434,
        name: "Игрок против игрока",
        slug: "igrok-protiv-igroka",
        language: "rus",
        games_count: 5430,
        image_background:
          "https://media.rawg.io/media/games/9c4/9c47f320eb73c9a02d462e12f6206b26.jpg",
      },
      {
        id: 42530,
        name: "Кастомизация персонажа",
        slug: "kastomizatsiia-personazha",
        language: "rus",
        games_count: 4274,
        image_background:
          "https://media.rawg.io/media/games/9bf/9bfac18ff678f41a4674250fa0e04a52.jpg",
      },
      {
        id: 121,
        name: "Character Customization",
        slug: "character-customization",
        language: "eng",
        games_count: 5048,
        image_background:
          "https://media.rawg.io/media/games/511/5116b4524cea34c6b3f12e0ca027d850.jpg",
      },
      {
        id: 110,
        name: "Cinematic",
        slug: "cinematic",
        language: "eng",
        games_count: 2370,
        image_background:
          "https://media.rawg.io/media/games/5c0/5c0dd63002cb23f804aab327d40ef119.jpg",
      },
      {
        id: 11,
        name: "Team-Based",
        slug: "team-based",
        language: "eng",
        games_count: 1683,
        image_background:
          "https://media.rawg.io/media/games/1a1/1a17e9b6286edb7e1f1e510110ccb0c0.jpg",
      },
      {
        id: 42450,
        name: "Командная",
        slug: "komandnaia",
        language: "rus",
        games_count: 1382,
        image_background:
          "https://media.rawg.io/media/games/bff/bff7d82316cddea9541261a045ba008a.jpg",
      },
      {
        id: 1465,
        name: "combat",
        slug: "combat",
        language: "eng",
        games_count: 12945,
        image_background:
          "https://media.rawg.io/media/screenshots/7f8/7f8b58994fc420fefaa5fb9992335a11.jpg",
      },
      {
        id: 42470,
        name: "Киберпанк",
        slug: "kiberpank",
        language: "rus",
        games_count: 1949,
        image_background:
          "https://media.rawg.io/media/games/d37/d37e110ddcc0bd52d99f0f647b737a0a.jpg",
      },
      {
        id: 226,
        name: "Cyberpunk",
        slug: "cyberpunk",
        language: "eng",
        games_count: 4666,
        image_background:
          "https://media.rawg.io/media/games/5e4/5e4bff02098b2b6f824c68286d5da1a6.jpg",
      },
      {
        id: 42623,
        name: "Кинематографичная",
        slug: "kinematografichnaia",
        language: "rus",
        games_count: 2277,
        image_background:
          "https://media.rawg.io/media/games/7a2/7a2500ee8b2c0e1ff268bb4479463dea.jpg",
      },
      {
        id: 42675,
        name: "Королевская битва",
        slug: "korolevskaia-bitva",
        language: "rus",
        games_count: 804,
        image_background:
          "https://media.rawg.io/media/games/737/73727793e477ebf228ecd389f1301fee.jpg",
      },
      {
        id: 35162,
        name: "Battle Royale",
        slug: "battle-royale-2",
        language: "eng",
        games_count: 713,
        image_background:
          "https://media.rawg.io/media/games/075/0753492cda7ee3c9bd4a3ca673fd0c8c.jpg",
      },
      {
        id: 49953,
        name: "Hero Shooter",
        slug: "hero-shooter-2",
        language: "eng",
        games_count: 745,
        image_background:
          "https://media.rawg.io/media/screenshots/c42/c429ec19f54baabd45941fcd8a4a95b7.jpg",
      },
      {
        id: 12983,
        name: "lootboxes",
        slug: "lootboxes",
        language: "eng",
        games_count: 5,
        image_background:
          "https://media.rawg.io/media/screenshots/92c/92c14790433315bdf43e30ec58f0ed1a.jpg",
      },
    ],
    esrb_rating: {
      id: 3,
      name: "Teen",
      slug: "teen",
      name_en: "Teen",
      name_ru: "С 13 лет",
    },
    user_game: null,
    reviews_count: 2366,
    saturated_color: "0f0f0f",
    dominant_color: "0f0f0f",
    short_screenshots: [
      {
        id: -1,
        image:
          "https://media.rawg.io/media/games/737/737ea5662211d2e0bbd6f5989189e4f1.jpg",
      },
      {
        id: 1830288,
        image:
          "https://media.rawg.io/media/screenshots/a59/a593423f503eae7f29cd642827cda18d.jpg",
      },
      {
        id: 1830289,
        image:
          "https://media.rawg.io/media/screenshots/e7a/e7a1e5ec1b9861c340cdbef43bb47678.jpg",
      },
      {
        id: 1830290,
        image:
          "https://media.rawg.io/media/screenshots/76e/76e5b435f9ba8ed79da0e5dd25762075.jpg",
      },
      {
        id: 1830291,
        image:
          "https://media.rawg.io/media/screenshots/b4b/b4b3c320a4a3965d5da85406dcd05b77.jpg",
      },
      {
        id: 1830292,
        image:
          "https://media.rawg.io/media/screenshots/52a/52a0266fde34d2a24f4ad6aee3da5051.jpg",
      },
      {
        id: 1830293,
        image:
          "https://media.rawg.io/media/screenshots/05a/05a9a772ede23255689d1218b3b9a728.jpg",
      },
    ],
    parent_platforms: [
      {
        platform: {
          id: 1,
          name: "PC",
          slug: "pc",
        },
      },
      {
        platform: {
          id: 2,
          name: "PlayStation",
          slug: "playstation",
        },
      },
      {
        platform: {
          id: 3,
          name: "Xbox",
          slug: "xbox",
        },
      },
      {
        platform: {
          id: 5,
          name: "Apple Macintosh",
          slug: "mac",
        },
      },
      {
        platform: {
          id: 7,
          name: "Nintendo",
          slug: "nintendo",
        },
      },
    ],
    genres: [
      {
        id: 2,
        name: "Shooter",
        slug: "shooter",
      },
      {
        id: 4,
        name: "Action",
        slug: "action",
      },
    ],
  },
  {
    slug: "outlast",
    name: "Outlast",
    playtime: 3,
    platforms: [
      {
        platform: {
          id: 4,
          name: "PC",
          slug: "pc",
        },
      },
      {
        platform: {
          id: 1,
          name: "Xbox One",
          slug: "xbox-one",
        },
      },
      {
        platform: {
          id: 18,
          name: "PlayStation 4",
          slug: "playstation4",
        },
      },
      {
        platform: {
          id: 7,
          name: "Nintendo Switch",
          slug: "nintendo-switch",
        },
      },
      {
        platform: {
          id: 5,
          name: "macOS",
          slug: "macos",
        },
      },
      {
        platform: {
          id: 6,
          name: "Linux",
          slug: "linux",
        },
      },
    ],
    stores: [
      {
        store: {
          id: 1,
          name: "Steam",
          slug: "steam",
        },
      },
      {
        store: {
          id: 3,
          name: "PlayStation Store",
          slug: "playstation-store",
        },
      },
      {
        store: {
          id: 2,
          name: "Xbox Store",
          slug: "xbox-store",
        },
      },
      {
        store: {
          id: 5,
          name: "GOG",
          slug: "gog",
        },
      },
      {
        store: {
          id: 11,
          name: "Epic Games",
          slug: "epic-games",
        },
      },
    ],
    released: "2013-09-03",
    tba: false,
    background_image:
      "https://media.rawg.io/media/games/9dd/9ddabb34840ea9227556670606cf8ea3.jpg",
    rating: 3.73,
    rating_top: 4,
    ratings: [
      {
        id: 4,
        title: "recommended",
        count: 953,
        percent: 53.72,
      },
      {
        id: 3,
        title: "meh",
        count: 358,
        percent: 20.18,
      },
      {
        id: 5,
        title: "exceptional",
        count: 318,
        percent: 17.93,
      },
      {
        id: 1,
        title: "skip",
        count: 145,
        percent: 8.17,
      },
    ],
    ratings_count: 1763,
    reviews_text_count: 9,
    added: 10396,
    added_by_status: {
      yet: 596,
      owned: 7473,
      beaten: 1467,
      toplay: 187,
      dropped: 635,
      playing: 38,
    },
    metacritic: 80,
    suggestions_count: 469,
    updated: "2024-09-18T19:30:38",
    id: 3790,
    score: null,
    clip: null,
    tags: [
      {
        id: 31,
        name: "Singleplayer",
        slug: "singleplayer",
        language: "eng",
        games_count: 228522,
        image_background:
          "https://media.rawg.io/media/games/4be/4be6a6ad0364751a96229c56bf69be59.jpg",
      },
      {
        id: 42396,
        name: "Для одного игрока",
        slug: "dlia-odnogo-igroka",
        language: "rus",
        games_count: 52641,
        image_background:
          "https://media.rawg.io/media/games/942/9424d6bb763dc38d9378b488603c87fa.jpg",
      },
      {
        id: 42417,
        name: "Экшен",
        slug: "ekshen",
        language: "rus",
        games_count: 41787,
        image_background:
          "https://media.rawg.io/media/games/f87/f87457e8347484033cb34cde6101d08d.jpg",
      },
      {
        id: 42392,
        name: "Приключение",
        slug: "prikliuchenie",
        language: "rus",
        games_count: 39846,
        image_background:
          "https://media.rawg.io/media/games/b45/b45575f34285f2c4479c9a5f719d972e.jpg",
      },
      {
        id: 40847,
        name: "Steam Achievements",
        slug: "steam-achievements",
        language: "eng",
        games_count: 40163,
        image_background:
          "https://media.rawg.io/media/games/2ba/2bac0e87cf45e5b508f227d281c9252a.jpg",
      },
      {
        id: 42398,
        name: "Инди",
        slug: "indi-2",
        language: "rus",
        games_count: 57367,
        image_background:
          "https://media.rawg.io/media/games/d0f/d0f91fe1d92332147e5db74e207cfc7a.jpg",
      },
      {
        id: 40836,
        name: "Full controller support",
        slug: "full-controller-support",
        language: "eng",
        games_count: 19081,
        image_background:
          "https://media.rawg.io/media/games/4be/4be6a6ad0364751a96229c56bf69be59.jpg",
      },
      {
        id: 40849,
        name: "Steam Cloud",
        slug: "steam-cloud",
        language: "eng",
        games_count: 19108,
        image_background:
          "https://media.rawg.io/media/games/198/1988a337305e008b41d7f536ce9b73f6.jpg",
      },
      {
        id: 13,
        name: "Atmospheric",
        slug: "atmospheric",
        language: "eng",
        games_count: 34397,
        image_background:
          "https://media.rawg.io/media/games/120/1201a40e4364557b124392ee50317b99.jpg",
      },
      {
        id: 42400,
        name: "Атмосфера",
        slug: "atmosfera",
        language: "rus",
        games_count: 6083,
        image_background:
          "https://media.rawg.io/media/games/618/618c2031a07bbff6b4f611f10b6bcdbc.jpg",
      },
      {
        id: 7808,
        name: "steam-trading-cards",
        slug: "steam-trading-cards",
        language: "eng",
        games_count: 7569,
        image_background:
          "https://media.rawg.io/media/games/8cc/8cce7c0e99dcc43d66c8efd42f9d03e3.jpg",
      },
      {
        id: 42429,
        name: "От первого лица",
        slug: "ot-pervogo-litsa",
        language: "rus",
        games_count: 11729,
        image_background:
          "https://media.rawg.io/media/games/34b/34b1f1850a1c06fd971bc6ab3ac0ce0e.jpg",
      },
      {
        id: 8,
        name: "First-Person",
        slug: "first-person",
        language: "eng",
        games_count: 32655,
        image_background:
          "https://media.rawg.io/media/games/2ba/2bac0e87cf45e5b508f227d281c9252a.jpg",
      },
      {
        id: 42435,
        name: "Шедевр",
        slug: "shedevr",
        language: "rus",
        games_count: 1059,
        image_background:
          "https://media.rawg.io/media/games/310/3106b0e012271c5ffb16497b070be739.jpg",
      },
      {
        id: 32,
        name: "Sci-fi",
        slug: "sci-fi",
        language: "eng",
        games_count: 19693,
        image_background:
          "https://media.rawg.io/media/games/951/951572a3dd1e42544bd39a5d5b42d234.jpg",
      },
      {
        id: 42423,
        name: "Научная фантастика",
        slug: "nauchnaia-fantastika",
        language: "rus",
        games_count: 8594,
        image_background:
          "https://media.rawg.io/media/games/490/49016e06ae2103881ff6373248843069.jpg",
      },
      {
        id: 16,
        name: "Horror",
        slug: "horror",
        language: "eng",
        games_count: 45168,
        image_background:
          "https://media.rawg.io/media/games/e6d/e6de699bd788497f4b52e2f41f9698f2.jpg",
      },
      {
        id: 30,
        name: "FPS",
        slug: "fps",
        language: "eng",
        games_count: 13557,
        image_background:
          "https://media.rawg.io/media/games/198/1988a337305e008b41d7f536ce9b73f6.jpg",
      },
      {
        id: 42420,
        name: "Сложная",
        slug: "slozhnaia",
        language: "rus",
        games_count: 5478,
        image_background:
          "https://media.rawg.io/media/games/736/73619bd336c894d6941d926bfd563946.jpg",
      },
      {
        id: 42491,
        name: "Мясо",
        slug: "miaso",
        language: "rus",
        games_count: 4748,
        image_background:
          "https://media.rawg.io/media/games/4fb/4fb548e4816c84d1d70f1a228fb167cc.jpg",
      },
      {
        id: 26,
        name: "Gore",
        slug: "gore",
        language: "eng",
        games_count: 5883,
        image_background:
          "https://media.rawg.io/media/games/8d4/8d46786ca86b1d95f3dc7e700e2dc4dd.jpg",
      },
      {
        id: 49,
        name: "Difficult",
        slug: "difficult",
        language: "eng",
        games_count: 13449,
        image_background:
          "https://media.rawg.io/media/games/9bf/9bfac18ff678f41a4674250fa0e04a52.jpg",
      },
      {
        id: 42452,
        name: "Выживание",
        slug: "vyzhivanie",
        language: "rus",
        games_count: 6561,
        image_background:
          "https://media.rawg.io/media/games/995/9951d9d55323d08967640f7b9ab3e342.jpg",
      },
      {
        id: 1,
        name: "Survival",
        slug: "survival",
        language: "eng",
        games_count: 9097,
        image_background:
          "https://media.rawg.io/media/games/b54/b54598d1d5cc31899f4f0a7e3122a7b0.jpg",
      },
      {
        id: 15,
        name: "Stealth",
        slug: "stealth",
        language: "eng",
        games_count: 6417,
        image_background:
          "https://media.rawg.io/media/games/120/1201a40e4364557b124392ee50317b99.jpg",
      },
      {
        id: 42439,
        name: "Стелс",
        slug: "stels",
        language: "rus",
        games_count: 2277,
        image_background:
          "https://media.rawg.io/media/games/4e6/4e6e8e7f50c237d76f38f3c885dae3d2.jpg",
      },
      {
        id: 42477,
        name: "Мрачная",
        slug: "mrachnaia",
        language: "rus",
        games_count: 5727,
        image_background:
          "https://media.rawg.io/media/games/9dd/9ddabb34840ea9227556670606cf8ea3.jpg",
      },
      {
        id: 41,
        name: "Dark",
        slug: "dark",
        language: "eng",
        games_count: 16250,
        image_background:
          "https://media.rawg.io/media/games/5bf/5bf88a28de96321c86561a65ee48e6c2.jpg",
      },
      {
        id: 42406,
        name: "Нагота",
        slug: "nagota",
        language: "rus",
        games_count: 6507,
        image_background:
          "https://media.rawg.io/media/games/2ad/2ad87a4a69b1104f02435c14c5196095.jpg",
      },
      {
        id: 44,
        name: "Nudity",
        slug: "nudity",
        language: "eng",
        games_count: 6898,
        image_background:
          "https://media.rawg.io/media/games/a0e/a0ef08621301a1eab5e04fa5c96978fa.jpeg",
      },
      {
        id: 42471,
        name: "Хоррор на выживание",
        slug: "khorror-na-vyzhivanie",
        language: "rus",
        games_count: 3324,
        image_background:
          "https://media.rawg.io/media/games/152/152e788b7504aa2753c86dae912fb34c.jpg",
      },
      {
        id: 17,
        name: "Survival Horror",
        slug: "survival-horror",
        language: "eng",
        games_count: 8685,
        image_background:
          "https://media.rawg.io/media/games/152/152e788b7504aa2753c86dae912fb34c.jpg",
      },
      {
        id: 336,
        name: "controller support",
        slug: "controller-support",
        language: "eng",
        games_count: 293,
        image_background:
          "https://media.rawg.io/media/games/9cc/9cc11e2e81403186c7fa9c00c143d6e4.jpg",
      },
      {
        id: 40833,
        name: "Captions available",
        slug: "captions-available",
        language: "eng",
        games_count: 1371,
        image_background:
          "https://media.rawg.io/media/games/934/9346092ae11bf7582c883869468171cc.jpg",
      },
      {
        id: 42555,
        name: "Симулятор ходьбы",
        slug: "simuliator-khodby",
        language: "rus",
        games_count: 3029,
        image_background:
          "https://media.rawg.io/media/games/883/883bc3050f9a4115d1968ece56bddfc2.jpg",
      },
      {
        id: 42643,
        name: "Паркур",
        slug: "parkur-2",
        language: "rus",
        games_count: 1307,
        image_background:
          "https://media.rawg.io/media/games/5bb/5bb55ccb8205aadbb6a144cf6d8963f1.jpg",
      },
      {
        id: 91,
        name: "Walking Simulator",
        slug: "walking-simulator",
        language: "eng",
        games_count: 7462,
        image_background:
          "https://media.rawg.io/media/games/a28/a289e23b4d4d84f26ab59125e3be4483.jpg",
      },
      {
        id: 188,
        name: "Parkour",
        slug: "parkour",
        language: "eng",
        games_count: 3628,
        image_background:
          "https://media.rawg.io/media/games/37a/37a9536e92cf8fe3b60045aa75dbd41f.jpg",
      },
      {
        id: 133,
        name: "3D Vision",
        slug: "3d-vision",
        language: "eng",
        games_count: 882,
        image_background:
          "https://media.rawg.io/media/games/ae1/ae1518c3dc1e847344661905fd2a8d16.jpg",
      },
    ],
    esrb_rating: {
      id: 4,
      name: "Mature",
      slug: "mature",
      name_en: "Mature",
      name_ru: "С 17 лет",
    },
    user_game: null,
    reviews_count: 1774,
    saturated_color: "0f0f0f",
    dominant_color: "0f0f0f",
    short_screenshots: [
      {
        id: -1,
        image:
          "https://media.rawg.io/media/games/9dd/9ddabb34840ea9227556670606cf8ea3.jpg",
      },
      {
        id: 32637,
        image:
          "https://media.rawg.io/media/screenshots/83f/83ff600f8e2dd8507e7961d3e9f32126.jpg",
      },
      {
        id: 32638,
        image:
          "https://media.rawg.io/media/screenshots/283/283c90039e31e07f99979ccb445cf7b7.jpg",
      },
      {
        id: 32639,
        image:
          "https://media.rawg.io/media/screenshots/03f/03f4171763bda5824da07fc087cec609.jpg",
      },
      {
        id: 32640,
        image:
          "https://media.rawg.io/media/screenshots/37a/37acd5ef186c8e018cbd64751b21f064.jpg",
      },
      {
        id: 32641,
        image:
          "https://media.rawg.io/media/screenshots/242/2426226b9eb1a7de43b8bf01ecb2c291.jpg",
      },
      {
        id: 32642,
        image:
          "https://media.rawg.io/media/screenshots/d06/d06d3baecb6da0ac9e53b40ade32d5f2.jpg",
      },
    ],
    parent_platforms: [
      {
        platform: {
          id: 1,
          name: "PC",
          slug: "pc",
        },
      },
      {
        platform: {
          id: 2,
          name: "PlayStation",
          slug: "playstation",
        },
      },
      {
        platform: {
          id: 3,
          name: "Xbox",
          slug: "xbox",
        },
      },
      {
        platform: {
          id: 5,
          name: "Apple Macintosh",
          slug: "mac",
        },
      },
      {
        platform: {
          id: 6,
          name: "Linux",
          slug: "linux",
        },
      },
      {
        platform: {
          id: 7,
          name: "Nintendo",
          slug: "nintendo",
        },
      },
    ],
    genres: [
      {
        id: 51,
        name: "Indie",
        slug: "indie",
      },
      {
        id: 4,
        name: "Action",
        slug: "action",
      },
    ],
  },
  {
    slug: "spec-ops-the-line",
    name: "Spec Ops: The Line",
    playtime: 5,
    platforms: [
      {
        platform: {
          id: 4,
          name: "PC",
          slug: "pc",
        },
      },
      {
        platform: {
          id: 1,
          name: "Xbox One",
          slug: "xbox-one",
        },
      },
      {
        platform: {
          id: 14,
          name: "Xbox 360",
          slug: "xbox360",
        },
      },
      {
        platform: {
          id: 16,
          name: "PlayStation 3",
          slug: "playstation3",
        },
      },
    ],
    stores: [
      {
        store: {
          id: 1,
          name: "Steam",
          slug: "steam",
        },
      },
      {
        store: {
          id: 3,
          name: "PlayStation Store",
          slug: "playstation-store",
        },
      },
      {
        store: {
          id: 2,
          name: "Xbox Store",
          slug: "xbox-store",
        },
      },
      {
        store: {
          id: 5,
          name: "GOG",
          slug: "gog",
        },
      },
      {
        store: {
          id: 7,
          name: "Xbox 360 Store",
          slug: "xbox360",
        },
      },
    ],
    released: "2012-06-26",
    tba: false,
    background_image:
      "https://media.rawg.io/media/games/b49/b4912b5dbfc7ed8927b65f05b8507f6c.jpg",
    rating: 4.09,
    rating_top: 4,
    ratings: [
      {
        id: 4,
        title: "recommended",
        count: 911,
        percent: 47.82,
      },
      {
        id: 5,
        title: "exceptional",
        count: 684,
        percent: 35.91,
      },
      {
        id: 3,
        title: "meh",
        count: 213,
        percent: 11.18,
      },
      {
        id: 1,
        title: "skip",
        count: 97,
        percent: 5.09,
      },
    ],
    ratings_count: 1885,
    reviews_text_count: 12,
    added: 10053,
    added_by_status: {
      yet: 499,
      owned: 7146,
      beaten: 1852,
      toplay: 187,
      dropped: 330,
      playing: 39,
    },
    metacritic: 76,
    suggestions_count: 539,
    updated: "2024-10-01T09:20:25",
    id: 4332,
    score: null,
    clip: null,
    tags: [
      {
        id: 31,
        name: "Singleplayer",
        slug: "singleplayer",
        language: "eng",
        games_count: 228522,
        image_background:
          "https://media.rawg.io/media/games/4be/4be6a6ad0364751a96229c56bf69be59.jpg",
      },
      {
        id: 42396,
        name: "Для одного игрока",
        slug: "dlia-odnogo-igroka",
        language: "rus",
        games_count: 52641,
        image_background:
          "https://media.rawg.io/media/games/942/9424d6bb763dc38d9378b488603c87fa.jpg",
      },
      {
        id: 42417,
        name: "Экшен",
        slug: "ekshen",
        language: "rus",
        games_count: 41787,
        image_background:
          "https://media.rawg.io/media/games/f87/f87457e8347484033cb34cde6101d08d.jpg",
      },
      {
        id: 42392,
        name: "Приключение",
        slug: "prikliuchenie",
        language: "rus",
        games_count: 39846,
        image_background:
          "https://media.rawg.io/media/games/b45/b45575f34285f2c4479c9a5f719d972e.jpg",
      },
      {
        id: 40847,
        name: "Steam Achievements",
        slug: "steam-achievements",
        language: "eng",
        games_count: 40163,
        image_background:
          "https://media.rawg.io/media/games/2ba/2bac0e87cf45e5b508f227d281c9252a.jpg",
      },
      {
        id: 7,
        name: "Multiplayer",
        slug: "multiplayer",
        language: "eng",
        games_count: 38830,
        image_background:
          "https://media.rawg.io/media/games/4a0/4a0a1316102366260e6f38fd2a9cfdce.jpg",
      },
      {
        id: 40836,
        name: "Full controller support",
        slug: "full-controller-support",
        language: "eng",
        games_count: 19081,
        image_background:
          "https://media.rawg.io/media/games/4be/4be6a6ad0364751a96229c56bf69be59.jpg",
      },
      {
        id: 40849,
        name: "Steam Cloud",
        slug: "steam-cloud",
        language: "eng",
        games_count: 19108,
        image_background:
          "https://media.rawg.io/media/games/198/1988a337305e008b41d7f536ce9b73f6.jpg",
      },
      {
        id: 13,
        name: "Atmospheric",
        slug: "atmospheric",
        language: "eng",
        games_count: 34397,
        image_background:
          "https://media.rawg.io/media/games/120/1201a40e4364557b124392ee50317b99.jpg",
      },
      {
        id: 42425,
        name: "Для нескольких игроков",
        slug: "dlia-neskolkikh-igrokov",
        language: "rus",
        games_count: 10383,
        image_background:
          "https://media.rawg.io/media/games/34b/34b1f1850a1c06fd971bc6ab3ac0ce0e.jpg",
      },
      {
        id: 42400,
        name: "Атмосфера",
        slug: "atmosfera",
        language: "rus",
        games_count: 6083,
        image_background:
          "https://media.rawg.io/media/games/618/618c2031a07bbff6b4f611f10b6bcdbc.jpg",
      },
      {
        id: 42401,
        name: "Отличный саундтрек",
        slug: "otlichnyi-saundtrek",
        language: "rus",
        games_count: 4631,
        image_background:
          "https://media.rawg.io/media/games/d82/d82990b9c67ba0d2d09d4e6fa88885a7.jpg",
      },
      {
        id: 42,
        name: "Great Soundtrack",
        slug: "great-soundtrack",
        language: "eng",
        games_count: 3410,
        image_background:
          "https://media.rawg.io/media/games/bc0/bc06a29ceac58652b684deefe7d56099.jpg",
      },
      {
        id: 42394,
        name: "Глубокий сюжет",
        slug: "glubokii-siuzhet",
        language: "rus",
        games_count: 13440,
        image_background:
          "https://media.rawg.io/media/games/b8c/b8c243eaa0fbac8115e0cdccac3f91dc.jpg",
      },
      {
        id: 18,
        name: "Co-op",
        slug: "co-op",
        language: "eng",
        games_count: 12102,
        image_background:
          "https://media.rawg.io/media/games/ec3/ec3a7db7b8ab5a71aad622fe7c62632f.jpg",
      },
      {
        id: 118,
        name: "Story Rich",
        slug: "story-rich",
        language: "eng",
        games_count: 22579,
        image_background:
          "https://media.rawg.io/media/games/4be/4be6a6ad0364751a96229c56bf69be59.jpg",
      },
      {
        id: 42428,
        name: "Шутер",
        slug: "shuter",
        language: "rus",
        games_count: 9476,
        image_background:
          "https://media.rawg.io/media/games/ec3/ec3a7db7b8ab5a71aad622fe7c62632f.jpg",
      },
      {
        id: 42435,
        name: "Шедевр",
        slug: "shedevr",
        language: "rus",
        games_count: 1059,
        image_background:
          "https://media.rawg.io/media/games/310/3106b0e012271c5ffb16497b070be739.jpg",
      },
      {
        id: 42441,
        name: "От третьего лица",
        slug: "ot-tretego-litsa",
        language: "rus",
        games_count: 7620,
        image_background:
          "https://media.rawg.io/media/games/021/021c4e21a1824d2526f925eff6324653.jpg",
      },
      {
        id: 149,
        name: "Third Person",
        slug: "third-person",
        language: "eng",
        games_count: 12099,
        image_background:
          "https://media.rawg.io/media/games/618/618c2031a07bbff6b4f611f10b6bcdbc.jpg",
      },
      {
        id: 16,
        name: "Horror",
        slug: "horror",
        language: "eng",
        games_count: 45168,
        image_background:
          "https://media.rawg.io/media/games/e6d/e6de699bd788497f4b52e2f41f9698f2.jpg",
      },
      {
        id: 40850,
        name: "Steam Leaderboards",
        slug: "steam-leaderboards",
        language: "eng",
        games_count: 7105,
        image_background:
          "https://media.rawg.io/media/games/6cd/6cd653e0aaef5ff8bbd295bf4bcb12eb.jpg",
      },
      {
        id: 42446,
        name: "Шутер от третьего лица",
        slug: "shuter-ot-tretego-litsa",
        language: "rus",
        games_count: 2173,
        image_background:
          "https://media.rawg.io/media/games/1bd/1bd2657b81eb0c99338120ad444b24ff.jpg",
      },
      {
        id: 150,
        name: "Third-Person Shooter",
        slug: "third-person-shooter",
        language: "eng",
        games_count: 3562,
        image_background:
          "https://media.rawg.io/media/games/f87/f87457e8347484033cb34cde6101d08d.jpg",
      },
      {
        id: 11669,
        name: "stats",
        slug: "stats",
        language: "eng",
        games_count: 5114,
        image_background:
          "https://media.rawg.io/media/games/2ba/2bac0e87cf45e5b508f227d281c9252a.jpg",
      },
      {
        id: 42477,
        name: "Мрачная",
        slug: "mrachnaia",
        language: "rus",
        games_count: 5727,
        image_background:
          "https://media.rawg.io/media/games/9dd/9ddabb34840ea9227556670606cf8ea3.jpg",
      },
      {
        id: 41,
        name: "Dark",
        slug: "dark",
        language: "eng",
        games_count: 16250,
        image_background:
          "https://media.rawg.io/media/games/5bf/5bf88a28de96321c86561a65ee48e6c2.jpg",
      },
      {
        id: 40832,
        name: "Cross-Platform Multiplayer",
        slug: "cross-platform-multiplayer",
        language: "eng",
        games_count: 2704,
        image_background:
          "https://media.rawg.io/media/games/806/8060a7663364ac23e15480728938d6f3.jpg",
      },
      {
        id: 70,
        name: "War",
        slug: "war",
        language: "eng",
        games_count: 9445,
        image_background:
          "https://media.rawg.io/media/games/8ee/8eed88e297441ef9202b5d1d35d7d86f.jpg",
      },
      {
        id: 43,
        name: "Post-apocalyptic",
        slug: "post-apocalyptic",
        language: "eng",
        games_count: 4144,
        image_background:
          "https://media.rawg.io/media/games/b7d/b7d3f1715fa8381a4e780173a197a615.jpg",
      },
      {
        id: 42430,
        name: "Война",
        slug: "voina",
        language: "rus",
        games_count: 2557,
        image_background:
          "https://media.rawg.io/media/games/48e/48e63bbddeddbe9ba81942772b156664.jpg",
      },
      {
        id: 42488,
        name: "Пост-апокалипсис",
        slug: "post-apokalipsis",
        language: "rus",
        games_count: 749,
        image_background:
          "https://media.rawg.io/media/games/d82/d82990b9c67ba0d2d09d4e6fa88885a7.jpg",
      },
      {
        id: 42529,
        name: "Для взрослых",
        slug: "dlia-vzroslykh",
        language: "rus",
        games_count: 3239,
        image_background:
          "https://media.rawg.io/media/games/0be/0bea0a08a4d954337305391b778a7f37.jpg",
      },
      {
        id: 192,
        name: "Mature",
        slug: "mature",
        language: "eng",
        games_count: 3431,
        image_background:
          "https://media.rawg.io/media/games/4fb/4fb548e4816c84d1d70f1a228fb167cc.jpg",
      },
      {
        id: 42431,
        name: "Военные действия",
        slug: "voennye-deistviia",
        language: "rus",
        games_count: 1964,
        image_background:
          "https://media.rawg.io/media/games/9c4/9c47f320eb73c9a02d462e12f6206b26.jpg",
      },
      {
        id: 81,
        name: "Military",
        slug: "military",
        language: "eng",
        games_count: 1979,
        image_background:
          "https://media.rawg.io/media/games/998/9980c4296f311d8bcc5b451ca51e4fe1.jpg",
      },
      {
        id: 42691,
        name: "Эмоциональная",
        slug: "emotsionalnaia",
        language: "rus",
        games_count: 2996,
        image_background:
          "https://media.rawg.io/media/games/01a/01a74b440fba4dce445cc2ff11b99220.jpg",
      },
      {
        id: 42655,
        name: "Психологическая",
        slug: "psikhologicheskaia",
        language: "rus",
        games_count: 1757,
        image_background:
          "https://media.rawg.io/media/screenshots/a8a/a8ad3d2de1e1933f37e9087649242059.jpg",
      },
      {
        id: 285,
        name: "Psychological",
        slug: "psychological",
        language: "eng",
        games_count: 1856,
        image_background:
          "https://media.rawg.io/media/screenshots/f9f/f9fe0c135bbd65142e9094178b43697b.jpg",
      },
      {
        id: 283,
        name: "Based On A Novel",
        slug: "based-on-a-novel",
        language: "eng",
        games_count: 51,
        image_background:
          "https://media.rawg.io/media/screenshots/f47/f4730de27325b072a52ce102b296f590.jpg",
      },
      {
        id: 287,
        name: "Political",
        slug: "political",
        language: "eng",
        games_count: 628,
        image_background:
          "https://media.rawg.io/media/games/8f2/8f2cf5f18de195a2347116cdedceec9b.jpg",
      },
      {
        id: 42559,
        name: "Политическая",
        slug: "politicheskaia",
        language: "rus",
        games_count: 480,
        image_background:
          "https://media.rawg.io/media/games/09e/09e67b14d5282b2d3307a6e72dd876f8.jpg",
      },
      {
        id: 42397,
        name: "По мотивам книги",
        slug: "po-motivam-knigi",
        language: "rus",
        games_count: 53,
        image_background:
          "https://media.rawg.io/media/screenshots/179/17969ec669130c15b8b480fcc43c53fe.jpg",
      },
      {
        id: 19728,
        name: "european",
        slug: "european",
        language: "eng",
        games_count: 12,
        image_background:
          "https://media.rawg.io/media/screenshots/d14/d148f8ffc332b1d0f70be9bad91c2171.jpg",
      },
    ],
    esrb_rating: {
      id: 4,
      name: "Mature",
      slug: "mature",
      name_en: "Mature",
      name_ru: "С 17 лет",
    },
    user_game: null,
    reviews_count: 1905,
    saturated_color: "0f0f0f",
    dominant_color: "0f0f0f",
    short_screenshots: [
      {
        id: -1,
        image:
          "https://media.rawg.io/media/games/b49/b4912b5dbfc7ed8927b65f05b8507f6c.jpg",
      },
      {
        id: 163188,
        image:
          "https://media.rawg.io/media/screenshots/a17/a17ff71c8774a3b70375a869b3881244.jpg",
      },
      {
        id: 163189,
        image:
          "https://media.rawg.io/media/screenshots/e5a/e5aaa5d242144ab80ef8264c96516dcc.jpg",
      },
      {
        id: 163190,
        image:
          "https://media.rawg.io/media/screenshots/f36/f36e756c36d36fe8ffe73a4b39acbebf.jpg",
      },
      {
        id: 163191,
        image:
          "https://media.rawg.io/media/screenshots/437/437ad0efe43adcad4284f5f48d03559f.jpg",
      },
      {
        id: 163192,
        image:
          "https://media.rawg.io/media/screenshots/9e2/9e26af47a676b061f288ff269e91a8f1.jpg",
      },
      {
        id: 163193,
        image:
          "https://media.rawg.io/media/screenshots/2d9/2d9a5dd6a25c04e49accca5358782152.jpg",
      },
    ],
    parent_platforms: [
      {
        platform: {
          id: 1,
          name: "PC",
          slug: "pc",
        },
      },
      {
        platform: {
          id: 2,
          name: "PlayStation",
          slug: "playstation",
        },
      },
      {
        platform: {
          id: 3,
          name: "Xbox",
          slug: "xbox",
        },
      },
    ],
    genres: [
      {
        id: 2,
        name: "Shooter",
        slug: "shooter",
      },
      {
        id: 4,
        name: "Action",
        slug: "action",
      },
    ],
  },
  {
    slug: "detroit-become-human",
    name: "Detroit: Become Human",
    playtime: 10,
    platforms: [
      {
        platform: {
          id: 4,
          name: "PC",
          slug: "pc",
        },
      },
      {
        platform: {
          id: 18,
          name: "PlayStation 4",
          slug: "playstation4",
        },
      },
    ],
    stores: [
      {
        store: {
          id: 1,
          name: "Steam",
          slug: "steam",
        },
      },
      {
        store: {
          id: 3,
          name: "PlayStation Store",
          slug: "playstation-store",
        },
      },
      {
        store: {
          id: 11,
          name: "Epic Games",
          slug: "epic-games",
        },
      },
    ],
    released: "2018-05-25",
    tba: false,
    background_image:
      "https://media.rawg.io/media/games/951/951572a3dd1e42544bd39a5d5b42d234.jpg",
    rating: 4.32,
    rating_top: 5,
    ratings: [
      {
        id: 5,
        title: "exceptional",
        count: 1484,
        percent: 46.92,
      },
      {
        id: 4,
        title: "recommended",
        count: 1345,
        percent: 42.52,
      },
      {
        id: 3,
        title: "meh",
        count: 265,
        percent: 8.38,
      },
      {
        id: 1,
        title: "skip",
        count: 69,
        percent: 2.18,
      },
    ],
    ratings_count: 3102,
    reviews_text_count: 46,
    added: 9815,
    added_by_status: {
      yet: 569,
      owned: 4956,
      beaten: 3041,
      toplay: 871,
      dropped: 197,
      playing: 181,
    },
    metacritic: 79,
    suggestions_count: 501,
    updated: "2024-09-28T10:30:43",
    id: 29177,
    score: null,
    clip: null,
    tags: [
      {
        id: 31,
        name: "Singleplayer",
        slug: "singleplayer",
        language: "eng",
        games_count: 228522,
        image_background:
          "https://media.rawg.io/media/games/4be/4be6a6ad0364751a96229c56bf69be59.jpg",
      },
      {
        id: 42396,
        name: "Для одного игрока",
        slug: "dlia-odnogo-igroka",
        language: "rus",
        games_count: 52641,
        image_background:
          "https://media.rawg.io/media/games/942/9424d6bb763dc38d9378b488603c87fa.jpg",
      },
      {
        id: 42392,
        name: "Приключение",
        slug: "prikliuchenie",
        language: "rus",
        games_count: 39846,
        image_background:
          "https://media.rawg.io/media/games/b45/b45575f34285f2c4479c9a5f719d972e.jpg",
      },
      {
        id: 40847,
        name: "Steam Achievements",
        slug: "steam-achievements",
        language: "eng",
        games_count: 40163,
        image_background:
          "https://media.rawg.io/media/games/2ba/2bac0e87cf45e5b508f227d281c9252a.jpg",
      },
      {
        id: 40836,
        name: "Full controller support",
        slug: "full-controller-support",
        language: "eng",
        games_count: 19081,
        image_background:
          "https://media.rawg.io/media/games/4be/4be6a6ad0364751a96229c56bf69be59.jpg",
      },
      {
        id: 40849,
        name: "Steam Cloud",
        slug: "steam-cloud",
        language: "eng",
        games_count: 19108,
        image_background:
          "https://media.rawg.io/media/games/198/1988a337305e008b41d7f536ce9b73f6.jpg",
      },
      {
        id: 13,
        name: "Atmospheric",
        slug: "atmospheric",
        language: "eng",
        games_count: 34397,
        image_background:
          "https://media.rawg.io/media/games/120/1201a40e4364557b124392ee50317b99.jpg",
      },
      {
        id: 42400,
        name: "Атмосфера",
        slug: "atmosfera",
        language: "rus",
        games_count: 6083,
        image_background:
          "https://media.rawg.io/media/games/618/618c2031a07bbff6b4f611f10b6bcdbc.jpg",
      },
      {
        id: 42401,
        name: "Отличный саундтрек",
        slug: "otlichnyi-saundtrek",
        language: "rus",
        games_count: 4631,
        image_background:
          "https://media.rawg.io/media/games/d82/d82990b9c67ba0d2d09d4e6fa88885a7.jpg",
      },
      {
        id: 42,
        name: "Great Soundtrack",
        slug: "great-soundtrack",
        language: "eng",
        games_count: 3410,
        image_background:
          "https://media.rawg.io/media/games/bc0/bc06a29ceac58652b684deefe7d56099.jpg",
      },
      {
        id: 42394,
        name: "Глубокий сюжет",
        slug: "glubokii-siuzhet",
        language: "rus",
        games_count: 13440,
        image_background:
          "https://media.rawg.io/media/games/b8c/b8c243eaa0fbac8115e0cdccac3f91dc.jpg",
      },
      {
        id: 118,
        name: "Story Rich",
        slug: "story-rich",
        language: "eng",
        games_count: 22579,
        image_background:
          "https://media.rawg.io/media/games/4be/4be6a6ad0364751a96229c56bf69be59.jpg",
      },
      {
        id: 42441,
        name: "От третьего лица",
        slug: "ot-tretego-litsa",
        language: "rus",
        games_count: 7620,
        image_background:
          "https://media.rawg.io/media/games/021/021c4e21a1824d2526f925eff6324653.jpg",
      },
      {
        id: 149,
        name: "Third Person",
        slug: "third-person",
        language: "eng",
        games_count: 12099,
        image_background:
          "https://media.rawg.io/media/games/618/618c2031a07bbff6b4f611f10b6bcdbc.jpg",
      },
      {
        id: 32,
        name: "Sci-fi",
        slug: "sci-fi",
        language: "eng",
        games_count: 19693,
        image_background:
          "https://media.rawg.io/media/games/951/951572a3dd1e42544bd39a5d5b42d234.jpg",
      },
      {
        id: 42423,
        name: "Научная фантастика",
        slug: "nauchnaia-fantastika",
        language: "rus",
        games_count: 8594,
        image_background:
          "https://media.rawg.io/media/games/490/49016e06ae2103881ff6373248843069.jpg",
      },
      {
        id: 6,
        name: "Exploration",
        slug: "exploration",
        language: "eng",
        games_count: 24128,
        image_background:
          "https://media.rawg.io/media/games/b54/b54598d1d5cc31899f4f0a7e3122a7b0.jpg",
      },
      {
        id: 189,
        name: "Female Protagonist",
        slug: "female-protagonist",
        language: "eng",
        games_count: 12994,
        image_background:
          "https://media.rawg.io/media/games/476/476178ef18ab0534771d099f51cdc694.jpg",
      },
      {
        id: 42404,
        name: "Женщина-протагонист",
        slug: "zhenshchina-protagonist",
        language: "rus",
        games_count: 2413,
        image_background:
          "https://media.rawg.io/media/games/1fb/1fb1c5f7a71d771f440b27ce7f71e7eb.jpg",
      },
      {
        id: 42402,
        name: "Насилие",
        slug: "nasilie",
        language: "rus",
        games_count: 5842,
        image_background:
          "https://media.rawg.io/media/games/1f1/1f1888e1308959dfd3be4c144a81d19c.jpg",
      },
      {
        id: 34,
        name: "Violent",
        slug: "violent",
        language: "eng",
        games_count: 6881,
        image_background:
          "https://media.rawg.io/media/games/744/744adc36e6573dd67a0cb0e373738d19.jpg",
      },
      {
        id: 69,
        name: "Action-Adventure",
        slug: "action-adventure",
        language: "eng",
        games_count: 17316,
        image_background:
          "https://media.rawg.io/media/games/c89/c89ca70716080733d03724277df2c6c7.jpg",
      },
      {
        id: 42520,
        name: "Реиграбельность",
        slug: "reigrabelnost",
        language: "rus",
        games_count: 2315,
        image_background:
          "https://media.rawg.io/media/games/21c/21cc15d233117c6809ec86870559e105.jpg",
      },
      {
        id: 42390,
        name: "Решения с последствиями",
        slug: "resheniia-s-posledstviiami",
        language: "rus",
        games_count: 6124,
        image_background:
          "https://media.rawg.io/media/games/d8f/d8f3b28fc747ed6f92943cdd33fb91b5.jpeg",
      },
      {
        id: 37796,
        name: "exclusive",
        slug: "exclusive",
        language: "eng",
        games_count: 4496,
        image_background:
          "https://media.rawg.io/media/games/1f5/1f5ddf7199f2778ff83663b93b5cb330.jpg",
      },
      {
        id: 5,
        name: "Replay Value",
        slug: "replay-value",
        language: "eng",
        games_count: 1766,
        image_background:
          "https://media.rawg.io/media/games/1f4/1f47a270b8f241e4676b14d39ec620f7.jpg",
      },
      {
        id: 145,
        name: "Choices Matter",
        slug: "choices-matter",
        language: "eng",
        games_count: 5914,
        image_background:
          "https://media.rawg.io/media/games/d8f/d8f3b28fc747ed6f92943cdd33fb91b5.jpeg",
      },
      {
        id: 110,
        name: "Cinematic",
        slug: "cinematic",
        language: "eng",
        games_count: 2370,
        image_background:
          "https://media.rawg.io/media/games/5c0/5c0dd63002cb23f804aab327d40ef119.jpg",
      },
      {
        id: 167,
        name: "Futuristic",
        slug: "futuristic",
        language: "eng",
        games_count: 5665,
        image_background:
          "https://media.rawg.io/media/games/ac2/ac25b5cef220bf5b8d052e0978451cab.jpg",
      },
      {
        id: 42451,
        name: "Будущее",
        slug: "budushchee",
        language: "rus",
        games_count: 3801,
        image_background:
          "https://media.rawg.io/media/games/f87/f87457e8347484033cb34cde6101d08d.jpg",
      },
      {
        id: 42470,
        name: "Киберпанк",
        slug: "kiberpank",
        language: "rus",
        games_count: 1949,
        image_background:
          "https://media.rawg.io/media/games/d37/d37e110ddcc0bd52d99f0f647b737a0a.jpg",
      },
      {
        id: 226,
        name: "Cyberpunk",
        slug: "cyberpunk",
        language: "eng",
        games_count: 4666,
        image_background:
          "https://media.rawg.io/media/games/5e4/5e4bff02098b2b6f824c68286d5da1a6.jpg",
      },
      {
        id: 218,
        name: "Multiple Endings",
        slug: "multiple-endings",
        language: "eng",
        games_count: 9205,
        image_background:
          "https://media.rawg.io/media/games/b2c/b2c9c6115114c8f7d461b5430e8a7d4a.jpg",
      },
      {
        id: 42623,
        name: "Кинематографичная",
        slug: "kinematografichnaia",
        language: "rus",
        games_count: 2277,
        image_background:
          "https://media.rawg.io/media/games/7a2/7a2500ee8b2c0e1ff268bb4479463dea.jpg",
      },
      {
        id: 42690,
        name: "Красивая",
        slug: "krasivaia",
        language: "rus",
        games_count: 587,
        image_background:
          "https://media.rawg.io/media/games/c47/c4796c4c49e7e06ad328e07aa8944cdd.jpg",
      },
      {
        id: 42508,
        name: "Нелинейность",
        slug: "nelineinost",
        language: "rus",
        games_count: 1017,
        image_background:
          "https://media.rawg.io/media/games/dc0/dc0926d3f84ffbcc00968fe8a6f0aed3.jpg",
      },
      {
        id: 197,
        name: "Robots",
        slug: "robots",
        language: "eng",
        games_count: 8350,
        image_background:
          "https://media.rawg.io/media/games/acc/acc3de7aaa850ad998d49b15f8901e23.jpg",
      },
      {
        id: 478,
        name: "3rd-Person Perspective",
        slug: "3rd-person-perspective",
        language: "eng",
        games_count: 87,
        image_background:
          "https://media.rawg.io/media/games/21c/21cc15d233117c6809ec86870559e105.jpg",
      },
      {
        id: 142,
        name: "Detective",
        slug: "detective",
        language: "eng",
        games_count: 3398,
        image_background:
          "https://media.rawg.io/media/games/be0/be084b850302abe81675bc4ffc08a0d0.jpg",
      },
      {
        id: 42630,
        name: "Роботы",
        slug: "roboty",
        language: "rus",
        games_count: 1943,
        image_background:
          "https://media.rawg.io/media/games/979/979155841412068e7adf8c83dee94a4a.jpg",
      },
      {
        id: 209,
        name: "Drama",
        slug: "drama",
        language: "eng",
        games_count: 4375,
        image_background:
          "https://media.rawg.io/media/games/5c5/5c5089af36b99bf9465357a8556449f9.jpg",
      },
      {
        id: 42691,
        name: "Эмоциональная",
        slug: "emotsionalnaia",
        language: "rus",
        games_count: 2996,
        image_background:
          "https://media.rawg.io/media/games/01a/01a74b440fba4dce445cc2ff11b99220.jpg",
      },
      {
        id: 42627,
        name: "Повествование",
        slug: "povestvovanie",
        language: "rus",
        games_count: 612,
        image_background:
          "https://media.rawg.io/media/games/bc6/bc6b163403504d0c041253749e233ed3.jpg",
      },
      {
        id: 200,
        name: "Narration",
        slug: "narration",
        language: "eng",
        games_count: 2237,
        image_background:
          "https://media.rawg.io/media/games/cd0/cd074f3f6045297cda9ad077273c09b6.jpg",
      },
      {
        id: 78,
        name: "America",
        slug: "america",
        language: "eng",
        games_count: 727,
        image_background:
          "https://media.rawg.io/media/screenshots/b79/b797325a14fc62444ca6032d59aa1c75.jpg",
      },
      {
        id: 572,
        name: "Emotional",
        slug: "emotional",
        language: "eng",
        games_count: 3110,
        image_background:
          "https://media.rawg.io/media/games/22a/22a3b2ddb5b344b1081cc28768f8ac84.jpg",
      },
      {
        id: 577,
        name: "Beautiful",
        slug: "beautiful",
        language: "eng",
        games_count: 1868,
        image_background:
          "https://media.rawg.io/media/games/158/158e3d88feea5b59bd8c48205a37e341.jpg",
      },
      {
        id: 42671,
        name: "Динамические повествование",
        slug: "dinamicheskie-povestvovanie",
        language: "rus",
        games_count: 165,
        image_background:
          "https://media.rawg.io/media/screenshots/9e0/9e04875493799e1a3c52e5b681aece03.jpg",
      },
      {
        id: 309,
        name: "Dynamic Narration",
        slug: "dynamic-narration",
        language: "eng",
        games_count: 476,
        image_background:
          "https://media.rawg.io/media/screenshots/4dd/4ddb74ac318d64e759fbf9dadfcf492b.jpg",
      },
      {
        id: 43374,
        name: "Remote Play on TV",
        slug: "remote-play-on-tv",
        language: "eng",
        games_count: 481,
        image_background:
          "https://media.rawg.io/media/games/0eb/0ebd25306a59a3ec8a2cd429298ec572.jpg",
      },
      {
        id: 19728,
        name: "european",
        slug: "european",
        language: "eng",
        games_count: 12,
        image_background:
          "https://media.rawg.io/media/screenshots/d14/d148f8ffc332b1d0f70be9bad91c2171.jpg",
      },
      {
        id: 2071,
        name: "futurism",
        slug: "futurism",
        language: "eng",
        games_count: 4,
        image_background:
          "https://media.rawg.io/media/games/47c/47c4398d9f910210ecb2114f1f82a2bf.jpg",
      },
    ],
    esrb_rating: {
      id: 4,
      name: "Mature",
      slug: "mature",
      name_en: "Mature",
      name_ru: "С 17 лет",
    },
    user_game: null,
    reviews_count: 3163,
    saturated_color: "0f0f0f",
    dominant_color: "0f0f0f",
    short_screenshots: [
      {
        id: -1,
        image:
          "https://media.rawg.io/media/games/951/951572a3dd1e42544bd39a5d5b42d234.jpg",
      },
      {
        id: 287043,
        image:
          "https://media.rawg.io/media/screenshots/fb7/fb7490f7764ba05e7984a970ee1918d5.jpg",
      },
      {
        id: 287044,
        image:
          "https://media.rawg.io/media/screenshots/586/586a30aeef1b41a80d781c742ab4fe68.jpg",
      },
      {
        id: 287045,
        image:
          "https://media.rawg.io/media/screenshots/5e2/5e2affea5ffc1a5c1ae8c5cc0c0c3ce1.jpg",
      },
      {
        id: 287046,
        image:
          "https://media.rawg.io/media/screenshots/631/6319d4cc8955831dfa50dcc4f231dc9b.jpg",
      },
      {
        id: 287047,
        image:
          "https://media.rawg.io/media/screenshots/9c3/9c33b6424ced85f84271a62356b74950.jpg",
      },
      {
        id: 287048,
        image:
          "https://media.rawg.io/media/screenshots/2d3/2d36bd87554caba0ae7462c6d17e605a.jpg",
      },
    ],
    parent_platforms: [
      {
        platform: {
          id: 1,
          name: "PC",
          slug: "pc",
        },
      },
      {
        platform: {
          id: 2,
          name: "PlayStation",
          slug: "playstation",
        },
      },
    ],
    genres: [
      {
        id: 3,
        name: "Adventure",
        slug: "adventure",
      },
      {
        id: 4,
        name: "Action",
        slug: "action",
      },
    ],
  },
  {
    slug: "prey",
    name: "Prey",
    playtime: 10,
    platforms: [
      {
        platform: {
          id: 4,
          name: "PC",
          slug: "pc",
        },
      },
      {
        platform: {
          id: 1,
          name: "Xbox One",
          slug: "xbox-one",
        },
      },
      {
        platform: {
          id: 18,
          name: "PlayStation 4",
          slug: "playstation4",
        },
      },
    ],
    stores: [
      {
        store: {
          id: 1,
          name: "Steam",
          slug: "steam",
        },
      },
      {
        store: {
          id: 3,
          name: "PlayStation Store",
          slug: "playstation-store",
        },
      },
      {
        store: {
          id: 2,
          name: "Xbox Store",
          slug: "xbox-store",
        },
      },
      {
        store: {
          id: 5,
          name: "GOG",
          slug: "gog",
        },
      },
      {
        store: {
          id: 11,
          name: "Epic Games",
          slug: "epic-games",
        },
      },
    ],
    released: "2017-05-05",
    tba: false,
    background_image:
      "https://media.rawg.io/media/games/e6d/e6de699bd788497f4b52e2f41f9698f2.jpg",
    rating: 4.28,
    rating_top: 5,
    ratings: [
      {
        id: 5,
        title: "exceptional",
        count: 1119,
        percent: 51.03,
      },
      {
        id: 4,
        title: "recommended",
        count: 735,
        percent: 33.52,
      },
      {
        id: 3,
        title: "meh",
        count: 258,
        percent: 11.76,
      },
      {
        id: 1,
        title: "skip",
        count: 81,
        percent: 3.69,
      },
    ],
    ratings_count: 2156,
    reviews_text_count: 22,
    added: 9754,
    added_by_status: {
      yet: 772,
      owned: 5912,
      beaten: 1558,
      toplay: 644,
      dropped: 644,
      playing: 224,
    },
    metacritic: 80,
    suggestions_count: 635,
    updated: "2024-09-29T10:20:35",
    id: 39,
    score: null,
    clip: null,
    tags: [
      {
        id: 31,
        name: "Singleplayer",
        slug: "singleplayer",
        language: "eng",
        games_count: 228522,
        image_background:
          "https://media.rawg.io/media/games/4be/4be6a6ad0364751a96229c56bf69be59.jpg",
      },
      {
        id: 42396,
        name: "Для одного игрока",
        slug: "dlia-odnogo-igroka",
        language: "rus",
        games_count: 52641,
        image_background:
          "https://media.rawg.io/media/games/942/9424d6bb763dc38d9378b488603c87fa.jpg",
      },
      {
        id: 42417,
        name: "Экшен",
        slug: "ekshen",
        language: "rus",
        games_count: 41787,
        image_background:
          "https://media.rawg.io/media/games/f87/f87457e8347484033cb34cde6101d08d.jpg",
      },
      {
        id: 42392,
        name: "Приключение",
        slug: "prikliuchenie",
        language: "rus",
        games_count: 39846,
        image_background:
          "https://media.rawg.io/media/games/b45/b45575f34285f2c4479c9a5f719d972e.jpg",
      },
      {
        id: 40847,
        name: "Steam Achievements",
        slug: "steam-achievements",
        language: "eng",
        games_count: 40163,
        image_background:
          "https://media.rawg.io/media/games/2ba/2bac0e87cf45e5b508f227d281c9252a.jpg",
      },
      {
        id: 40836,
        name: "Full controller support",
        slug: "full-controller-support",
        language: "eng",
        games_count: 19081,
        image_background:
          "https://media.rawg.io/media/games/4be/4be6a6ad0364751a96229c56bf69be59.jpg",
      },
      {
        id: 40849,
        name: "Steam Cloud",
        slug: "steam-cloud",
        language: "eng",
        games_count: 19108,
        image_background:
          "https://media.rawg.io/media/games/198/1988a337305e008b41d7f536ce9b73f6.jpg",
      },
      {
        id: 13,
        name: "Atmospheric",
        slug: "atmospheric",
        language: "eng",
        games_count: 34397,
        image_background:
          "https://media.rawg.io/media/games/120/1201a40e4364557b124392ee50317b99.jpg",
      },
      {
        id: 42400,
        name: "Атмосфера",
        slug: "atmosfera",
        language: "rus",
        games_count: 6083,
        image_background:
          "https://media.rawg.io/media/games/618/618c2031a07bbff6b4f611f10b6bcdbc.jpg",
      },
      {
        id: 7808,
        name: "steam-trading-cards",
        slug: "steam-trading-cards",
        language: "eng",
        games_count: 7569,
        image_background:
          "https://media.rawg.io/media/games/8cc/8cce7c0e99dcc43d66c8efd42f9d03e3.jpg",
      },
      {
        id: 42401,
        name: "Отличный саундтрек",
        slug: "otlichnyi-saundtrek",
        language: "rus",
        games_count: 4631,
        image_background:
          "https://media.rawg.io/media/games/d82/d82990b9c67ba0d2d09d4e6fa88885a7.jpg",
      },
      {
        id: 42,
        name: "Great Soundtrack",
        slug: "great-soundtrack",
        language: "eng",
        games_count: 3410,
        image_background:
          "https://media.rawg.io/media/games/bc0/bc06a29ceac58652b684deefe7d56099.jpg",
      },
      {
        id: 42394,
        name: "Глубокий сюжет",
        slug: "glubokii-siuzhet",
        language: "rus",
        games_count: 13440,
        image_background:
          "https://media.rawg.io/media/games/b8c/b8c243eaa0fbac8115e0cdccac3f91dc.jpg",
      },
      {
        id: 24,
        name: "RPG",
        slug: "rpg",
        language: "eng",
        games_count: 22061,
        image_background:
          "https://media.rawg.io/media/games/f87/f87457e8347484033cb34cde6101d08d.jpg",
      },
      {
        id: 42412,
        name: "Ролевая игра",
        slug: "rolevaia-igra",
        language: "rus",
        games_count: 18470,
        image_background:
          "https://media.rawg.io/media/games/021/021c4e21a1824d2526f925eff6324653.jpg",
      },
      {
        id: 118,
        name: "Story Rich",
        slug: "story-rich",
        language: "eng",
        games_count: 22579,
        image_background:
          "https://media.rawg.io/media/games/4be/4be6a6ad0364751a96229c56bf69be59.jpg",
      },
      {
        id: 42442,
        name: "Открытый мир",
        slug: "otkrytyi-mir",
        language: "rus",
        games_count: 6004,
        image_background:
          "https://media.rawg.io/media/games/e6d/e6de699bd788497f4b52e2f41f9698f2.jpg",
      },
      {
        id: 36,
        name: "Open World",
        slug: "open-world",
        language: "eng",
        games_count: 7819,
        image_background:
          "https://media.rawg.io/media/games/16b/16b1b7b36e2042d1128d5a3e852b3b2f.jpg",
      },
      {
        id: 42429,
        name: "От первого лица",
        slug: "ot-pervogo-litsa",
        language: "rus",
        games_count: 11729,
        image_background:
          "https://media.rawg.io/media/games/34b/34b1f1850a1c06fd971bc6ab3ac0ce0e.jpg",
      },
      {
        id: 8,
        name: "First-Person",
        slug: "first-person",
        language: "eng",
        games_count: 32655,
        image_background:
          "https://media.rawg.io/media/games/2ba/2bac0e87cf45e5b508f227d281c9252a.jpg",
      },
      {
        id: 32,
        name: "Sci-fi",
        slug: "sci-fi",
        language: "eng",
        games_count: 19693,
        image_background:
          "https://media.rawg.io/media/games/951/951572a3dd1e42544bd39a5d5b42d234.jpg",
      },
      {
        id: 42423,
        name: "Научная фантастика",
        slug: "nauchnaia-fantastika",
        language: "rus",
        games_count: 8594,
        image_background:
          "https://media.rawg.io/media/games/490/49016e06ae2103881ff6373248843069.jpg",
      },
      {
        id: 16,
        name: "Horror",
        slug: "horror",
        language: "eng",
        games_count: 45168,
        image_background:
          "https://media.rawg.io/media/games/e6d/e6de699bd788497f4b52e2f41f9698f2.jpg",
      },
      {
        id: 30,
        name: "FPS",
        slug: "fps",
        language: "eng",
        games_count: 13557,
        image_background:
          "https://media.rawg.io/media/games/198/1988a337305e008b41d7f536ce9b73f6.jpg",
      },
      {
        id: 42427,
        name: "Шутер от первого лица",
        slug: "shuter-ot-pervogo-litsa",
        language: "rus",
        games_count: 5540,
        image_background:
          "https://media.rawg.io/media/games/73e/73eecb8909e0c39fb246f457b5d6cbbe.jpg",
      },
      {
        id: 6,
        name: "Exploration",
        slug: "exploration",
        language: "eng",
        games_count: 24128,
        image_background:
          "https://media.rawg.io/media/games/b54/b54598d1d5cc31899f4f0a7e3122a7b0.jpg",
      },
      {
        id: 34,
        name: "Violent",
        slug: "violent",
        language: "eng",
        games_count: 6881,
        image_background:
          "https://media.rawg.io/media/games/744/744adc36e6573dd67a0cb0e373738d19.jpg",
      },
      {
        id: 42464,
        name: "Исследование",
        slug: "issledovanie",
        language: "rus",
        games_count: 2979,
        image_background:
          "https://media.rawg.io/media/games/0be/0bea0a08a4d954337305391b778a7f37.jpg",
      },
      {
        id: 15,
        name: "Stealth",
        slug: "stealth",
        language: "eng",
        games_count: 6417,
        image_background:
          "https://media.rawg.io/media/games/120/1201a40e4364557b124392ee50317b99.jpg",
      },
      {
        id: 42439,
        name: "Стелс",
        slug: "stels",
        language: "rus",
        games_count: 2277,
        image_background:
          "https://media.rawg.io/media/games/4e6/4e6e8e7f50c237d76f38f3c885dae3d2.jpg",
      },
      {
        id: 25,
        name: "Space",
        slug: "space",
        language: "eng",
        games_count: 43106,
        image_background:
          "https://media.rawg.io/media/games/174/1743b3dd185bda4a7be349347d4064df.jpg",
      },
      {
        id: 42422,
        name: "Космос",
        slug: "kosmos-2",
        language: "rus",
        games_count: 4450,
        image_background:
          "https://media.rawg.io/media/games/f87/f87457e8347484033cb34cde6101d08d.jpg",
      },
      {
        id: 42471,
        name: "Хоррор на выживание",
        slug: "khorror-na-vyzhivanie",
        language: "rus",
        games_count: 3324,
        image_background:
          "https://media.rawg.io/media/games/152/152e788b7504aa2753c86dae912fb34c.jpg",
      },
      {
        id: 17,
        name: "Survival Horror",
        slug: "survival-horror",
        language: "eng",
        games_count: 8685,
        image_background:
          "https://media.rawg.io/media/games/152/152e788b7504aa2753c86dae912fb34c.jpg",
      },
      {
        id: 167,
        name: "Futuristic",
        slug: "futuristic",
        language: "eng",
        games_count: 5665,
        image_background:
          "https://media.rawg.io/media/games/ac2/ac25b5cef220bf5b8d052e0978451cab.jpg",
      },
      {
        id: 172,
        name: "Aliens",
        slug: "aliens",
        language: "eng",
        games_count: 6923,
        image_background:
          "https://media.rawg.io/media/games/34b/34b1f1850a1c06fd971bc6ab3ac0ce0e.jpg",
      },
      {
        id: 42451,
        name: "Будущее",
        slug: "budushchee",
        language: "rus",
        games_count: 3801,
        image_background:
          "https://media.rawg.io/media/games/f87/f87457e8347484033cb34cde6101d08d.jpg",
      },
      {
        id: 42485,
        name: "Инопланетяне",
        slug: "inoplanetiane",
        language: "rus",
        games_count: 1992,
        image_background:
          "https://media.rawg.io/media/games/daa/daaee07fcb40744d90cf8142f94a241f.jpg",
      },
      {
        id: 216,
        name: "Heist",
        slug: "heist",
        language: "eng",
        games_count: 538,
        image_background:
          "https://media.rawg.io/media/games/d2b/d2b33b26e0d61aca35d434c8a69e3711.jpg",
      },
      {
        id: 42473,
        name: "Immersive Sim",
        slug: "immersive-sim-2",
        language: "eng",
        games_count: 3202,
        image_background:
          "https://media.rawg.io/media/games/e44/e445335e611b4ccf03af71fffcbd30a4.jpg",
      },
    ],
    esrb_rating: {
      id: 4,
      name: "Mature",
      slug: "mature",
      name_en: "Mature",
      name_ru: "С 17 лет",
    },
    user_game: null,
    reviews_count: 2193,
    saturated_color: "0f0f0f",
    dominant_color: "0f0f0f",
    short_screenshots: [
      {
        id: -1,
        image:
          "https://media.rawg.io/media/games/e6d/e6de699bd788497f4b52e2f41f9698f2.jpg",
      },
      {
        id: 243,
        image:
          "https://media.rawg.io/media/screenshots/9c6/9c673f6c2437854b3112868e986aba8c.jpg",
      },
      {
        id: 245,
        image:
          "https://media.rawg.io/media/screenshots/3d7/3d7b9ac75113f6fb3e3ceffbfae03483.jpg",
      },
      {
        id: 246,
        image:
          "https://media.rawg.io/media/screenshots/c0c/c0ca4b435c59c3af12b270d03ca565a5.jpg",
      },
      {
        id: 249,
        image:
          "https://media.rawg.io/media/screenshots/efa/efae873b6df0b9371b5bbf5f7dfe3ee7.jpg",
      },
      {
        id: 250,
        image:
          "https://media.rawg.io/media/screenshots/4ba/4baf33e8e47e6750b85942f49d21c427.jpg",
      },
      {
        id: 74409,
        image:
          "https://media.rawg.io/media/screenshots/b3e/b3e3f695d8d55acdc23904082edd42d6.jpg",
      },
    ],
    parent_platforms: [
      {
        platform: {
          id: 1,
          name: "PC",
          slug: "pc",
        },
      },
      {
        platform: {
          id: 2,
          name: "PlayStation",
          slug: "playstation",
        },
      },
      {
        platform: {
          id: 3,
          name: "Xbox",
          slug: "xbox",
        },
      },
    ],
    genres: [
      {
        id: 2,
        name: "Shooter",
        slug: "shooter",
      },
      {
        id: 4,
        name: "Action",
        slug: "action",
      },
      {
        id: 5,
        name: "RPG",
        slug: "role-playing-games-rpg",
      },
    ],
  },
  {
    slug: "the-elder-scrolls-v-skyrim-special-edition",
    name: "The Elder Scrolls V: Skyrim Special Edition",
    playtime: 9,
    platforms: [
      {
        platform: {
          id: 4,
          name: "PC",
          slug: "pc",
        },
      },
      {
        platform: {
          id: 1,
          name: "Xbox One",
          slug: "xbox-one",
        },
      },
      {
        platform: {
          id: 18,
          name: "PlayStation 4",
          slug: "playstation4",
        },
      },
    ],
    stores: [
      {
        store: {
          id: 1,
          name: "Steam",
          slug: "steam",
        },
      },
      {
        store: {
          id: 3,
          name: "PlayStation Store",
          slug: "playstation-store",
        },
      },
      {
        store: {
          id: 2,
          name: "Xbox Store",
          slug: "xbox-store",
        },
      },
    ],
    released: "2016-10-27",
    tba: false,
    background_image:
      "https://media.rawg.io/media/games/62c/62c7c8b28a27b83680b22fb9d33fc619.jpg",
    rating: 4.46,
    rating_top: 5,
    ratings: [
      {
        id: 5,
        title: "exceptional",
        count: 1136,
        percent: 59.29,
      },
      {
        id: 4,
        title: "recommended",
        count: 593,
        percent: 30.95,
      },
      {
        id: 3,
        title: "meh",
        count: 150,
        percent: 7.83,
      },
      {
        id: 1,
        title: "skip",
        count: 37,
        percent: 1.93,
      },
    ],
    ratings_count: 1907,
    reviews_text_count: 7,
    added: 9550,
    added_by_status: {
      yet: 294,
      owned: 7035,
      beaten: 1387,
      toplay: 122,
      dropped: 461,
      playing: 251,
    },
    metacritic: 74,
    suggestions_count: 457,
    updated: "2024-09-23T09:42:13",
    id: 12447,
    score: null,
    clip: null,
    tags: [
      {
        id: 31,
        name: "Singleplayer",
        slug: "singleplayer",
        language: "eng",
        games_count: 228522,
        image_background:
          "https://media.rawg.io/media/games/4be/4be6a6ad0364751a96229c56bf69be59.jpg",
      },
      {
        id: 42396,
        name: "Для одного игрока",
        slug: "dlia-odnogo-igroka",
        language: "rus",
        games_count: 52641,
        image_background:
          "https://media.rawg.io/media/games/942/9424d6bb763dc38d9378b488603c87fa.jpg",
      },
      {
        id: 42417,
        name: "Экшен",
        slug: "ekshen",
        language: "rus",
        games_count: 41787,
        image_background:
          "https://media.rawg.io/media/games/f87/f87457e8347484033cb34cde6101d08d.jpg",
      },
      {
        id: 42392,
        name: "Приключение",
        slug: "prikliuchenie",
        language: "rus",
        games_count: 39846,
        image_background:
          "https://media.rawg.io/media/games/b45/b45575f34285f2c4479c9a5f719d972e.jpg",
      },
      {
        id: 40847,
        name: "Steam Achievements",
        slug: "steam-achievements",
        language: "eng",
        games_count: 40163,
        image_background:
          "https://media.rawg.io/media/games/2ba/2bac0e87cf45e5b508f227d281c9252a.jpg",
      },
      {
        id: 40849,
        name: "Steam Cloud",
        slug: "steam-cloud",
        language: "eng",
        games_count: 19108,
        image_background:
          "https://media.rawg.io/media/games/198/1988a337305e008b41d7f536ce9b73f6.jpg",
      },
      {
        id: 13,
        name: "Atmospheric",
        slug: "atmospheric",
        language: "eng",
        games_count: 34397,
        image_background:
          "https://media.rawg.io/media/games/120/1201a40e4364557b124392ee50317b99.jpg",
      },
      {
        id: 42400,
        name: "Атмосфера",
        slug: "atmosfera",
        language: "rus",
        games_count: 6083,
        image_background:
          "https://media.rawg.io/media/games/618/618c2031a07bbff6b4f611f10b6bcdbc.jpg",
      },
      {
        id: 42401,
        name: "Отличный саундтрек",
        slug: "otlichnyi-saundtrek",
        language: "rus",
        games_count: 4631,
        image_background:
          "https://media.rawg.io/media/games/d82/d82990b9c67ba0d2d09d4e6fa88885a7.jpg",
      },
      {
        id: 42,
        name: "Great Soundtrack",
        slug: "great-soundtrack",
        language: "eng",
        games_count: 3410,
        image_background:
          "https://media.rawg.io/media/games/bc0/bc06a29ceac58652b684deefe7d56099.jpg",
      },
      {
        id: 42394,
        name: "Глубокий сюжет",
        slug: "glubokii-siuzhet",
        language: "rus",
        games_count: 13440,
        image_background:
          "https://media.rawg.io/media/games/b8c/b8c243eaa0fbac8115e0cdccac3f91dc.jpg",
      },
      {
        id: 24,
        name: "RPG",
        slug: "rpg",
        language: "eng",
        games_count: 22061,
        image_background:
          "https://media.rawg.io/media/games/f87/f87457e8347484033cb34cde6101d08d.jpg",
      },
      {
        id: 42412,
        name: "Ролевая игра",
        slug: "rolevaia-igra",
        language: "rus",
        games_count: 18470,
        image_background:
          "https://media.rawg.io/media/games/021/021c4e21a1824d2526f925eff6324653.jpg",
      },
      {
        id: 118,
        name: "Story Rich",
        slug: "story-rich",
        language: "eng",
        games_count: 22579,
        image_background:
          "https://media.rawg.io/media/games/4be/4be6a6ad0364751a96229c56bf69be59.jpg",
      },
      {
        id: 42442,
        name: "Открытый мир",
        slug: "otkrytyi-mir",
        language: "rus",
        games_count: 6004,
        image_background:
          "https://media.rawg.io/media/games/e6d/e6de699bd788497f4b52e2f41f9698f2.jpg",
      },
      {
        id: 36,
        name: "Open World",
        slug: "open-world",
        language: "eng",
        games_count: 7819,
        image_background:
          "https://media.rawg.io/media/games/16b/16b1b7b36e2042d1128d5a3e852b3b2f.jpg",
      },
      {
        id: 42429,
        name: "От первого лица",
        slug: "ot-pervogo-litsa",
        language: "rus",
        games_count: 11729,
        image_background:
          "https://media.rawg.io/media/games/34b/34b1f1850a1c06fd971bc6ab3ac0ce0e.jpg",
      },
      {
        id: 8,
        name: "First-Person",
        slug: "first-person",
        language: "eng",
        games_count: 32655,
        image_background:
          "https://media.rawg.io/media/games/2ba/2bac0e87cf45e5b508f227d281c9252a.jpg",
      },
      {
        id: 42441,
        name: "От третьего лица",
        slug: "ot-tretego-litsa",
        language: "rus",
        games_count: 7620,
        image_background:
          "https://media.rawg.io/media/games/021/021c4e21a1824d2526f925eff6324653.jpg",
      },
      {
        id: 149,
        name: "Third Person",
        slug: "third-person",
        language: "eng",
        games_count: 12099,
        image_background:
          "https://media.rawg.io/media/games/618/618c2031a07bbff6b4f611f10b6bcdbc.jpg",
      },
      {
        id: 40845,
        name: "Partial Controller Support",
        slug: "partial-controller-support",
        language: "eng",
        games_count: 12124,
        image_background:
          "https://media.rawg.io/media/games/d46/d46373f39458670305704ef089387520.jpg",
      },
      {
        id: 42480,
        name: "Фэнтези",
        slug: "fentezi",
        language: "rus",
        games_count: 12498,
        image_background:
          "https://media.rawg.io/media/games/21a/21ad672cedee9b4378abb6c2d2e626ee.jpg",
      },
      {
        id: 64,
        name: "Fantasy",
        slug: "fantasy",
        language: "eng",
        games_count: 28745,
        image_background:
          "https://media.rawg.io/media/games/ee3/ee3e10193aafc3230ba1cae426967d10.jpg",
      },
      {
        id: 42461,
        name: "Классика",
        slug: "klassika",
        language: "rus",
        games_count: 1461,
        image_background:
          "https://media.rawg.io/media/games/6c5/6c55e22185876626881b76c11922b073.jpg",
      },
      {
        id: 193,
        name: "Classic",
        slug: "classic",
        language: "eng",
        games_count: 1797,
        image_background:
          "https://media.rawg.io/media/games/14a/14a83c56ff668baaced6e8c8704b6391.jpg",
      },
      {
        id: 189,
        name: "Female Protagonist",
        slug: "female-protagonist",
        language: "eng",
        games_count: 12994,
        image_background:
          "https://media.rawg.io/media/games/476/476178ef18ab0534771d099f51cdc694.jpg",
      },
      {
        id: 42404,
        name: "Женщина-протагонист",
        slug: "zhenshchina-protagonist",
        language: "rus",
        games_count: 2413,
        image_background:
          "https://media.rawg.io/media/games/1fb/1fb1c5f7a71d771f440b27ce7f71e7eb.jpg",
      },
      {
        id: 15,
        name: "Stealth",
        slug: "stealth",
        language: "eng",
        games_count: 6417,
        image_background:
          "https://media.rawg.io/media/games/120/1201a40e4364557b124392ee50317b99.jpg",
      },
      {
        id: 42439,
        name: "Стелс",
        slug: "stels",
        language: "rus",
        games_count: 2277,
        image_background:
          "https://media.rawg.io/media/games/4e6/4e6e8e7f50c237d76f38f3c885dae3d2.jpg",
      },
      {
        id: 62,
        name: "Moddable",
        slug: "moddable",
        language: "eng",
        games_count: 964,
        image_background:
          "https://media.rawg.io/media/games/d58/d588947d4286e7b5e0e12e1bea7d9844.jpg",
      },
      {
        id: 42438,
        name: "Поддержка модификаций",
        slug: "podderzhka-modifikatsii",
        language: "rus",
        games_count: 775,
        image_background:
          "https://media.rawg.io/media/games/46d/46d98e6910fbc0706e2948a7cc9b10c5.jpg",
      },
      {
        id: 42530,
        name: "Кастомизация персонажа",
        slug: "kastomizatsiia-personazha",
        language: "rus",
        games_count: 4274,
        image_background:
          "https://media.rawg.io/media/games/9bf/9bfac18ff678f41a4674250fa0e04a52.jpg",
      },
      {
        id: 121,
        name: "Character Customization",
        slug: "character-customization",
        language: "eng",
        games_count: 5048,
        image_background:
          "https://media.rawg.io/media/games/511/5116b4524cea34c6b3f12e0ca027d850.jpg",
      },
      {
        id: 42555,
        name: "Симулятор ходьбы",
        slug: "simuliator-khodby",
        language: "rus",
        games_count: 3029,
        image_background:
          "https://media.rawg.io/media/games/883/883bc3050f9a4115d1968ece56bddfc2.jpg",
      },
      {
        id: 91,
        name: "Walking Simulator",
        slug: "walking-simulator",
        language: "eng",
        games_count: 7462,
        image_background:
          "https://media.rawg.io/media/games/a28/a289e23b4d4d84f26ab59125e3be4483.jpg",
      },
      {
        id: 82,
        name: "Magic",
        slug: "magic",
        language: "eng",
        games_count: 9792,
        image_background:
          "https://media.rawg.io/media/games/ee3/ee3e10193aafc3230ba1cae426967d10.jpg",
      },
      {
        id: 42478,
        name: "Магия",
        slug: "magiia",
        language: "rus",
        games_count: 4427,
        image_background:
          "https://media.rawg.io/media/games/c7a/c7a71a0531a9518236d99d0d60abe447.jpg",
      },
      {
        id: 42466,
        name: "Римейк",
        slug: "rimeik",
        language: "rus",
        games_count: 206,
        image_background:
          "https://media.rawg.io/media/games/1f1/1f1888e1308959dfd3be4c144a81d19c.jpg",
      },
      {
        id: 271,
        name: "Remake",
        slug: "remake",
        language: "eng",
        games_count: 1708,
        image_background:
          "https://media.rawg.io/media/games/587/587588c64afbff80e6f444eb2e46f9da.jpg",
      },
      {
        id: 215,
        name: "Dragons",
        slug: "dragons",
        language: "eng",
        games_count: 2653,
        image_background:
          "https://media.rawg.io/media/games/dc0/dc0926d3f84ffbcc00968fe8a6f0aed3.jpg",
      },
      {
        id: 42614,
        name: "Драконы",
        slug: "drakony",
        language: "rus",
        games_count: 743,
        image_background:
          "https://media.rawg.io/media/games/260/26023c855f1769a93411d6a7ea084632.jpeg",
      },
    ],
    esrb_rating: {
      id: 4,
      name: "Mature",
      slug: "mature",
      name_en: "Mature",
      name_ru: "С 17 лет",
    },
    user_game: null,
    reviews_count: 1916,
    saturated_color: "0f0f0f",
    dominant_color: "0f0f0f",
    short_screenshots: [
      {
        id: -1,
        image:
          "https://media.rawg.io/media/games/62c/62c7c8b28a27b83680b22fb9d33fc619.jpg",
      },
      {
        id: 104301,
        image:
          "https://media.rawg.io/media/screenshots/e38/e387d8f781c00520eccb5934b95f1720.jpg",
      },
      {
        id: 104302,
        image:
          "https://media.rawg.io/media/screenshots/d48/d48ce46dd0dfd32c374c4e8c09dd370c.jpg",
      },
      {
        id: 104303,
        image:
          "https://media.rawg.io/media/screenshots/8d4/8d4ad7d58d614d82e3933f69095e6b23.jpg",
      },
      {
        id: 104304,
        image:
          "https://media.rawg.io/media/screenshots/dd3/dd340c1c2c146f41d48f505a58dada09.jpg",
      },
      {
        id: 104305,
        image:
          "https://media.rawg.io/media/screenshots/ae1/ae167fabd67a73cac9ef8c99690572bf.jpg",
      },
      {
        id: 104306,
        image:
          "https://media.rawg.io/media/screenshots/e8b/e8b57630f5924da6633a07777f1a8c7a.jpg",
      },
    ],
    parent_platforms: [
      {
        platform: {
          id: 1,
          name: "PC",
          slug: "pc",
        },
      },
      {
        platform: {
          id: 2,
          name: "PlayStation",
          slug: "playstation",
        },
      },
      {
        platform: {
          id: 3,
          name: "Xbox",
          slug: "xbox",
        },
      },
    ],
    genres: [
      {
        id: 4,
        name: "Action",
        slug: "action",
      },
      {
        id: 5,
        name: "RPG",
        slug: "role-playing-games-rpg",
      },
    ],
  },
];
