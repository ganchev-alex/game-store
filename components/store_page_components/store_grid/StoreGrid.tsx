"use client";
import { IGameResult } from "@/utility/interfaces/IGameResult";
import GameSlot from "./GameSlot";

import styles from "./StoreGrid.module.scss";

const StoreGrid: React.FC<{ gameRecords: IGameResult[] }> = function ({
  gameRecords,
}) {
  console.log(gameRecords);

  return (
    <main className={styles.grid}>
      {gameRecords.length != 0 &&
        gameRecords.map((record) => (
          <GameSlot key={record.id} gameData={record} />
        ))}
    </main>
  );
};

export default StoreGrid;
