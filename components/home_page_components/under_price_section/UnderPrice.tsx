import { Variants } from "framer-motion";

import Half from "./Half";

import { IGameResult } from "@/utility/interfaces/IGameResult";
import style from "./UnderPrice.module.scss";

const UnderPrice: React.FC<{
  underPrice: IGameResult[];
  scrollVariantsLeft: Variants;
  scrollVariantsRigth: Variants;
}> = function ({ underPrice, scrollVariantsLeft, scrollVariantsRigth }) {
  return (
    <section className={style.section}>
      <Half
        gameData={underPrice.slice(0, 6)}
        heading={"Under € 10"}
        scrollVariants={scrollVariantsLeft}
      />
      <Half
        gameData={underPrice.slice(6)}
        heading="Under € 20"
        scrollVariants={scrollVariantsRigth}
      />
    </section>
  );
};

export default UnderPrice;
