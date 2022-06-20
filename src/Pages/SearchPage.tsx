import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { SearchType } from "../Typings/SearchType";
import { SearchResults } from "../Components/Searchresults";
import api_key from "../config/api_keys";
import {
    Container,
    Wrapper,
    AsideRight
} from './Style/searchstyle';

export const SearchPage= () => {
    const params = useParams();
    const [searchData, setSearchData] = useState<SearchType>();
    
    useEffect(() => {
        fetch(
            `https://api.themoviedb.org/3/search/movie?api_key=${api_key}&language=pt-BR&query=${params.slug}`
        )
        .then((res) => res.json())
        .then((data) => setSearchData(data));
    }, [params.slug]);

    return (
        <Container>
            <Wrapper>
                Results: <span>{searchData?.total_results}</span>
                <AsideRight>
                    {searchData?.results.map((item, index) => (
                        <SearchResults key={index} data={item}/>
                    ))}
                </AsideRight>
            </Wrapper>
        </Container>
    );
};