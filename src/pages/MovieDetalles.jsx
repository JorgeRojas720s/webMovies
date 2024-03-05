import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { get } from "../data/httpClient";
import { getMovieImg } from "../utils/getMovieImg";

export function MovieDetalles() {
  const { movieId } = useParams();
  const [movie, setMovie] = useState([]);
  const [generos, setGeneros] = useState([]);

  useEffect(() => {
    get("/movie/" + movieId).then((data) => {
      console.log(data.backdrop_path);
      setMovie(data);
      setGeneros(data.genres[0]);
    });
  }, [movieId]);

  console.log(movie.poster_path);
  const imageUrl = getMovieImg(movie.backdrop_path, 400);

  return (
    <div>
      <img src={imageUrl} alt={movie.title} />
      <div>
        <p>
          <strong>Title: </strong>
          {movie.title}
        </p>
        <p>
          <strong>Genero: </strong>
          {generos.name}
        </p>
        <p>
          <strong>Descripcion: </strong>
          {movie.overview}
        </p>
      </div>
    </div>
  );
}
