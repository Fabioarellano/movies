import { MovieCard } from "./MovieCard.jsx";
import movies from "./movies.json";  //parsea el Json y lo convierte en un arrar automaticamente
import styles from "./MoviesGrid.module.css";

export function MoviesGrid(){
    console.log(movies);
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