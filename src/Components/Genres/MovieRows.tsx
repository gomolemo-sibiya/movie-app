import { useNavigate } from "react-router-dom";

import { 
    MovieCard,
} from "./styled"

type MovieProps = {
    title: string;
    url?: string;
    id: string;
};

export const PopularMovies = ({ title, url, id }: MovieProps) => {
    const navigate = useNavigate();

    return title && url && id ?(
        <MovieCard onClick={() => navigate(`/movie/${id}`)}>
            <img src={`https://image.tmdb.org/t/p/w500/${url}`} alt="" />
            <h1 className="title">{title}</h1>
        </MovieCard>
    ):(
        <MovieCard>Loading</MovieCard>
    );
}

export const HorrorMovies = ({ title, url, id }: MovieProps) => {
    const navigate = useNavigate();

    return title && url && id ?(
        <MovieCard onClick={() => navigate(`/movie/${id}`)}>
            <img src={`https://image.tmdb.org/t/p/w500/${url}`} alt="" />
            <h1>{title}</h1>
        </MovieCard>
    ):(
        <MovieCard>Loading</MovieCard>
    );
}