import { useEffect, useState } from "react";
import tmdbApi, { Tv, TvType } from "../api/tmdbApi";
import { FooterBg } from "../assets";
import { Card, Slider } from "../components";
import { Div, H1, H2 } from "../styles";
import { Color } from "../variables";

function Details() {
    const [tvPopular, setTvPopular] = useState<Tv[]>();

    useEffect(() => {
        (async () => {
            try {
                const responseTV = await tmdbApi.getTvList(TvType.popular, 1)
                setTvPopular(responseTV.data.results)
            }
            catch (error) {
                console.log(error)
            }
        })()
    }, [])

    return (
        <Div>
            <Div
                height="180px"
                backgroundImage={FooterBg}
                displays={{ xs: "flex" }}
                justify="center"
                align="flex-end"
                padding="50px 0"
            >
                <H2 color={Color.white}>TV SERIES</H2>
            </Div>
            <Div>

            </Div>
            <Div
                displays={{ xs: "grid" }}
                gridColumn={{
                    xs: "repeat(1, 1fr)",
                    sm: "repeat(2, 1fr)",
                    md: "repeat(3, 1fr)",
                    lg: "repeat(4, 1fr)",
                    xl: "repeat(5, 1fr)"
                }}
                wrap="wrap"
                width="100%"
            >
                {tvPopular?.map(card => (
                    <Card
                        image={card.poster_path}
                        name={card.name}
                        width="95%"
                        height="330px"
                        fontSize="20px"
                    />
                ))}
            </Div>
        </Div>
    );
}

export default Details;