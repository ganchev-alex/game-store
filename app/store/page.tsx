import TitleFilter from "@/components/store_page_components/title_filter/TitleFilter";
import AsideFilter from "@/components/store_page_components/aside_filter/AsideFilter";
import MainFilter from "@/components/store_page_components/main_filter/MainFilter";
import StoreGrid from "@/components/store_page_components/store_grid/StoreGrid";

import styles from "./Store.module.scss";

export default function Store() {
  return (
    <>
      <TitleFilter />
      <div className={styles["hidder"]} />
      <div className={styles.layout}>
        <AsideFilter />
        <div className={styles["layout__prime-column"]}>
          <MainFilter />
          <StoreGrid />
        </div>
      </div>
    </>
  );
}
