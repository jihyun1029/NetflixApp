import React from 'react';
import {usePopularMoviesQuery} from "../../../../hooks/userPopularMovies";
import {Alert} from "bootstrap";
import 'react-multi-carousel/lib/styles.css';
import MovieSlider from "../../../../common/MovieSlider/MovieSlider";
import {responsive} from "../../../../common/constants/responsive";

const PopularMoviesSlide = () => {
    const {data, isLoading, isError, error} = usePopularMoviesQuery();

    if (isLoading) {
        return <h1>Loading...</h1>;
    }
    if (isError) {
        return <Alert variant="danger">{error.message}</Alert>;
    }

    return <div className="px-5">
        <MovieSlider title='popular Movies' movies={data.results} responsive={responsive} />
    </div>
};

export default PopularMoviesSlide;