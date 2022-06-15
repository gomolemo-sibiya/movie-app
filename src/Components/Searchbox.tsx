import {
    Searchbox
} from './Searchboxstyle'
import { FaBuffer, FaSearch} from "react-icons/fa";

type Props = {
    isRef: React.RefObject<HTMLInputElement>;
    func: () => void;
}

export const SearchboxInput = ({ isRef, func }: Props) => {
    return (
        <Searchbox>
            <input type="text" placeholder="search movie" />
            <div className="symbol">
                {/* <div className="cloud">
                    <FaBuffer />
                </div> */}
                <div className="lens">
                    <FaSearch />
                </div>
            </div>
            {/* <button onClick={func}>Search</button> */}
        </Searchbox>
    );
}