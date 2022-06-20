import { GenreCard } from '../../Typings/MoviesType';
import { HorrorMovies } from './PopularMovies';
import { 
    Container, 
    Title, 
    PopularWrapper,
    MoviesList,
} from "../Moviecardstyle";

export const Action = ({movies, cardRef, title, titleCategory}: GenreCard) => {
    return (
        <Container id={titleCategory}>
            <PopularWrapper>
                <Title>{title}</Title>
                    <MoviesList ref={cardRef}>
                        {movies.results.length > 0 &&
                            movies.results.map((item, index) => (
                                <HorrorMovies
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
