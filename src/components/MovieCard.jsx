import "./MovieCard.css"


export function MovieCard(props) {
  const url = "https://image.tmdb.org/t/p/w300";

  return (
    <li className="movieCard">
      <img className="movieImage" width={280} height={180} src={url + props.image} alt={props.title}/>
      <h3>{props.title}</h3>
    </li>
  );
}
