import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import api_key from "../config/api_keys";
import { MovieData } from '../Typings/MoviesType';
import Rating from '@mui/material/Rating';
import {
    Container,
    Wrapper,
    Left,
    Right
} from './Style/styled'
export const Movies = () => {
    const [movieData, setMovieData] = useState<MovieData>();
    const url = 'https://image.tmdb.org/t/p/w500/';
    const params = useParams();

    useEffect(() => {
        if (params.slug)
            fetch(
                `https://api.themoviedb.org/3/movie/${params.slug}?api_key=${api_key}`
            )
            .then((res) => res.json())
            .then((data) => setMovieData(data));
    }, [params.slug]);

    if (!movieData) {
        return (
          <Container>
            <h1>Carregando</h1>
          </Container>
        );
    }

    return (
        <Container>
            <Wrapper>
                <Left backImage={`${url}${movieData?.poster_path}`}/>
                <Right>
                    <h1>{movieData.title}</h1>
                    <span>
                        {movieData.overview}
                    </span>
                    <div>
                        <Rating name="read-only" value={5} readOnly />
                    </div>
                </Right>
            </Wrapper>
        </Container>
    );
}