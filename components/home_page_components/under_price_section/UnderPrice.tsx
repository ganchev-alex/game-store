import Half from "./Half";

import { IGameResult } from "@/utility/interfaces/IGameResult";
import style from "./UnderPrice.module.scss";

const UnderPrice: React.FC<{ underPrice: IGameResult[] }> = function ({
  underPrice,
}) {
  return (
    <section className={style.section}>
      <Half gameData={underPrice.slice(0, 6)} heading={"Under € 10"} />
      <Half gameData={underPrice.slice(6)} heading="Under € 20" />
    </section>
  );
};

export default UnderPrice;
