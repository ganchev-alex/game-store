import styles from "./Genre.module.scss";

const Genre: React.FC<{ genre: string; thumb: string; filterColor: string }> =
  function ({ genre, thumb, filterColor }) {
    return (
      <div className={styles.genre}>
        <div
          className={styles["genre__filter"]}
          style={{ background: filterColor }}
        />
        <img src={thumb} className={styles["genre__thumb"]} />
        <h4 className={styles["genre__title"]}>{genre}</h4>
      </div>
    );
  };

export default Genre;
