import { Moviecard } from "../Typings/MoviesType";
import { PopularMovies } from "./Genres/PopularMovies";
import Carousel from 'react-elastic-carousel';
import { Navbar } from "./Navbar";
import { 
    Container, 
    Title, 
    PopularWrapper,
    MoviesList,
} from "./Moviesstyle";

import styled from "styled-components";
const breakPoints = [
  { width: 1, itemsToShow: 1 },
  { width: 550, itemsToShow: 2 },
  { width: 768, itemsToShow: 3 },
  { width: 1200, itemsToShow: 4 },
];

export const Car = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    height: 250px;
    width: 100%;
    background-color: #00008B;
    color: #fff;
    margin: 0 15px;
    font-size: 4em;
`

export const Movies = ({movies, cardRef, title, titleCategory}: Moviecard) => {
    return (
        <Container id={titleCategory}>
            <PopularWrapper>
                <Title>{title}</Title>
                <MoviesList ref={cardRef}>
                    {movies.results.length > 0 &&
                        movies.results.map((item, index) => (
                            <PopularMovies
                                key={index}
                                title={item.title}
                                url={item.backdrop_path}
                                id={item.id}
                            />
                    ))}
                </MoviesList>
            </PopularWrapper>
        </Container>

    )
}

export default Movies