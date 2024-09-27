import { motion } from "framer-motion";
import Image from "next/image";

import plusSrc from "../../../public/assets/icons/plus.png";

import styles from "./CarouselSlot.module.scss";

const CarouselSlot: React.FC<{
  title: string;
  logo: string;
  stateTag: string;
  description: string;
  price: number;
  discount?: number;
}> = function (props) {
  return (
    <motion.section
      key={props.logo}
      initial={{ x: 70 }}
      animate={{ x: 0 }}
      transition={{
        duration: 0.5,
        ease: "backOut",
      }}
      className={styles.slot}
    >
      <img
        id="game-logo"
        src={props.logo}
        alt={`${props.title} logo`}
        className={styles["slot__logo"]}
      />
      <span className={styles["slot__status"]}>{props.stateTag}</span>
      <p className={styles["slot__description"]}>{props.description}</p>
      <span className={styles["slot__price"]}>Starting at {props.price} $</span>
      <menu className={styles["slot__buttons"]}>
        <button>Buy Now</button>
        <button>
          <Image src={plusSrc} alt="Plus Sign" width={28} height={28} />
          Wishlist
        </button>
      </menu>
    </motion.section>
  );
};

export default CarouselSlot;
