import { useEffect, useState } from "react";
import apiConfig from "../api/api_config";
import tmdbApi, { Movie, MovieType, } from "../api/tmdbApi";
import { Button, Div, H1, H3, Img, Paragraph } from "../styles";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper";

import "swiper/css";
import "swiper/css/navigation";
import Card from "./card";
import { Color } from "../variables";
import { NONAME } from "dns";


function Header() {
    const [backgrounds, setBackgrounds] = useState<Movie[]>([]);

    useEffect(() => {
        (async () => {
            try {
                const movies = await tmdbApi.getMoviesList(MovieType.popular, 1)
                setBackgrounds(movies.data.results.slice(1, 5))
            }
            catch (error) {
                console.log(error)
            }
        })()
    }, [])
    return (
        <Div>
            <Swiper
                modules={[Autoplay]}
                loop={true}
                autoplay={{
                    delay: 3000,
                    disableOnInteraction: false,
                }}
                className="mySwiper">
                {backgrounds.map(background => (
                    <SwiperSlide key={background.id} >
                        <Div position="relative"
                        >
                            <Img
                                src={apiConfig.orginalImage(background.backdrop_path)}
                                Width={{xs: "100%"}}
                                Height={{xs: "110vh"}}
                                filter="30%"
                            />
                            <Div
                                position="absolute"
                                top="40px"
                                displays={{
                                    xs: "flex"
                                }}
                                align="center"
                                height="100%"
                            >
                                <Div width="100%" height="55%"
                                    displays={{
                                        xs: "flex"
                                    }}
                                    align="center"
                                    direction="column"
                                >
                                    <Div width="80%" height="20%" padding="0 0 20px 0" margin="0px 0 50px 0 ">
                                        <H1
                                            color={Color.white}
                                            fontSize={{ sm: "40px", md: "60px", lg: "45px", xl: "50px" }}
                                            fontWeight={{ sm: "500", md: "600", lg: "600" }}
                                        >
                                            {background.title}
                                        </H1>
                                    </Div>
                                    <Div width="80%" height="60%" margin="20px 0 10px 0">
                                        <Paragraph color={Color.white}>
                                            {background.overview}
                                        </Paragraph>
                                    </Div>
                                    <Div width="80%" height="20%" displays={{ xs: "flex" }} align="center">
                                        <Button
                                            width="220px"
                                            height="55px"
                                            border="none"
                                            backgrondColor={Color.red}
                                            borderRadius="50px"
                                        >
                                            <H3
                                                color={Color.white}
                                                fontSize={{ sm: "15px", md: "18px", lg: "23px" }}
                                                fontWeight={{ sm: "500", md: "500", lg: "600" }}
                                                cursor="pointer"
                                            >
                                                Watch now
                                            </H3>
                                        </Button>
                                        <Button
                                            width="220px"
                                            height="55px"
                                            border={`2px solid ${Color.white}`}
                                            borderButtom={`2px solid ${Color.white}`}
                                            backgrondColor="transparent"
                                            borderRadius="50px"
                                            margin="0 20px"
                                            hoverBackgrond={Color.white}
                                            hoverColor={Color.red}
                                            display="flex"
                                            align="center"
                                        >
                                            <H3
                                                color={Color.white}
                                                fontSize={{ sm: "15px", md: "18px", lg: "23px" }}
                                                fontWeight={{ sm: "500", md: "500", lg: "600" }}
                                                cursor="pointer"
                                                hoverColor="red"
                                                width="100%"
                                                height="100%"
                                                display="flex"
                                                justify="center"
                                                align="center"
                                            >
                                                Watch trailer
                                            </H3>
                                        </Button>
                                    </Div>
                                </Div>
                                <Div width="100%" displays={{ xs: "none", sm: "none", md: "none", lg: "flex", xl: "flex" }} justify="center" >
                                    <Card image={background.poster_path} name={""} />
                                </Div>
                            </Div>
                        </Div>
                    </SwiperSlide>
                ))}
            </Swiper>
        </Div>
    );
}

export default Header;