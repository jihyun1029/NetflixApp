import React from 'react';
import {usePopularMoviesQuery} from "../../../../hooks/userPopularMovies";

const Banner = () => {
    const {data} = usePopularMoviesQuery();
    console.log("ddd", data);

    return (
        <div></div>
    );
};

export default Banner;