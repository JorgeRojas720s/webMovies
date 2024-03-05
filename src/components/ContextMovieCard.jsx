import { useEffect, useState } from "react";
import { get } from "../data/httpClient";
import { MovieCard } from "../components/MovieCard";
import "./ContextMovieCard.css";

export function ContextMovieCard() {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    get("/discover/movie").then((data) => {
      console.log(data);
      setMovies(data.results);
    });
  }, []);

  return (
    <ul className="moviesContainer">
      {movies.map((movie) => {
        console.log(movie.poster_path);
        return (
          <div key={movie.id}>
            <MovieCard 
            id={movie.id}
            title={movie.title} 
            image={movie.backdrop_path} 
            />
          </div>
        );
      })}
    </ul>
  );
}
