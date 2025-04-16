import React from 'react';
import {usePopularMoviesQuery} from "../../../../hooks/userPopularMovies";
import {Alert} from "bootstrap";
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import MovieCard from "../MovieCard/MovieCard";
import './PopularMoviesSlide.style.css';

const responsive = {
    desktop: {
        breakpoint: {max: 3000, min: 1024},
        items: 4
    },
    tablet: {
        breakpoint: {max: 1024, min: 464},
        items: 2
    },
    mobile: {
        breakpoint: {max: 464, min: 0},
        items: 1
    }
};

const PopularMoviesSlide = () => {
    const {data, isLoading, isError, error} = usePopularMoviesQuery()

    if (isLoading) {
        return <h1>Loading...</h1>;
    }
    if (isError) {
        return <Alert variant="danger">{error.message}</Alert>;
    }

    return <div className="px-5">
        <h3 className="fw-bold pt-5">Popular Movies</h3>
        <Carousel
            className="react-multi-carousel-list carousel-container "
            infinite={true}
            centerMode={true}
            itemClass="movie-slider p-1"
            containerClass="carousel-container"
            responsive={responsive}
        >
            {data.results.map((movie, index) => (
                <MovieCard movie={movie} key={index}/>
            ))}
        </Carousel>
    </div>
};

export default PopularMoviesSlide;