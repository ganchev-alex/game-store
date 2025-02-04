import GameSlot from "./GameSlot";

import { IGameResult } from "@/utility/interfaces/IGameResult";

import styles from "./StoreGrid.module.scss";

const StoreGrid: React.FC<{ gamesData: IGameResult[] }> = function ({
  gamesData,
}) {
  return (
    <main className={styles.grid}>
      {gamesData.map((dataSet) => (
        <GameSlot key={dataSet.id} gameData={dataSet} />
      ))}
    </main>
  );
};

export default StoreGrid;
