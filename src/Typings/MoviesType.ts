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

