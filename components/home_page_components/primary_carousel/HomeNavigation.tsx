import Link from "next/link";
import Image from "next/image";

import styles from "./HomeNavigation.module.scss";

import searchSrc from "../../../public/assets/icons/search.png";

const HomeNavigation: React.FC = function () {
  return (
    <nav className={styles.navigation}>
      <span className={styles.links}>
        <div className={styles["links__prime"]}>
          <Link href="#">Your Store</Link>
          <div className={styles["links__dropdown"]}>
            <Link href="/">Home</Link>
            <Link href="#">Discovery Queue</Link>
            <Link href="#">New Releases Queue</Link>
            <Link href="#">Wishlist</Link>
            <Link href="#">Community Recommendation</Link>
          </div>
        </div>
        <div className={styles["links__prime"]}>
          <Link href="#">New & Noteworthy</Link>
          <div className={styles["links__dropdown"]}>
            <Link href="/">Most Played</Link>
            <Link href="#">Top Sellers</Link>
            <Link href="#">New Realeases</Link>
            <Link href="#">Upcoming Releases</Link>
            <Link href="#">Special Offers</Link>
          </div>
        </div>

        <Link href="#">Categories</Link>
      </span>
      <span className={styles["navigation__search"]}>
        <input type="search" placeholder="Search" />
        <button>
          <Image
            src={searchSrc}
            alt=""
            height={20}
            width={20}
            draggable={false}
          />
        </button>
      </span>
    </nav>
  );
};

export default HomeNavigation;
