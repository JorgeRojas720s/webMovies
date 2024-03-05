import { useEffect, useState } from "react";
import { get } from "../data/httpClient";
import { MovieCard } from "../components/MovieCard";
import "./ContextMovieCard.css"

export function ContextMovieCard() {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    get("/discover/movie").then((data) => {
      setMovies(data.results);
      console.log(data);
    });
  }, []);

  return (
    <ul className="moviesContainer">
      {movies.map((movie, key) => {
        console.log(movie.poster_path);
        return (
          <div>
            <MovieCard
              title={movie.title}
              image={movie.backdrop_path}
              key={key}
            />
          </div>
        );
      })}
    </ul>
  );
}
