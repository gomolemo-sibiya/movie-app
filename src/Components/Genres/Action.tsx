import { GenreCard } from '../../Typings/MoviesType';
import { HorrorMovies } from './MovieRows';

import { 
    Container, 
    Title, 
    PopularWrapper,
    MoviesList,
    ButtonStyle
} from "../Moviecardstyle";

export const Action = ({movies, cardRef, title, titleCategory}: GenreCard) => {
    const next = () => {
        cardRef.current?.scrollBy(1200, 0);
    }
    const prev = () => {
        cardRef.current?.scrollBy(-1200, 0);
    }
    
    return (
        <Container id={titleCategory}>
            <PopularWrapper>
                <Title>{title}<span>Movies</span></Title>
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
            <ButtonStyle onClick={next}>
                <button className="btn">
                    <svg width="60px" height="60px" viewBox="0 0 60 60" className="border">
                    <polyline points="179,1 179,59 1,59 1,1 179,1" className="bg-line" />
                    <polyline points="179,1 179,59 1,59 1,1 179,1" className="hl-line" />
                    </svg>
                    <span className="next"> 
                        &#8250;
                    </span>
                </button>
            </ButtonStyle>
            <ButtonStyle onClick={prev}>
                <button className="btn">
                    <svg width="60px" height="60px" viewBox="0 0 60 60" className="border">
                    <polyline points="179,1 179,59 1,59 1,1 179,1" className="bg-line" />
                    <polyline points="179,1 179,59 1,59 1,1 179,1" className="hl-line" />
                    </svg>
                    <span className="prev"> 
                        &#8249;
                    </span>
                </button>
            </ButtonStyle>
        </Container>
    )
}
