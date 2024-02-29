export function MovieCard(props){
    const url = "https://image.tmdb.org/t/p/w300";

    return (
     <div>
        <img className="image" src={url+props.image}/> 
        <h3>{props.title}</h3>
     </div>
    )
}

