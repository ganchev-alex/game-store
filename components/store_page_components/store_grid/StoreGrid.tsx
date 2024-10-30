import GameSlot from "./GameSlot";

import styles from "./StoreGrid.module.scss";

const StoreGrid: React.FC = function () {
  return (
    <main className={styles.grid}>
      <GameSlot />
      <GameSlot />
      <GameSlot />
      <GameSlot />
      <GameSlot />
      <GameSlot />
      <GameSlot />
      <GameSlot />
      <GameSlot />
    </main>
  );
};

export default StoreGrid;
