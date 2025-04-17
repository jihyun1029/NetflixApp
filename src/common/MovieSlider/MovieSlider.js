import React from 'react';
import './MovieSlider.style.css'
import Carousel from "react-multi-carousel";
import MovieCard from "../MovieCard/MovieCard";

const MovieSlider = ({title, movies, responsive}) => {
    return <div>
        <h3 className="fw-bold pt-5">{title}</h3>
        <Carousel
            className="react-multi-carousel-list carousel-container "
            infinite={true}
            centerMode={true}
            itemClass="movie-slider p-1"
            containerClass="carousel-container"
            responsive={responsive}
        >
            {movies.map((movie, index) => (
                <MovieCard movie={movie} key={index}/>
            ))}
        </Carousel>
    </div>
};

export default MovieSlider;