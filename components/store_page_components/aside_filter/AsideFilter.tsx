import styles from "./AsideFilter.module.scss";
import { genres, tags } from "../../../utility/data/filter-sections";
import FilterSection from "./FilterSection";

const AsideFilter = function () {
  return (
    <aside className={styles.filter}>
      <FilterSection
        title="Genres"
        dataSet={genres}
        paramKey="genres"
        untoggled={true}
      />
      <FilterSection title="Themes" dataSet={tags} paramKey="tags" />
    </aside>
  );
};

export default AsideFilter;
