import { Button, Div, H2, H3, H4, Img } from "../styles";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper";

import "swiper/css";
import "swiper/css/pagination";
import { Movie } from "../api/tmdbApi";
import apiConfig from "../api/api_config";
import { Color } from "../variables";
import { useState } from "react";
import { Youtube } from "../assets";

interface Props {
    title: string;
    movies?: Movie[];
}

function Slider({ movies, title }: Props) {

    const [mouseIn, setMouseIn] = useState(0);

    function selectedCard(id: number) {
        setMouseIn(id)
    };
    function onSelected() {
        setMouseIn(0)
    }

    return (
        <Div padding="10px 0">
            <Div displays={{ xs: "flex" }} justify="space-between" align="center" margin="10px 0">
                <H2 color={Color.white} fontSize={{ xs: "28px" }} fontWeight={{ xs: "600" }}>
                    {title}
                </H2>
                <Button
                    width="120px"
                    height="35px"
                    backgrondColor="transparent"
                    border={`1px solid ${Color.white}`}
                    borderButtom={`1px solid ${Color.white}`}
                    borderRadius="50px"
                    hoverBackgrond={Color.white}
                >
                    <H3 color={Color.white} cursor="pointer" hoverColor={Color.red}>
                        View more
                    </H3>
                </Button>
            </Div>
            <Swiper
                slidesPerView={1}
                spaceBetween={10}
                loop={true}
                breakpoints={{
                    370: {
                        slidesPerView: 1,
                        spaceBetween: 0,
                    },
                    576: {
                        slidesPerView: 2,
                        spaceBetween: 20,
                    },
                    768: {
                        slidesPerView: 3,
                        spaceBetween: 20,
                    },
                    992: {
                        slidesPerView: 4,
                        spaceBetween: 20,
                    },
                    1265: {
                        slidesPerView: 6,
                        spaceBetween: 15,
                    },
                }}
                autoplay={{
                    delay: 5000,
                    disableOnInteraction: false,
                }}
                modules={[Autoplay]}
                className="mySwiper"
            >
                {movies ? movies.map(image => (
                    <Div key={image.id} borderRadius="5px">
                        <SwiperSlide>
                            <Div position="relative">
                                <Img
                                    onMouseMove={() => selectedCard(image.id)}
                                    onMouseLeave={onSelected}
                                    src={apiConfig.w500Image(image.poster_path)}
                                    borderRadius="8px"
                                    Width={{ xs: "100%" }}
                                    Height={{ xs: "300px" }}
                                    filter={mouseIn === image.id ? "20%" : "100%"}
                                    cursor="pointer"
                                />
                                {mouseIn === image.id ? (
                                    <Img
                                        onMouseMove={() => selectedCard(image.id)}
                                        src={Youtube}
                                        height="60px"
                                        position="absolute"
                                        top="40%"
                                        left="35%"
                                        cursor="pointer"
                                    />
                                ) : null}
                            </Div>
                            <H4 color={mouseIn === image.id ? Color.red : Color.white} fontSize={{ xs: "20px" }} fontWeight={{ xs: "600" }} textAlign="center">
                                {image.original_title}
                            </H4>
                        </SwiperSlide>
                    </Div>
                )) : null}
            </Swiper>
        </Div>
    );
}

export default Slider;