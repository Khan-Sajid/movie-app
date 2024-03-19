import { getPopularMovieList } from "@/utils/service";
import styles from "./page.module.css";
import HomePageComponent from "@/components/homePageComponent/homePageComponent";
import Script from "next/script";

export default async function Home() {
  const popularMovieData = await getPopularMovieList({});
  console.log("popularMovieData", popularMovieData);

  return (
    <>
      <main className={styles.main}>
        <HomePageComponent popularMovieData={popularMovieData} />
      </main>
    </>
  );
}
