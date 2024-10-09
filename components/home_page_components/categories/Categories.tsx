import Column from "./Column";

import styles from "./Categories.module.scss";
import { IGameResult } from "@/utility/interfaces/IGameResult";

const Categories: React.FC<{
  newAndTrending: IGameResult[];
  topSellers: IGameResult[];
  upcoming: IGameResult[];
}> = function ({ newAndTrending, topSellers, upcoming }) {
  return (
    <section className={styles.section}>
      <Column sectionTitle="New & Trending" gamesData={newAndTrending} />
      <Column sectionTitle="Top Sellers" gamesData={topSellers} />
      <Column sectionTitle="Upcoming" gamesData={upcoming} />
    </section>
  );
};

export default Categories;
