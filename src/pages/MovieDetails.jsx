import { useState } from "react";
import { useEffect } from "react";
import { useParams } from "react-router-dom";
import { Spinner } from "../components/Spinner.jsx";
import { getMovieImg } from "../utils/getMovieImg.jsx";
import { get } from "../utils/httpClients";
import styles from "./MovieDetails.module.css";

export function MovieDetails() {
    const { movieId } = useParams();
    const [isLoading, setIsLoading] = useState(true);
    const [movie, setMovie] = useState(null);
  
    useEffect(() => {
      setIsLoading(true);

      get("/movie/" + movieId).then((data) => {
        setIsLoading(false);
        setMovie(data);
      });
    }, [movieId]); // aqui el useEffect, depende del movieId, si cambia la pelicula se ejecuta, caso contratio no. Para que no se infinito
  
    if (isLoading) {
      return <Spinner />;
    }
    
    // if (!movie) {
    //   return null;
    // }

    const imageUrl = getMovieImg( movie.poster_path,300);

    return (
        <div className={styles.detailsContainer}>
            {/* <img className={styles.col + " " + styles.movieImage} src={ imageUrl} alt={movie.title}/> */}
            <img className={`${styles.col} ${styles.movieImage}`} src={imageUrl} alt={movie.title} />
            <div className={`${styles.col} ${styles.MovieDetails}`}>
                <p className="firstItem"><strong>Title:</strong> {movie.title}</p>
                <p>
                    <strong>Genres</strong> {" "}
                    {movie.genres.map((genre) => genre.name).join(", ")}
                </p>
                <p><strong>Description:</strong> {movie.overview}</p>
            </div>
        </div>
    );
}