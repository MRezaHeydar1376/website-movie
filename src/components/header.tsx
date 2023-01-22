import { useEffect, useState } from "react";
import apiConfig from "../api/api_config";
import tmdbApi, { Movie, MovieType, } from "../api/tmdbApi";
import { Div, Img } from "../styles";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper";

import "swiper/css";
import "swiper/css/navigation";


function Header() {
    const [backgrounds, setBackgrounds] = useState<Movie[]>([]);

    useEffect(() => {
        (async () => {
            try {
                const movies = await tmdbApi.getMoviesList(MovieType.popular, 1)
                console.log(movies.data.results.slice(1, 5))
                setBackgrounds(movies.data.results.slice(1, 5))
            }
            catch (error) {
                console.log(error)
            }
        })()
    }, [])
    return (
        <Div>
            <Div position="realtive">
                <Swiper
                    modules={[Autoplay]}
                    loop={true}
                    autoplay={{
                        delay: 3000,
                        disableOnInteraction: false,
                    }}
                    className="mySwiper">
                    {backgrounds.map(background => (
                        <SwiperSlide key={background.id}>
                            <Img
                                src={apiConfig.orginalImage(background.backdrop_path)}
                                width="100%"
                                height="100vh"
                                filter="30%"
                            />
                        </SwiperSlide>
                    ))}
                </Swiper>
            </Div>
        </Div>
    );
}

export default Header;