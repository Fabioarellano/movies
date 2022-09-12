import React from "react";
import { MoviesGrid } from "./components/MoviesGrid";
import  styles  from "./App.module.css";
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import { MovieDetails } from "./pages/MovieDetails.jsx";
import { LandingPage } from "./pages/LandingPage.jsx";


export function App(){
    return (
        <Router>
            <header>
                 <Link to="/">
                    <h1 className={ styles.title}>Movies</h1> 
                 </Link>
                {/* <Link to="/">home</Link>
                <br/>
                <Link to="/movie">Movie</Link> */}
            </header>
            <main>
              {/* <MoviesGrid/> */}
                <Routes>
                    {/* <Route path="/movie">Movie</Route> */}
                    <Route path="/" element={<LandingPage/>} />
                    <Route path="/movies/:movieId" element={<MovieDetails/>} />
                    <Route path="/*" element={"Error: 404"} />
                    {/* version 6 . actualizacion*/}
                    {/* <Route path="/" element={<Home />} /> */}
                    
                </Routes>
             </main>
        </Router>
    );
}