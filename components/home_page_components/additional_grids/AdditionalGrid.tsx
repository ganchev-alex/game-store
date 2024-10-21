import DisplayCard from "../flash_sales/DisplayCard";

import styles from "./AdditionalGrid.module.scss";
import { IGameResult } from "@/utility/interfaces/IGameResult";

const AdditionalGrid: React.FC<{ title: string; gamesData: IGameResult[] }> =
  function ({ title, gamesData }) {
    return (
      <>
        <h2
          className={styles.title}
          style={title.includes("VR") ? { marginTop: "2.7em" } : {}}
        >
          {title}
        </h2>
        <section className={styles.grid}>
          {gamesData.map((gameData) => (
            <DisplayCard
              key={gameData.id}
              gameTitle={gameData.name}
              thumb={gameData.background_image}
              saleMode={true}
            />
          ))}
        </section>
      </>
    );
  };

export default AdditionalGrid;
