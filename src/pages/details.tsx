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
                setTvPopular(responseTV.data.results.slice(1, 2))
            }
            catch (error) {
                console.log(error)
            }
        })()
    }, [])

    console.log(tvPopular)

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
            <Div>
                {tvPopular?.map(card => (
                    <Card image={card.poster_path} name={card.name} />
                ))}
            </Div>
        </Div>
    );
}

export default Details;