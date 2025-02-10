import Image from "next/image";

import { IGameResult } from "@/utility/interfaces/IGameResult";

import styles from "./SearchResults.module.scss";
import windowsSrc from "../../../public/assets/icons/windows-platform-logo.png";
import macSrc from "../../../public/assets/icons/mac-os-logo.png";
import xboxSrc from "../../../public/assets/icons/xbox-logo.png";
import playStationSrc from "../../../public/assets/icons/play-station.png";
import nintendoSrc from "../../../public/assets/icons/nintendo-switch.png";

const SearchResults: React.FC<{
  searchResults: IGameResult[];
  resetSearch: () => void;
}> = function ({ searchResults, resetSearch }) {
  return (
    <>
      <div className={styles.results}>
        {searchResults.map((r) => (
          <div className={styles["slot"]}>
            <img className={styles["slot__thumb"]} src={r.background_image} />
            <div>
              <h4>{r.name}</h4>
              <span className={styles["slot__platforms"]}>
                {r.platforms?.some(
                  (platform) => platform.platform.id === 4
                ) && <Image src={windowsSrc} alt="Windows Logo" />}
                {r.platforms.some((platform) => platform.platform.id === 5) && (
                  <Image src={macSrc} alt="MacOS Logo" />
                )}
                {r.platforms.some((platform) => platform.platform.id === 1) && (
                  <Image src={xboxSrc} alt="Xbox Logo" />
                )}
                {r.platforms.some(
                  (platform) => platform.platform.id === 18
                ) && <Image src={playStationSrc} alt="Play Station Logo" />}
                {r.platforms.some((platform) => platform.platform.id === 7) && (
                  <Image src={nintendoSrc} alt="Nindendo Logo" />
                )}
              </span>
              <div className={styles["slot__details"]}>
                <span>
                  <h6>Genres:</h6>
                  <p>
                    {r.genres
                      .slice(0, 3)
                      .map((g) => g.name)
                      .join(", ")}
                  </p>
                </span>
                <span>
                  <h6>Metacritics:</h6>
                  <p>{r.metacritic} / 100</p>
                </span>
                <button>View More</button>
              </div>
            </div>
          </div>
        ))}
      </div>
      <div className={styles["results__backdrop"]} onClick={resetSearch} />
    </>
  );
};

export default SearchResults;
