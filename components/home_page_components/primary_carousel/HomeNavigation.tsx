"use client";

import { useState, useEffect } from "react";
import { IGameResult } from "@/utility/interfaces/IGameResult";
import Link from "next/link";
import Image from "next/image";

import styles from "./HomeNavigation.module.scss";

import searchSrc from "../../../public/assets/icons/search.png";
import SearchResults from "@/components/store_page_components/search/SearchResults";

const HomeNavigation: React.FC<{
  customTopOffset?: number;
  customWidth?: number;
}> = function ({ customTopOffset, customWidth }) {
  const [search, setSearch] = useState("");
  const [results, setResults] = useState<IGameResult[]>([]);

  const searchForResults = async function () {
    console.log(search);
    try {
      const response = await fetch(
        `${"https://api.rawg.io/api"}/games?key=${
          process.env.NEXT_PUBLIC_KEY
        }&search=${search}&platforms=1,4,5,7,18`
      );

      const responseData = await response.json();
      if (response.ok) {
        setResults((responseData.results as IGameResult[]).slice(0, 3));
      } else {
        setResults([]);
      }
    } catch {
      setResults([]);
    }
  };

  useEffect(() => {
    search === "" && setResults([]);

    const indicator = setTimeout(() => {
      search !== "" && searchForResults();
    }, 150);

    return () => {
      clearTimeout(indicator);
    };
  }, [search]);

  return (
    <nav
      className={styles.navigation}
      style={{
        top: customTopOffset ? `${customTopOffset}em` : undefined,
        width: customWidth ? `${customWidth}%` : undefined,
      }}
    >
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
        <input
          type="search"
          placeholder="Search"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
        <button>
          <Image
            src={searchSrc}
            alt=""
            height={20}
            width={20}
            draggable={false}
          />
        </button>
        {search && (
          <SearchResults
            searchResults={results}
            resetSearch={() => setSearch("")}
          />
        )}
      </span>
    </nav>
  );
};

export default HomeNavigation;
