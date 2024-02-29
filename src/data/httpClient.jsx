const API = "https://api.themoviedb.org/3"

export function get(path){
    return fetch(API + path, {  //buscar que es fetch
        headers: {
            Authorization: 
            "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI4MDE4ZjdkYjRjY2U0NTBlZWM1Zjk4MWIyYjYwYjczNSIsInN1YiI6IjY1ZGVkNjI5NzYxNDIxMDE4NWQ1NmFjOSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.g2cCULUqz7OmRNKx8K60clnHb6wmKDHCi1Sf0iUp34c",
            "Content-Type": "application/json;charset=utf-8",
        },
    }).then((result) => result.json());
}

