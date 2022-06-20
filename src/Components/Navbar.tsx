import { useRef } from "react";
import { useNavigate } from "react-router-dom";
import { FaAtlassian } from "react-icons/fa";
import { SearchboxInput } from "./Searchbox";
import { 
    NavWrapper,
    NavLinks 
} from './Navbarstyle';

export const Navbar = () => {
    const inputRef = useRef<HTMLInputElement>(null);
    const handleSearchMovie = () => {

    }
    
    return (
        <div>
            <NavWrapper>
                <NavLinks>
                    <li>
                        <a href='/'>Home</a>
                    </li>
                    <li>
                        <a href='#genres' style={{color:'#F7F7F7'}}>Genre</a>
                    </li>
                </NavLinks>
                <FaAtlassian  color={'#117360'} size={30}/>
                <SearchboxInput func={handleSearchMovie} isRef={inputRef}/>
            </NavWrapper>
        </div>
    );
}