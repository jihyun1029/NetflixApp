import React from 'react';
import {Badge} from "react-bootstrap";
import './MovieCard.style.css'
import {useMovieGenreQuery} from "../../hooks/useMovieGenre";

const MovieCard = ({movie}) => {
    const {data: genreData} = useMovieGenreQuery();

    const showGenre = (genreIdList) => {
        if (!genreData) return []
        const genreNameList = genreIdList.map((id) => {
            const genreObj = genreData.find((genre) => genre.id === id)
            return genreObj.name;
        });
        return genreNameList
    }

    return <div
        style={{
            backgroundImage:
                "url(" +
                `https://media.themoviedb.org/t/p/w300_and_h450_bestv2${movie.poster_path}` +
                ")"
        }}
        className="movie-card"
    >
        <div className="overlay p-2">
            <h1>{movie.title}</h1>
            <div>
                {showGenre(movie.genre_ids).map((genre, index) => (
                    <Badge bg="danger" key={index} className="me-1">{genre}</Badge>
                ))}
            </div>
            <div className="mt-2">
                {/*<div>*/}
                {/*    <img src="/IMDB.png" width="20" className="me-1"/>*/}
                {/*    {movie.vote_average}*/}
                {/*</div>*/}
                <div>
                    <img src="/IMDB.png" width="20" className="me-1"/>
                    <span>{movie.popularity}</span>
                    {movie.adult ? (
                        <img src="/over18.svg" width={20} className="ms-2" />
                    ) : (
                        <img src="/under18.svg" width={20} className="ms-2" />
                    )}
                </div>
            </div>
        </div>
    </div>
};

export default MovieCard;