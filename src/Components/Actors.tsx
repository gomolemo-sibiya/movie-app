import {Cast} from '../Typings/ActorsType';
import {
    Container,
    ListItem,
    Item
} from './Actorsstyle';

interface MovieCast {
    cast: Cast[];
    url: string;
}

export const Actors = ({ cast, url }: MovieCast) => {
    return (
        <Container>
            <ListItem>
                {cast &&
                    cast.length > 1 &&
                    cast.map((item, index) => (
                    <div key={index}>
                        {item.profile_path !== null && (
                        <Item>
                            <img src={`${url}${item.profile_path}`} alt="foto" />
                            <div>
                                <span>{item.name}</span>
                                <span style={{color: '#117360'}}>{item.character}</span>
                            </div>
                        </Item>
                        )}
                    </div>
                ))}
            </ListItem>
        </Container>
    );
}