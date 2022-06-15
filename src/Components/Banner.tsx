import {useEffect, useState} from 'react';
import { BigImage } from '../Typings/BannerType';
import { 
    Container,
    Image,
    Overlay,
    InfoContainer,
    ButtonContainer,
    StyledButton
} from "./Bannerstyle";

interface Props{
    image: BigImage[]
}


export const Banner = ({image}:Props) => {
    const [banner, setBanner] = useState<BigImage | null>(null);
    // const navigate = useNavigate();

    useEffect(() => {
        setBanner(
            image[Math.floor(Math.random() * image.length)]
        )
    }, [image])

    return (
      <div className="Banner">
            <Container>
                <Image src={`https://image.tmdb.org/t/p/original/${banner?.poster_path}`} alt="Hero" />
                <Overlay/>
                <InfoContainer>
                    <h1 >
                        {banner?.title || banner?.name || banner?.original_name}
                    </h1>
                    <p>
                        {banner?.overview}
                    </p>
                    <ButtonContainer>
                        <StyledButton>
                            {/* <PlayArrow /> */}
                            <span>Play</span>  
                        </StyledButton>
                        <StyledButton>
                            {/* <InfoOutlined /> */}
                            <span>Info</span>  
                        </StyledButton>
                    </ButtonContainer>
                </InfoContainer>
            </Container>
      </div>
    )
}

export default Banner