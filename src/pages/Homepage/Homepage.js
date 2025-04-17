import React from 'react';
import Banner from "./components/Banner/Banner";
import PopularMoviesSlide from "./components/PopularMoviesSlide/PopularMoviesSlide";
import MovieSlideGroup from "./components/MovieSlideGroup/MovieSlideGroup";

// 1. 배너 => popular 영화를 들고와서 첫번째 아이템을 보여주자
// 2. popular movie
// 3. top rated movie
// 4. upcoming movie
const Homepage = () => {
    return (
        <div>
            <Banner />
            {/*<PopularMoviesSlide />*/}
            <MovieSlideGroup title="Popular Movies" category="popular" />
            <MovieSlideGroup title="Top Rated Movies" category="top_rated" />
            <MovieSlideGroup title="Upcoming Movies" category="upcoming" />
        </div>
    );
};

export default Homepage;