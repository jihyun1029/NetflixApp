import React from 'react';
import {usePopularMoviesQuery} from "../../../../hooks/userPopularMovies";
import {Alert} from "bootstrap";
import 'react-multi-carousel/lib/styles.css';
import MovieSlider from "../../../../common/MovieSlider/MovieSlider";
import {responsive} from "../../../../common/constants/responsive";
import {useMoviesByCategory} from "../../../../hooks/useMoviesByCategory";
import { useMediaQuery } from 'react-responsive';

const PopularMoviesSlide = ({ title, category }) => {
    const isMobile = useMediaQuery({ maxWidth: 768 });
    const { data, isLoading, isError, error } = useMoviesByCategory(category);

    if (isLoading) {
        return <h1>Loading...</h1>;
    }
    if (isError) {
        return <Alert variant="danger">{error.message}</Alert>;
    }

    return <div className={isMobile ? 'px-3' : 'px-5 mb-5'}>
        <MovieSlider title={title} movies={data.results} responsive={responsive} />
    </div>
};

export default PopularMoviesSlide;