import TitleFilter from "@/components/store_page_components/title_filter/TitleFilter";
import AsideFilter from "@/components/store_page_components/aside_filter/AsideFilter";
import MainFilter from "@/components/store_page_components/main_filter/MainFilter";

import styles from "./Store.module.scss";

export default function Store() {
  return (
    <>
      <TitleFilter />
      <div className={styles["hidder"]} />
      <main className={styles.layout}>
        <AsideFilter />
        <MainFilter />
      </main>
    </>
  );
}
