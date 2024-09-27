"use client";
import Link from "next/link";
import Image from "next/image";

import styles from "./PrimaryNavigation.module.scss";

import tokenSrc from "../../../public/assets/icons/token.png";
import { usePathname } from "next/navigation";

const PrimaryNavigationBar: React.FC = function () {
  const path = usePathname();

  const linkData = [
    { label: "Store", path: "/store" },
    { label: "Cart", path: "/cart" },
    { label: "About", path: "/about" },
  ];

  return (
    <nav className={styles.navigation}>
      <Link href={"/"} className={styles["navigation__home"]}>
        <Image src={tokenSrc} alt="Site Logo" width={35} height={35} />
        <h3>Game Store</h3>
      </Link>
      {linkData.map((set, key) => (
        <Link
          key={key}
          href={set.path}
          className={`${styles["navigation__link"]} ${
            path === set.path ? styles["navigation__link--active"] : ""
          }`}
        >
          {set.label}
        </Link>
      ))}
    </nav>
  );
};

export default PrimaryNavigationBar;
