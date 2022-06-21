import { useState, useEffect, useRef}  from 'react'
import Banner from "../Components/Banner";
import Movies from "../Components/Moviecards";
import api_key from '../config/api_keys';
import { BigImage } from '../Typings/BannerType';
import { useFetchMovies } from '../Hooks/useFetchMovies';
import { Action } from '../Components/Genres/Action';
import { useAutoCarrousel } from '../Hooks/useAutoCarrousel';

export const Home = () => {
    const [topRatesMovies, setTopRatesMovies] = useState<BigImage[]>([]);
    // const [actionMovies, setActionMovies] = useState<MovieData[]>([]);
    const popularCardRef = useRef<HTMLUListElement>(null);
    const actionCardRef = useRef<HTMLUListElement>(null);
    
    const fetchPopularMovies = useFetchMovies( 
        `https://api.themoviedb.org/3/movie/popular`,
        "pt-BR"
    );
    
    const fetchActionMovies = useFetchMovies(
        `https://api.themoviedb.org/3/movie/upcoming`,
        "pt-BR"
    );
    
    /*---------------------------------------------------------------------------*/

    const popularMovies = {
        setPageNumber: fetchPopularMovies.setPageNumber,
        pageNumber: fetchPopularMovies.pageNumber,
        cardRef: popularCardRef,
        movies: fetchPopularMovies.movies,
    };
    const actionMovies = {
        setPageNumber: fetchActionMovies.setPageNumber,
        pageNumber: fetchActionMovies.pageNumber,
        cardRef: actionCardRef,
        movies: fetchActionMovies.movies,
    };

    useEffect(() => {
        const getTopRateMovies = async () => {
            const res = await fetch(
                `https://api.themoviedb.org/3/trending/all/week?api_key=${api_key}&language=en-US`
            );
            const json = await res.json();
            const result = json.results;
            const items = result.slice(0, 5);
            setTopRatesMovies(items);
        };
        getTopRateMovies();
    }, []);
    
    useAutoCarrousel(fetchPopularMovies.movies, 2000, popularCardRef);

    return (
        <div>
            <Banner image={topRatesMovies}/>
            <Movies title="Popular" {...popularMovies}/>
            <Action title="Action" {...actionMovies}/>
            {/* <ActionMovies title="Action Thrillers" movies={actionMovies} /> */}
        </div>
    );
}