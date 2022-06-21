type Results = {
    title: string;
    backdrop_path: string;
    id: string;
};
 
export interface Movies {
    page: number;
    total_pages: number;
    results: Results[];
}
  
export interface Moviecard {
    setPageNumber: React.Dispatch<React.SetStateAction<number>>;
    pageNumber: number;
    movies: Movies;
    cardRef: React.RefObject<HTMLUListElement>;
    title: string;
    titleCategory?: string;
}

type Production_companies = { 
    id: number;
    logo_path: string;
    name: string;
    origin_country: string;
}

export interface MovieData {
    title: string
    backdrop_path: string
    media_type?: string
    release_date?: string
    first_air_date: string
    genre_ids: number[]
    id: number
    name: string
    origin_country: string[]
    original_language: string
    original_title: string;
    original_name: string
    overview: string
    popularity: number
    poster_path: string
    vote_average: number
    vote_count: number
    production_companies: Production_companies[];
}

export interface GenreCard {
    setPageNumber: React.Dispatch<React.SetStateAction<number>>;
    pageNumber: number;
    movies: Movies;
    cardRef: React.RefObject<HTMLUListElement>;
    title: string;
    titleCategory?: string;
}

