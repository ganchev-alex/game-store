"use client";
import Image from "next/image";

import styles from "./Footer.module.scss";
import gitHubSrc from "../../../public/assets/icons/github.png";
import linkedSrc from "../../../public/assets/icons/linkedin.png";
import topSrc from "../../../public/assets/icons/top.png";

const Footer: React.FC = function () {
  return (
    <footer className={styles.footer}>
      <button
        className={styles["footer__top-button"]}
        onClick={() => {
          window.scrollTo(0, 0);
        }}
      >
        <Image src={topSrc} alt="Go To The Top" />
      </button>
      <div className={styles["footer__links"]}>
        <div className={styles["footer__column"]}>
          <h6>Company</h6>
          <ul>
            <li>About Game Store</li>
            <li>Jobs</li>
            <li>Support</li>
            <li>Social</li>
          </ul>
        </div>
        <div className={styles["footer__column"]}>
          <h6>Partners</h6>
          <ul>
            <li>Steam</li>
            <li>Blizzard</li>
            <li>Nintedo Games</li>
            <li>Origin</li>
            <li>Epic Games</li>
          </ul>
        </div>
        <div className={styles["footer__column"]}>
          <h6>Game Store</h6>
          <ul>
            <li>Workshop</li>
            <li>Distribution</li>
            <li>Gift Cards</li>
          </ul>
        </div>
        <div className={styles["footer__column"]}>
          <h6>Legal</h6>
          <ul>
            <li>Privacy Policy</li>
            <li>Subrscriber Agreement</li>
            <li>Refunds</li>
            <li>Cookies</li>
          </ul>
        </div>
      </div>
      <div className={styles["footer__bottom"]}>
        <div className={styles["footer__credentials"]}>
          <h5>Game Store</h5>
          <h6>Alex Ganchev</h6>
        </div>
        <p>
          ©2024 A. Ganchev. All Rights Reserved. The data presented in this demo
          project is provided by the public API of{" "}
          <a href="https://rawg.io/apidocs" target="_blank">
            RAWG Company
          </a>
          .
        </p>
      </div>
      <div className={styles["footer__contacts"]}>
        <Image
          src={gitHubSrc}
          alt="Git Link"
          onClick={() =>
            window.open(
              "https://github.com/ganchev-alex?tab=repositories",
              "_blank"
            )
          }
        />
        <Image
          src={linkedSrc}
          alt="LinkedIn Link"
          onClick={() =>
            window.open("https://www.linkedin.com/in/alex-ganchev", "_blank")
          }
        />
      </div>
    </footer>
  );
};

export default Footer;
