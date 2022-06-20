import { Moviecard } from "../Typings/MoviesType";
import { PopularMovies } from "./Genres/PopularMovies";
import { 
    Container, 
    Title, 
    PopularWrapper,
    MoviesList,
} from "./Moviecardstyle";


export const Movies = ({movies, cardRef, title, titleCategory}: Moviecard) => {
    return (
        <Container id={titleCategory}>
            <PopularWrapper>
                <Title>{title}<span>Movie</span></Title>
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