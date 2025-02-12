import Image from "next/image";

import { IGameResult } from "@/utility/interfaces/IGameResult";

import styles from "./Additions.module.scss";
import { getRandomSalePrice } from "@/utility/functions/pricesManagement";

const Additions: React.FC<{ additions: IGameResult[]; fallBackImage: string }> =
  function ({ additions, fallBackImage }) {
    return (
      <section className={styles.additions}>
        <h3 className={styles["additions__title"]}>Editions & Add-Ons</h3>
        {additions.map((a) => {
          const { salePrice, actualPrice, percentage } = getRandomSalePrice(
            [
              59.99, 49.99, 25.99, 25.99, 25.99, 14.99, 14.99, 14.99, 14.99,
              10.99, 10.99, 10.99, 10.99, 10.99,
            ],
            [0, 0, 0, 0, 0, 10, 10, 10, 20, 20, 20, 25, 25, 50]
          );

          return (
            <div className={styles["additions__preview"]}>
              <Image
                src={a.background_image || fallBackImage}
                alt={`${a.name} Thumb.`}
                width={1920}
                height={1080}
              />
              <div className={styles["additions__details"]}>
                <h5>{a.name}</h5>
                <h6>
                  Released On: <span>{a.released.split("T")[0]}</span>
                </h6>
              </div>
              <div className={styles["additions__payment"]}>
                <span className={styles["additions__prices"]}>
                  {percentage > 0 && (
                    <>
                      <p className={styles["additions__prices--discount"]}>
                        -{percentage}%
                      </p>
                      <p className={styles["additions__prices--old"]}>
                        {salePrice}€
                      </p>
                    </>
                  )}
                  <p className={styles["additions__prices--current"]}>
                    {actualPrice}€
                  </p>
                </span>
                <button>Add to Cart</button>
              </div>
            </div>
          );
        })}
      </section>
    );
  };

export default Additions;
