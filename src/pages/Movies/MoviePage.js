import React, {useEffect, useState} from 'react';
import {useSearchMovieQuery} from "../../hooks/useSearchMovie";
import {useSearchParams} from 'react-router-dom';
import {Col, Container, Row, Spinner} from "react-bootstrap";
import {Alert} from "bootstrap";
import MovieCard from "../../common/MovieCard/MovieCard";
import ReactPaginate from 'react-paginate';
import Form from 'react-bootstrap/Form';
import './MoviePage.style.css'

// 경로 2가지
// nav바에서 클릭해서 온 경우 => popularMovie 보여주기
// keyword를 입력해서 온 경우 => keyword와 관련된 영화들을 보여줌

// 페이지네이션 설치
// page state 만들기
// 페이지네이션 클릭할때마다 pgae 바꿔주기
// page 값이 바뀔때 마다 useSearchMovie에 page까지 넣어서 fetch
const MoviePage = () => {
    const [query, setQuery] = useSearchParams();
    const [page, setPage] = useState(1);
    const keyword = query.get("q");

    const {data, isLoading, isError, error} = useSearchMovieQuery({keyword, page});

    const handlePageClick = ({selected}) => {
        // console.log("page", page);
        setPage(selected + 1);
    }

    // keyword가 바뀌면 page를 1로 초기화
    useEffect(() => {
        setPage(1);
    }, [keyword]);

    if (isLoading) {
        return (
            <div className="spinner-area">
                <Spinner
                    animation="border"
                    variant="danger"
                    style={{width: "5rem", height: "5rem"}}
                />
            </div>
        );
    }

    if (isError) {
        return <Alert variant="danger">{error.message}</Alert>
    }

    return (
        <Container>
            <Row>
                <Col xs={12} className="d-flex my-4">
                    <div>필터</div>
                </Col>
                <Col xs={12}>
                    {data?.results.length === 0 ? (
                        <div>{keyword}와 일치하는 영화가 없습니다.</div>
                        // <div className="text-white fs-4 fw-bold text-center py-5">
                        //     🔍 <strong>{keyword}</strong>와(과) 일치하는 영화가 없습니다.
                        // </div>
                    ) : (
                        <Row>
                            {data.results.map((movie, index) => (
                                <Col key={index} lg={4} xs={12}>
                                    <MovieCard movie={movie}/>
                                </Col>
                            ))}
                        </Row>
                    )}

                    <div className="d-flex justify-content-center my-4">
                        <ReactPaginate
                            nextLabel=">"
                            previousLabel="<"
                            onPageChange={handlePageClick}
                            pageCount={data.total_pages}
                            pageRangeDisplayed={3}
                            marginPagesDisplayed={1}
                            forcePage={page - 1}
                            containerClassName="pagination r-pagination"
                            pageClassName="r-page-item"
                            pageLinkClassName="r-page-link"
                            previousClassName="r-page-item"
                            previousLinkClassName="r-page-link"
                            nextClassName="r-page-item"
                            nextLinkClassName="r-page-link"
                            breakClassName="r-page-item"
                            breakLinkClassName="r-page-link"
                            activeClassName="r-active"
                        />
                    </div>
                </Col>
            </Row>
        </Container>
    );
};

export default MoviePage;