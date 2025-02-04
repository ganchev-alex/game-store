import TitleFilter from "@/components/store_page_components/title_filter/TitleFilter";
import AsideFilter from "@/components/store_page_components/aside_filter/AsideFilter";
import MainFilter from "@/components/store_page_components/main_filter/MainFilter";
import StoreGrid from "@/components/store_page_components/store_grid/StoreGrid";

import { IGameResult } from "@/utility/interfaces/IGameResult";

import styles from "./Store.module.scss";
import Pagination from "@/components/store_page_components/pagination/Pagination";

const fetchStorePage = async function (page: number) {
  try {
    const response = await fetch(
      `${process.env.API_ROOT}/games?key=${
        process.env.API_KEY
      }&page_size=${20}&page=${page}`,
      {
        cache: "force-cache",
      }
    );

    if (response.ok) {
      const responseData = await response.json();
      return {
        totalResults: responseData.count as number,
        gamesData: responseData.results as IGameResult[],
      };
    }

    return { totalResults: 0, gamesData: [] as IGameResult[] };
  } catch {
    return { totalResults: 0, gamesData: [] as IGameResult[] };
  }
};

export default async function Store({
  searchParams,
}: {
  searchParams: { [key: string]: string | string[] | undefined };
}) {
  const currentPage = Number(searchParams.page) || 1;
  const { totalResults, gamesData } = await fetchStorePage(currentPage);

  return (
    <>
      <TitleFilter />
      <div className={styles["hidder"]} />
      <div className={styles.layout}>
        <AsideFilter />
        <div className={styles["layout__prime-column"]}>
          <MainFilter />
          <StoreGrid gamesData={gamesData} />
          <Pagination
            currentPage={currentPage}
            totalPages={Math.round(totalResults / 20)}
          />
        </div>
      </div>
    </>
  );
}
