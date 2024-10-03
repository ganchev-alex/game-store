"use client";

import { useState, useEffect } from "react";
import { easeIn, motion } from "framer-motion";

import styles from "./CardSlot.module.scss";
import { IGameResult } from "@/utility/interfaces/IGameResult";

const CardSlot: React.FC<{ gameData: IGameResult; primaryOffer: boolean }> =
  function ({ gameData, primaryOffer }) {
    const [countDown, setCountDown] = useState(getTimeRemaining(!primaryOffer));
    const [priceData, setPriceData] = useState({
      salePrice: "",
      actualPrice: 0,
      percentage: 0,
    });

    useEffect(() => {
      const interval = setInterval(() => {
        setCountDown(getTimeRemaining(!primaryOffer));
      }, 1000);

      setPriceData(getRandomSalePrice());

      return () => clearInterval(interval);
    }, []);

    return (
      <motion.div
        className={styles.card}
        initial={{ opacity: 0.4 }}
        animate={{ opacity: 1 }}
        transition={{
          duration: 0.3,
          ease: "easeInOut",
        }}
        key={gameData.id}
      >
        <div className={styles["card__thumb"]}>
          <div />
          <img src={gameData.background_image} />
        </div>
        <div className={styles.display}>
          <span className={styles["display__titles"]}>
            <h5>{gameData.name}</h5>
            <p>
              {primaryOffer
                ? `Weekly Offer Ends in: ${countDown.days} days and ${padZero(
                    countDown.hours
                  )}:${padZero(countDown.minutes)}:${padZero(
                    countDown.seconds
                  )} hours`
                : `Daily Offer Ends In: ${padZero(countDown.hours)}:${padZero(
                    countDown.minutes
                  )}:${padZero(countDown.seconds)} hours`}
            </p>
          </span>
          <span className={styles["display__pricing"]}>
            <div className={styles["display__discount"]}>
              <p>- {priceData.percentage}%</p>
            </div>
            <div className={styles["display__prices"]}>
              <p>€ {priceData.actualPrice}</p>
              <p>€ {priceData.salePrice}</p>
            </div>
          </span>
        </div>
      </motion.div>
    );
  };

function padZero(num: number) {
  return num < 10 ? `0${num}` : num.toString();
}

function getTimeRemaining(daily: boolean) {
  const now = new Date();

  if (daily) {
    const endOfDay = new Date(
      now.getFullYear(),
      now.getMonth(),
      now.getDate(),
      23,
      59,
      59,
      999
    );
    const timeDiff = endOfDay.getTime() - now.getTime();

    const hours = Math.floor(timeDiff / (1000 * 60 * 60));
    const minutes = Math.floor((timeDiff % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((timeDiff % (1000 * 60)) / 1000);

    return { hours, minutes, seconds };
  } else {
    const dayOfWeek = now.getDay();
    const daysRemaining = 6 - dayOfWeek;

    const endOfWeek = new Date(
      now.getFullYear(),
      now.getMonth(),
      now.getDate() + daysRemaining,
      23,
      59,
      59,
      999
    );
    const timeDiff = endOfWeek.getTime() - now.getTime();

    const days = Math.floor(timeDiff / (1000 * 60 * 60 * 24));
    const hours = Math.floor(
      (timeDiff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
    );
    const minutes = Math.floor((timeDiff % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((timeDiff % (1000 * 60)) / 1000);

    return { days, hours, minutes, seconds };
  }
}

function getRandomSalePrice() {
  const prices = [59.99, 49.99, 39.99];
  const percentages = [
    10, 10, 10, 10, 10, 10, 25, 25, 25, 25, 25, 50, 50, 50, 50, 60, 90,
  ];

  const price = prices[Math.floor(Math.random() * prices.length)];
  const percentage =
    percentages[Math.floor(Math.random() * percentages.length)];

  return {
    salePrice: (price - price * (percentage / 100)).toFixed(2),
    actualPrice: price,
    percentage,
  };
}

export default CardSlot;
