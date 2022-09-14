import { useState } from "react";
import { useEffect } from "react";
import { useQuery } from "../hooks/useQuery.jsx";
import { get } from "../utils/httpClients.js";
import { MovieCard } from "./MovieCard.jsx";
import movies from "./movies.json";  //parsea el Json y lo convierte en un arrar automaticamente
import styles from "./MoviesGrid.module.css";
import { Spinner } from "./Spinner.jsx";

export function MoviesGrid(){
    // utilizando hooks para consumir API
    const [movies,setMovies]= useState([]);
    const [isLoading, setIsLoading] = useState(true);

    const query =  useQuery();
    const search = query.get("search");
  
    useEffect(() => {
      setIsLoading(true);
      const searchUrl = search
        ? "/search/movie?query=" + search
        : "/discover/movie";
      get(searchUrl).then((data) => {
        setMovies(data.results);
        setIsLoading(false);
      });
    }, [search]);
  // que el componente se ejecute una sola vez, si no es vacio hace ciclo infinito
    // no se vuelve a ajecutar el useEffct.
    if (isLoading) {
        return <Spinner  />;
    }
    
    return (
        <ul className={styles.moviesGrid}>
            {/* <li>Peli_1x</li>
            <li>Peli_2x</li>
            <li>Peli_3x</li>  */}
            {/* listar los elementos de la pelicula   */}
            {movies.map((movie)=>(
                //  <MovieCard key={movie.id}>{movie.title}</MovieCard>
                   <MovieCard key={movie.id} movie={movie}/>
                ))
            }
        </ul>
    );
}