import GameCard from "./GameCard";

import styles from "./Column.module.scss";
import { IGameResult } from "@/utility/interfaces/IGameResult";

const Column: React.FC<{ sectionTitle: string; gamesData: IGameResult[] }> =
  function ({ sectionTitle, gamesData }) {
    return (
      <div className={styles.column}>
        <div className={styles["column__title"]}>
          <h5>{sectionTitle}</h5>
          <button>See More</button>
        </div>
        {gamesData.map((game) => (
          <GameCard gameData={game} isUpcoming={sectionTitle === "Upcoming"} />
        ))}
      </div>
    );
  };

export default Column;
