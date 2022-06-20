import { useRef } from "react";
import { FaSearch} from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import {
    Searchbox
} from './Searchboxstyle'


type Props = {
    isRef: React.RefObject<HTMLInputElement>;
    func: () => void;
}

export const SearchboxInput = ({ isRef, func }: Props) => {
    const inputRef = useRef<HTMLInputElement>(null);
    const navigate = useNavigate();
    
    const handleSearch = (e: any) => {
        if(e.key === 'Enter'){
            if (inputRef.current?.value) {
                navigate(`/movie/search=${inputRef.current?.value}`);
                inputRef.current.value = "";
            }
            else {
                alert("enter a word");
            }
        }
    }
    
    return (
        <Searchbox>
            <input type="text" placeholder="search movie" onKeyDown={handleSearch} ref={inputRef}/>
            <div className="symbol">
                <div className="lens">
                    <FaSearch />
                </div>
            </div>
        </Searchbox>
    );
}