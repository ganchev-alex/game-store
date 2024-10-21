import Image from "next/image";

import styles from "./LoginBanner.module.scss";
import avatarsSrc from "../../../public/assets/images/login_banner.png";

const LoginBanner: React.FC = function () {
  return (
    <section className={styles.banner}>
      <div className={styles["banner__content"]}>
        <div className={styles.text}>
          <h4 className={styles["text__title"]}>
            Looking for recommendations?
          </h4>
          <p className={styles["text__p1"]}>
            Sing in to view personalized recommendations.
          </p>
          <button className={styles["text__button"]}>Sing In</button>
          <p className={styles["text__p2"]}>
            Don't have an account? <a>Sign In</a> and join Game Store for free.
          </p>
        </div>
        <Image
          src={avatarsSrc}
          alt="Log In Banner"
          className={styles["banner__avatars"]}
          draggable={false}
        />
      </div>
    </section>
  );
};

export default LoginBanner;
