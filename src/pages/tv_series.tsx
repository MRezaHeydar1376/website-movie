import { useEffect, useState } from "react";
import tmdbApi, { Category, Tv, TvType } from "../api/tmdbApi";
import { FooterBg } from "../assets";
import { Card, InputSearch, } from "../components";
import { Button, Div, H2, H3 } from "../styles";
import { Color } from "../variables";

function TVSearies() {
    const [tvPopular, setTvPopular] = useState<Tv[]>([]);
    const [search, setSearch] = useState("");
    const [page, setPage] = useState(1)

    useEffect(() => {
        (async () => {
            if (search === "" || search.trim() === "") {
                try {
                    const responseTV = await tmdbApi.getTvList(TvType.popular, page)
                    setTvPopular([...tvPopular, ...responseTV.data.results])
                }
                catch (error) {
                    console.log(error)
                }
            } else {
                const responseTV = await tmdbApi.search(Category.tv, page, search)
                setTvPopular([...tvPopular, ...responseTV.data.results])
            }
        })()
    }, [search, page]);

    function getValue(value: string) {
        setPage(1)
        setSearch(value);
        setTvPopular([]);
    };

    function loadMoreTV() {
        setPage(page + 1);
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
                <InputSearch getValue={getValue} />
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
            <Div displays={{ xs: "flex" }} justify="center" margin="20px 0">
                <Button
                    width="150px"
                    height="40px"
                    border={`1px solid ${Color.white}`}
                    borderButtom={`1px solid ${Color.white}`}
                    backgrondColor="transparent"
                    borderRadius="50px"
                    margin="0 20px"
                    hoverBackgrond={Color.white}
                    hoverColor={Color.red}
                    display="flex"
                    align="center"
                    onClick={loadMoreTV}
                >
                    <H3
                        color={Color.white}
                        fontSize={{ sm: "11px", md: "14px", lg: "19px" }}
                        fontWeight={{ sm: "500", md: "500", lg: "600" }}
                        cursor="pointer"
                        hoverColor="red"
                        width="100%"
                        height="100%"
                        display="flex"
                        justify="center"
                        align="center"
                    >
                        Load more
                    </H3>
                </Button>
            </Div>
        </Div>
    );
}

export default TVSearies;