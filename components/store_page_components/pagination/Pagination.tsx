import Image from "next/image";
import Link from "next/link";

import styles from "./Pagination.module.scss";
import arrowSrc from "../../../public/assets/icons/arrow.png";

const Pagination: React.FC<{ currentPage: number; totalPages: number }> =
  function ({ currentPage, totalPages }) {
    return (
      <nav className={styles["pagination"]}>
        {currentPage > 1 && (
          <Link
            href={`?page=${currentPage - 1}`}
            className={styles["pagination__arrow"]}
          >
            <Image src={arrowSrc} alt="Descrease Page" />
          </Link>
        )}
        {currentPage > 2 && <Link href={"?page=1"}>1</Link>}
        {currentPage - 1 >= 3 && (
          <button className={styles["pagination__indicator"]} disabled>
            ...
          </button>
        )}
        {currentPage - 1 > 0 && (
          <Link href={`?page=${currentPage - 1}`}>{currentPage - 1}</Link>
        )}
        <button className={styles["pagination__active"]}>{currentPage}</button>
        {currentPage + 1 < totalPages && (
          <Link href={`?page=${currentPage + 1}`}>{currentPage + 1}</Link>
        )}
        {totalPages - currentPage >= 3 && (
          <button className={styles["pagination__indicator"]} disabled>
            ...
          </button>
        )}
        {currentPage < totalPages && (
          <Link href={`?page=${totalPages}`}>{totalPages}</Link>
        )}
        {currentPage < totalPages && (
          <Link
            href={`?page=${currentPage + 1}`}
            className={`${styles["pagination__arrow"]}`}
          >
            <Image src={arrowSrc} alt="Increase Page" />
          </Link>
        )}
      </nav>
    );
  };

export default Pagination;
