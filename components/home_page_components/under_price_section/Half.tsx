import PriceCard from "./PriceCard";

import styles from "./Half.module.scss";
import { IGameResult } from "@/utility/interfaces/IGameResult";

const Half: React.FC<{ heading: string; gameData: IGameResult[] }> = function ({
  heading,
  gameData,
}) {
  return (
    <div className={styles.wrapper}>
      <h4 className={styles["wrapper__title"]}>{heading}</h4>
      <div className={styles["wrapper__grid"]}>
        {gameData.map((game) => (
          <PriceCard
            key={game.id}
            gameData={game}
            isUnderTen={heading.includes("10")}
          />
        ))}
      </div>
    </div>
  );
};

export default Half;
