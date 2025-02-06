"use client";

import Image from "next/image";
import Link from "next/link";
import { useSearchParams } from "next/navigation";

import styles from "./Pagination.module.scss";
import arrowSrc from "../../../public/assets/icons/arrow.png";

const Pagination: React.FC<{ currentPage: number; totalPages: number }> =
  function ({ currentPage, totalPages }) {
    const searchParams = useSearchParams();

    const createPageLink = (page: number) => {
      const params = new URLSearchParams(searchParams);
      params.set("page", page.toString());
      return `?${params.toString()}`;
    };

    return (
      <nav className={styles["pagination"]}>
        {currentPage > 1 && (
          <Link
            href={createPageLink(currentPage - 1)}
            className={styles["pagination__arrow"]}
          >
            <Image src={arrowSrc} alt="Previous Page" />
          </Link>
        )}
        {currentPage > 2 && <Link href={createPageLink(1)}>1</Link>}
        {currentPage - 1 >= 3 && (
          <button className={styles["pagination__indicator"]} disabled>
            ...
          </button>
        )}
        {currentPage - 1 > 0 && (
          <Link href={createPageLink(currentPage - 1)}>{currentPage - 1}</Link>
        )}
        <button className={styles["pagination__active"]}>{currentPage}</button>
        {currentPage + 1 < totalPages && (
          <Link href={createPageLink(currentPage + 1)}>{currentPage + 1}</Link>
        )}
        {totalPages - currentPage >= 3 && (
          <button className={styles["pagination__indicator"]} disabled>
            ...
          </button>
        )}
        {currentPage < totalPages && (
          <Link href={createPageLink(totalPages)}>{totalPages}</Link>
        )}
        {currentPage < totalPages && (
          <Link
            href={createPageLink(currentPage + 1)}
            className={styles["pagination__arrow"]}
          >
            <Image src={arrowSrc} alt="Next Page" />
          </Link>
        )}
      </nav>
    );
  };

export default Pagination;
