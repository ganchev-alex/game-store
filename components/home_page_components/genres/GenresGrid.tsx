import Genre from "./Genre";

import styles from "./GenresGrid.module.scss";
import { genres as genreData } from "../../../utility/data/genres";

const GenresGrid: React.FC = function () {
  return (
    <>
      <h2 className={styles.title}>Browse By Genre or Theme</h2>
      <section className={styles.grid}>
        {genreData.map((genreData, index) => (
          <Genre
            key={index}
            genre={genreData.genre}
            thumb={genreData.thumb}
            filterColor={genreData.filterColor}
          />
        ))}
      </section>
    </>
  );
};

export default GenresGrid;
