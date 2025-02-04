import styles from "./AsideFilter.module.scss";
import {
  topCharts,
  newRealeses,
  genres,
  tags,
} from "../../../utility/data/filter-sections";
import FilterSection from "./FilterSection";

const AsideFilter = function () {
  return (
    <aside className={styles.filter}>
      <FilterSection title="Top Charts" dataSet={topCharts} untoggled={true} />
      <FilterSection
        title="New & Trending"
        dataSet={newRealeses}
        untoggled={true}
      />
      <FilterSection title="Genres" dataSet={genres} />
      <FilterSection title="Themes" dataSet={tags} />
    </aside>
  );
};

export default AsideFilter;
