import { useNavigate } from "react-router-dom";
import { SearchData } from "../Typings/SearchType";
import {
    Card,
    MovieImage,
    MovieDescription
} from './Searchresultsstyle'

interface Data {
    data: SearchData;
}
  
export const SearchResults = ({data}: Data) => {
    const navigate = useNavigate();
    return(
    <div>
        {data.poster_path && (
            <Card onClick={() => navigate(`/movie/${data.id}`)}>
                <MovieImage>
                    <img
                        src={` https://image.tmdb.org/t/p/w500/${data.poster_path}`}
                        alt=""
                        width={100}
                    />
                </MovieImage>
                <MovieDescription>
                    <h1>{data.title}</h1>
                    <span>{data.release_date}</span>
                    {/* <p>{data.overview.slice(0, 650)}</p> */}
                </MovieDescription>
            </Card>
        )}
    </div>
    )
}