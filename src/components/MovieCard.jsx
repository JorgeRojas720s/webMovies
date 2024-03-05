import "./MovieCard.css";
import { Link } from "react-router-dom";

export function MovieCard(props) {
  const url = "https://image.tmdb.org/t/p/w300";

  return (
    <li className="movieCard">
      <Link to={"/movies/"+props.id}>
        <img
          className="movieImage"
          width={280}
          height={180}
          src={url + props.image}
          alt={props.title}
        />
        <h3>{props.title}</h3>
      </Link>
    </li>
  );
}
