"use client";

import { useEffect, useState } from "react";
import Image from "next/image";

import { IGameResult } from "@/utility/interfaces/IGameResult";

import styles from "./TitleFilter.module.scss";
import gridSrc from "../../../public/assets/icons/grid_display.png";
import signleSrc from "../../../public/assets/icons/single_display.png";
import mangifierSrc from "../../../public/assets/icons/magnifying-glass.png";
import SearchResults from "../search/SearchResults";

const TitleFilter: React.FC<{ totalResults: number }> = function ({
  totalResults,
}) {
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
    <header className={styles.heading}>
      <h3>{totalResults.toLocaleString()} results</h3>
      <div className={styles.controls}>
        <button className={styles["controls__layout"]}>
          <Image src={gridSrc} alt="Grid Layout" />
        </button>
        <button
          className={`${styles["controls__layout"]} ${styles["controls__layout--disabled"]}`}
        >
          <Image src={signleSrc} alt="Single Card Layout" />
        </button>
        <div className={styles["controls__search"]}>
          <Image src={mangifierSrc} alt="Search" />
          <input
            type="search"
            placeholder="Search for a game title"
            onChange={(e) => setSearch(e.target.value)}
          />
          {search && (
            <SearchResults
              searchResults={results}
              resetSearch={() => setSearch("")}
            />
          )}
        </div>
      </div>
    </header>
  );
};

export default TitleFilter;
