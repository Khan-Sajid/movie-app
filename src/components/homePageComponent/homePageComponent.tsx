"use client";
import React, { useEffect, useRef, useState } from "react";
import Header from "../header/header";
import Footer from "../footer/footer";
import MovieCard from "../movieCard/movieCard";
import styles from "./homePageComponent.module.scss";
import { getPopularMovieList } from "@/utils/service";
import { useIntersectionObserver } from "@/hooks/useIntersectionObserver";

const HomePageComponent = ({ popularMovieData }: any) => {
  const [loading, setLoading] = useState(false);
  const [data, setData] = useState(popularMovieData?.results);
  const [page, setPage] = useState(1);
  const bottomDivRef = useRef(null);
  const observer = useIntersectionObserver(bottomDivRef, {});

  const fetchData = async () => {
    // Fetch data from an API
    setLoading(true);
    const popularMovieDataRes = await getPopularMovieList({ page: page + 1 });
    setPage(page + 1);
    setData((prevData: any) => [...prevData, ...popularMovieDataRes?.results]);
    setLoading(false);
  };

  useEffect(() => {
    // Event listener for scrolling
    if (observer?.isIntersecting) {
      fetchData();
    }
  }, [observer?.isIntersecting]);

  return (
    <>
      <Header />
      <div className={styles.cardsContainer}>
        {data?.map((movieCardData: any, index: number) => {
          return (
            <MovieCard
              key={movieCardData?.id + index}
              movieCardData={movieCardData}
            />
          );
        })}
        <div ref={bottomDivRef}>{loading && <div>Loading...</div>}</div>
      </div>
      <Footer />
    </>
  );
};

export default HomePageComponent;
