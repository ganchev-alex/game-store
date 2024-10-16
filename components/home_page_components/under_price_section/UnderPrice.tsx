"use client";
import { useEffect, useState } from "react";

import Half from "./Half";

import { IGameResult } from "@/utility/interfaces/IGameResult";
import { getRandomPrice } from "@/utility/functions/pricesManagement";
import style from "./UnderFile.module.scss";

const UnderPrice: React.FC<{ underPrice: IGameResult[]; price: 20 | 10 }> =
  function ({ underPrice }) {
    const [price, setPrice] = useState(0);

    useEffect(() => {
      if (price === 10) {
        setPrice(
          getRandomPrice([2.99, 5.99, 5.99, 6.99, 6.99, 8.99, 8.99, 9.99, 9.99])
        );
      }
      if (price === 20) {
        setPrice(getRandomPrice([10.99, 15.99, 19.99]));
      }
    }, []);

    return (
      <section className={style.section}>
        <Half gameData={underPrice.slice(0, 6)} heading="Under € 10" />
        <Half gameData={underPrice.slice(6)} heading="Under € 20" />
      </section>
    );
  };

export default UnderPrice;
