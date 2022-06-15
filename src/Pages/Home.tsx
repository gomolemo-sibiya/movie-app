import { useState, useEffect, useRef}  from 'react'
import Banner from "../Components/Banner";
import Movies from "../Components/Movies";
import api_key from '../config/api_keys';
import { BigImage } from '../Typings/BannerType';
import { useFetchMovies } from '../Hooks/useFetchMovies';

export const Home = () => {
    const [topRatesMovies, setTopRatesMovies] = useState<BigImage[]>([]);
    const popularCardRef = useRef<HTMLUListElement>(null);
    const fetchPopularMovies = useFetchMovies(
        `https://api.themoviedb.org/3/movie/popular`,
        "pt-BR"
    );

    const popularMovies = {
        setPageNumber: fetchPopularMovies.setPageNumber,
        pageNumber: fetchPopularMovies.pageNumber,
        cardRef: popularCardRef,
        movies: fetchPopularMovies.movies,
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
    
    return (
        <div>
            <Banner image={topRatesMovies}/>
            <Movies title="Popular" {...popularMovies}/>
        </div>
    );
}