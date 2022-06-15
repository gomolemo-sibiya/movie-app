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
                        <a href='#genres'>Home</a>
                    </li>
                </NavLinks>
                <FaAtlassian  color={'#1e6d5e'} size={24}/>
                <SearchboxInput func={handleSearchMovie} isRef={inputRef}/>
            </NavWrapper>
        </div>
    );
}