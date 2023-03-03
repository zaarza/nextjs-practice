import { MainLayout } from "@/layouts";
import styles from "@/styles/components/Home.module.scss";

export default function Home() {
  return (
    <MainLayout title="Home">
      <div className={styles.home}>
        <div className={styles.home__header}>
          <h1 className={styles.home__title}>Hello World!</h1>
          <ul className={styles.home__items}>
            <li className={styles.home__item}>getStaticProps</li>
            <li className={styles.home__item}>getStaticPath</li>
            <li className={styles.home__item}>404 page</li>
            <li className={styles.home__item}>UseSWR</li>
          </ul>
        </div>
      </div>
    </MainLayout>
  );
}
