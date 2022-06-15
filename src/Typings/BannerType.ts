export interface HeroImage {
    data: MovieInformation[]
}

type MovieInformation = {
    title: string;
    overview: string;
    poster_path: string;
    backdrop_path: string;
    id?: string;
}

export interface TopRateMovies {
    title: string;
    overview: string;
    poster_path: string;
    backdrop_path: string;
}

export interface BigImage  {
    title: string;
    overview: string;
    poster_path: string;
    backdrop_path: string;
    original_name: string;
    name: string;
    id?: string;
}