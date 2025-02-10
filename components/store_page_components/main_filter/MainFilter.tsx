"use client";
import { useEffect, useState } from "react";
import Image from "next/image";
import { useRouter, useSearchParams } from "next/navigation";

import styles from "./MainFilter.module.scss";

import anySrc from "../../../public/assets/icons/any-platform.png";
import windowsSrc from "../../../public/assets/icons/windows-platform-logo.png";
import macSrc from "../../../public/assets/icons/mac-os-logo.png";

import steamSrc from "../../../public/assets/icons/steam.png";
import epicGamesSrc from "../../../public/assets/icons/epic-games.png";
import gogSrc from "../../../public/assets/icons/gog.png";
import itchSrc from "../../../public/assets/icons/itch-io.png";
import xboxSrc from "../../../public/assets/icons/xbox-logo.png";
import playStationSrc from "../../../public/assets/icons/play-station.png";
import nintendoSrc from "../../../public/assets/icons/nintendo-switch.png";

const platformsSrc = [
  { src: anySrc, alt: "Any Platform Filter", id: 0 },
  { src: windowsSrc, alt: "Windows Platform Filter", id: 4 },
  { src: macSrc, alt: "Mac Platform Filter", id: 5 },
  { src: xboxSrc, alt: "Xbox Store Filter", id: 1 },
  { src: playStationSrc, alt: "PlayStation Store Filter", id: 18 },
  { src: nintendoSrc, alt: "Nintendo Store Filter", id: 7 },
];

const storesSrc = [
  { src: steamSrc, alt: "Steam Store Filter", id: 1 },
  { src: epicGamesSrc, alt: "Epic Games Store Filter", id: 11 },
  { src: gogSrc, alt: "GOG Store Filter", id: 5 },
  { src: itchSrc, alt: "Itch IO Store Filter", id: 9 },
];

const options = [
  { value: "default", label: "Popularity" },
  { value: "released", label: "Release Date" },
  { value: "metacritic", label: "Avg. Rating" },
  { value: "name", label: "Name" },
];

const MainFilter: React.FC = function () {
  const searchParams = useSearchParams();
  const router = useRouter();
  const [orderingValue, setOrderingValue] = useState<string | undefined>(
    "default"
  );

  const params = new URLSearchParams(searchParams);

  const applyOrdering = function (orderingId: string) {
    switch (orderingId) {
      case "name":
        params.set("ordering", "name");
        break;
      case "released":
        params.set("ordering", "-released");
        break;
      case "metacritic":
        params.set("ordering", "-metacritic");
        break;
      case "default":
      default:
        params.delete("ordering");
        break;
    }

    params.set("page", "1");
    router.push(`?${params.toString()}`, { scroll: false });
  };

  const updateSingleChoiceFiltering = function (key: string, value: string) {
    params.set(key, value);
    params.set("page", "1");
    router.push(`?${params.toString()}`, { scroll: false });
  };

  const updateMultipleChoiceFiltering = function (key: string, value: string) {
    const existingSelection = params.get(key)?.split(",") || [];

    if (existingSelection.includes(value)) {
      const newSelection = existingSelection.filter((v) => v !== value);
      if (newSelection.length) {
        params.set(key, newSelection.join(","));
      } else {
        params.delete(key);
      }
    } else {
      existingSelection.push(value);
      params.set(key, existingSelection.join(","));
    }

    params.set("page", "1");
    router.push(`?${params.toString()}`, { scroll: false });
  };

  useEffect(() => {
    const presetOrdering = params.get("ordering");
    if (presetOrdering) {
      setOrderingValue(
        options.find((o) => o.value.includes(presetOrdering))?.value
      );
    }
  }, []);

  return (
    <menu className={styles.filter}>
      <div className={styles["filter__sub"]}>
        <div className={styles.property}>
          <h6 className={styles["filter__label"]}>Systems</h6>
          {platformsSrc.map((platform, index) => {
            let isActive;
            const platformSelection = params.get("platforms")?.split(",");
            if (index === 0) {
              isActive = platformSelection && platformSelection.length > 1;
            } else {
              isActive =
                platformSelection &&
                platformSelection.length === 1 &&
                platformSelection[0] === platform.id.toString();
            }

            return (
              <button
                key={index}
                style={
                  isActive ? { opacity: 1, transform: "translate(0)" } : {}
                }
                className={`${styles["property__button"]} ${styles["property__button--disabled"]}`}
                onClick={() => {
                  if (index === 0) {
                    params.set("platforms", "1,4,5,7,18");
                    params.set("page", "1");
                    router.push(`?${params.toString()}`, { scroll: false });
                  } else {
                    updateSingleChoiceFiltering(
                      "platforms",
                      platform.id.toString()
                    );
                  }
                }}
              >
                <Image src={platform.src} alt={platform.alt} />
                {index === 0 && (
                  <span style={{ margin: "0 7.5px 0 5.5px" }}>Any</span>
                )}
              </button>
            );
          })}
        </div>
        <div className={styles.property} style={{ border: "none" }}>
          <h6 className={styles["filter__label"]}>Store Partners</h6>
          {storesSrc.map((store, index) => {
            const isActive = params
              .get("stores")
              ?.split(",")
              .includes(store.id.toString());

            return (
              <button
                key={index}
                style={
                  isActive ? { opacity: 1, transform: "translate(0)" } : {}
                }
                className={`${styles["property__button"]} ${styles["property__button--disabled"]}`}
                onClick={() => {
                  updateMultipleChoiceFiltering("stores", store.id.toString());
                }}
              >
                <Image src={store.src} alt={store.alt} />
              </button>
            );
          })}
        </div>
      </div>
      <div className={styles["filter__select-wrapper"]}>
        <label htmlFor="order" className={styles["filter__select-label"]}>
          Order by:
        </label>
        <select
          name="order"
          id="order"
          className={styles["filter__select"]}
          value={orderingValue}
          onChange={(e) => {
            setOrderingValue(e.target.value);
            applyOrdering(e.target.value);
          }}
        >
          {options.map((option) => (
            <option value={option.value} key={option.value}>
              {option.label}
            </option>
          ))}
        </select>
      </div>
    </menu>
  );
};

export default MainFilter;
