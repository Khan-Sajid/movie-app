import React, { useState } from "react";
import styles from "./sideDrawerComponent.module.scss";

const Genres = [
  "Action",
  "Adventure",
  "Comedy",
  "Animation",
  "Crime",
  "Documentary",
  "Drama",
  "Family",
  "Fantasy",
  "History",
  "Horror",
  "Music",
  "Romance",
  "Thriller",
  "War",
  "Western",
  "Science Fiction",
];

const languages = [
  "English",
  "Hindi",
  "Marathi",
  "Tamil",
  "Telugu",
  "Gujarati",
];

const SideDrawerComponent = ({ closeDrawer }: { closeDrawer: () => void }) => {
  const [selectedGenre, setSelectedGenre] = useState<string[]>([]);

  const updateSelectedGenre = (genre: string) => {
    if (selectedGenre.includes(genre)) {
      const filteredGenres = selectedGenre.filter(
        (genreElement) => genreElement !== genre
      );
      setSelectedGenre(filteredGenres);
    } else {
      const updatedGenre: string[] = [...selectedGenre, genre];
      setSelectedGenre([...updatedGenre]);
    }
  };

  return (
    <div className={styles.sideDrawer}>
      <h2>{"Sort & Filter"}</h2>
      <div className={styles.contentDiv}>
        <h3>Release Dates</h3>
        <div>
          <input type="checkbox" /> Search All Releases
        </div>
        <div className={styles.selectDate}>
          <label htmlFor="fromDate">from</label>
          <input type="date" id="fromDate" />
        </div>
        <div className={styles.selectDate}>
          <label htmlFor="toDate">to</label>
          <input type="date" id="toDate" />
        </div>
      </div>
      <div className={styles.contentDiv}>
        <h3>Genres</h3>
        {Genres.map((genre) => (
          <button
            className={`${styles.genre} ${
              selectedGenre.includes(genre) ? styles.active : ""
            }`}
            key={genre}
            onClick={() => updateSelectedGenre(genre)}
          >
            {genre}
          </button>
        ))}
      </div>
      <div className={styles.contentDiv}>
        <h3>
          Language <span></span>
        </h3>
        <select name="language">
          <option value="">None Selected</option>
          {languages.map((language) => (
            <option value={language} key={language}>
              {language}
            </option>
          ))}
        </select>
      </div>
      <div className={styles.contentDiv}>
        <h3>User Score</h3>
        <input type="range" min={0} max={10} />
      </div>
      <button
        type="submit"
        className={styles.submitButton}
        onClick={closeDrawer}
      >
        Search
      </button>
    </div>
  );
};

export default SideDrawerComponent;
