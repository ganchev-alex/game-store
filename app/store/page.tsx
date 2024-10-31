import TitleFilter from "@/components/store_page_components/title_filter/TitleFilter";
import AsideFilter from "@/components/store_page_components/aside_filter/AsideFilter";
import MainFilter from "@/components/store_page_components/main_filter/MainFilter";
import StoreGrid from "@/components/store_page_components/store_grid/StoreGrid";

import { IGameResult } from "@/utility/interfaces/IGameResult";

import styles from "./Store.module.scss";

const fetchData = async function name() {
  try {
    const response = await fetch(
      `${process.env.API_ROOT}/games?key=${process.env.API_KEY}&page_size=40&ordering=-metacritics&dates=2024-01-01,2024-12-31&platforms=4,5,1,18,7,3`,
      { cache: "force-cache" }
    );

    if (response.ok) {
      return (await response.json()).results as IGameResult[];
    }

    return [];
  } catch (error) {
    return [];
  }
};

export default async function Store() {
  const gameRecords = await fetchData();

  return (
    <>
      <TitleFilter />
      <div className={styles["hidder"]} />
      <div className={styles.layout}>
        <AsideFilter />
        <div className={styles["layout__prime-column"]}>
          <MainFilter />
          <StoreGrid gameRecords={gameRecords} />
        </div>
      </div>
    </>
  );
}
