"use client";
import React, { useEffect, useRef, useState } from "react";
import styles from "./movieCard.module.scss";
import { URL } from "@/utils/constants";
import { useIntersectionObserver } from "@/hooks/useIntersectionObserver";
import { useDebounce } from "@/hooks/useDebounce";
import { getMovieVideo } from "@/utils/service";

const MovieCard = ({ movieCardData }: any) => {
  const imageContainer = useRef(null);
  const observer = useIntersectionObserver(imageContainer, {
    rootMargin: "-28% 0% -70% 0%",
  });
  const value = useDebounce(observer?.isIntersecting, 500);
  const [videoData, setVideoData] = useState<any>();
  const videoID = videoData?.[videoData?.length - 1]?.key;

  useEffect(() => {
    if (value && !videoData) {
      (async () => {
        const videoDataRes = await getMovieVideo(movieCardData?.id);
        if (videoDataRes && videoDataRes?.results) {
          setVideoData(videoDataRes?.results);
        }
      })();
    }
  }, [value]);

  if (!movieCardData) return <></>;
  return (
    <div>
      <div ref={imageContainer} className={styles.imageContainer}>
        {!videoData || !observer?.isIntersecting ? (
          <>
            <img src={URL.IMAGE_URL + movieCardData.backdrop_path} />
            <div className={styles.nameDiv}>{movieCardData.title}</div>
          </>
        ) : (
          <iframe
            id="ytplayer"
            src={`https://www.youtube.com/embed/${videoID}?autoplay=1&mute=1`}
            allow="autoplay"
            frameBorder="0"
            allowFullScreen
          ></iframe>
        )}
      </div>
      <div></div>
    </div>
  );
};

export default MovieCard;
