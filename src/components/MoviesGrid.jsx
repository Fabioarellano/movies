import { useState } from "react";
import { useEffect } from "react";
import { get } from "../utils/httpClients.js";
import { MovieCard } from "./MovieCard.jsx";
import movies from "./movies.json";  //parsea el Json y lo convierte en un arrar automaticamente
import styles from "./MoviesGrid.module.css";

export function MoviesGrid(){
    // utilizando hooks para consumir API
    const [movies,setMovies]= useState([]);
  useEffect(()=>{
        get("/discover/movie").then(( data )=>{
        setMovies( data.results );
    });
},[]);// que el componente se ejecute una sola vez, si no es vacio hace ciclo infinito
    // no se vuelve a ajecutar el useEffct.
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