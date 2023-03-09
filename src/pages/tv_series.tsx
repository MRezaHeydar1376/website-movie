import { useEffect, useState } from "react";
import tmdbApi, { Category, Tv, TvType } from "../api/tmdbApi";
import { FooterBg } from "../assets";
import { Card, InputSearch, } from "../components";
import { Div, H2 } from "../styles";
import { Color } from "../variables";

function TVSearies() {
    const [tvPopular, setTvPopular] = useState<Tv[]>();
    const [search, setSearch] = useState("");

    useEffect(() => {
        (async () => {
            if(search === "" || search.trim() === "") {
                try {
                    const responseTV = await tmdbApi.getTvList(TvType.popular, 1)
                    setTvPopular(responseTV.data.results)
                }
                catch (error) {
                    console.log(error)
                }
            } else {
                const responseTV = await tmdbApi.search(Category.tv, 1, search)
                setTvPopular(responseTV.data.results)
            }
        })()
    }, [search]);

    function getValue(value: string) {
        setSearch(value);
    };

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
            <Div minWidth="320px" width="40%" margin="0 10px">
                <InputSearch getValue={getValue}/>
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
                    <Div key={card.id}>
                        <Card
                            image={card.poster_path}
                            name={card.name}
                            width="95%"
                            height="330px"
                            fontSize="20px"
                            hover={true}
                        />
                    </Div>
                ))}
            </Div>
        </Div>
    );
}

export default TVSearies;