"use client";
import { useState, useEffect } from "react";

import SaleCard from "./SaleCard";

import styles from "./FlashSale.module.scss";
import { IGameResult } from "../../../utility/interfaces/IGameResult";

const FlashSale: React.FC<{ flashSaleData: IGameResult[] }> = function ({
  flashSaleData,
}) {
  const [timeLeft, setTimeLeft] = useState(0);

  useEffect(() => {
    setTimeLeft(calculateTimeLeft());

    const timer = setInterval(() => {
      setTimeLeft((prevTime) => (prevTime > 1000 ? prevTime - 1000 : 0));
    }, 1000);
    return () => clearInterval(timer);
  }, []);
  return (
    <>
      <span className={styles.title}>
        <h2>Flash Sale</h2>
        <h4 suppressHydrationWarning>Ends is: {formatTime(timeLeft)} hours</h4>
      </span>
      <section className={styles.sale}>
        {flashSaleData.map((gameData) => (
          <SaleCard
            key={gameData.id}
            gameTitle={gameData.name}
            thumb={gameData.background_image}
          />
        ))}
      </section>
    </>
  );
};

const calculateTimeLeft = () => {
  const now = new Date();
  const currentHour = now.getHours();

  const total32Hours = 32 * 60 * 60 * 1000;
  const hoursPassedToday = currentHour * 60 * 60 * 1000;

  return total32Hours - hoursPassedToday;
};

const formatTime = (milliseconds: number) => {
  const totalSeconds = Math.floor(milliseconds / 1000);
  const hours = Math.floor(totalSeconds / 3600);
  const minutes = Math.floor((totalSeconds % 3600) / 60);
  const seconds = totalSeconds % 60;

  return `${hours.toString().padStart(2, "0")}:${minutes
    .toString()
    .padStart(2, "0")}:${seconds.toString().padStart(2, "0")}`;
};

export default FlashSale;
