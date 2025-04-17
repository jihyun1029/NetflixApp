import React, {useState} from 'react';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import {Link, Outlet, useNavigate} from 'react-router-dom';

const AppLayout = () => {
    const [keyword, setKeyword] = useState("");
    const navigate = useNavigate();

    const searchByKeyword = (event) => {
        event.preventDefault()
        // url을 바꿔주기
        navigate(`/movies?q=${keyword}`);
        setKeyword("");
    }

    return (
        <div>
            <Navbar expand="lg" data-bs-theme="dark" className="bg-black" sticky="top">
                <Container fluid>
                    <Navbar.Brand href="/">
                        <img src="/netflixLogo.svg" width="93" />
                    </Navbar.Brand>
                    <Navbar.Toggle aria-controls="navbarScroll" />
                    <Navbar.Collapse id="navbarScroll">
                        <Nav
                            className="me-auto my-2 my-lg-0"
                            style={{ maxHeight: '100px' }}
                            navbarScroll
                        >
                            <Nav.Link href="/" className="text-white">Home</Nav.Link>
                            <Nav.Link href="/movies" className="text-white">Movies</Nav.Link>
                        </Nav>
                        <Form className="d-flex" onSubmit={searchByKeyword}>
                            <Form.Control
                                type="search"
                                placeholder="Search"
                                className="me-2"
                                aria-label="Search"
                                value={keyword}
                                onChange={(event) => setKeyword(event.target.value)}
                            />
                            <Button variant="outline-danger" type="submit">Search</Button>
                        </Form>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
            <Outlet />
        </div>
    );
};

export default AppLayout;