import { useEffect, useState } from "react";
import { Pathname, useLocation } from "react-router-dom";
import tmdbApi, { Category, Movie, MovieType, Tv, TvType } from "../api/tmdbApi";
import { FooterBg } from "../assets";
import { Card, InputSearch, } from "../components";
import { Button, Div, H2, H3 } from "../styles";
import { Color } from "../variables";

function TVSearies() {
    const [movies, setMovies] = useState<Movie[]>([]);
    const [TVs, setTVs] = useState<Tv[]>([]);
    const [search, setSearch] = useState("");
    const [page, setPage] = useState(1);
    const { pathname } = useLocation();

    useEffect(() => {
        (async () => {
            if (search === "" || search.trim() === "") {
                try {
                    if (pathname === "/tv-series") {
                        const response = await tmdbApi.getTvList(TvType.popular, page)
                        setTVs([...TVs, ...response.data.results])
                    } else if (pathname === "/movies") {
                        const response = await tmdbApi.getMoviesList(MovieType.popular, page)
                        setMovies([...movies, ...response.data.results])
                    }
                }
                catch (error) {
                    console.log(error)
                }
            } else {
                if (pathname === "/tv-series") {
                    const response = await tmdbApi.search(Category.tv, page, search)
                    setTVs([...TVs, ...response.data.results])
                } else if (pathname === "/movies") {
                    const response = await tmdbApi.search(Category.movie, page, search)
                    setMovies([...movies, ...response.data.results])
                }
            }
        })()

    }, [search, page, pathname]);

    useEffect(() => {
        setMovies([]);
        setTVs([]);
    }, [pathname])

    function getValue(value: string) {
        setPage(1)
        setSearch(value);
        setMovies([]);
        setTVs([]);
    };

    function loadMoreFilm() {
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
                {pathname === "/tv-series" ? (
                    TVs?.map(card => (
                        <Div key={card.id}>
                            <Card
                                image={card.poster_path}
                                name={card.original_name}
                                width="95%"
                                height="330px"
                                fontSize="20px"
                                hover={true}
                            />
                        </Div>
                    ))
                ) : pathname === "/movies" ? (
                    movies?.map(card => (
                        <Div key={card.id}>
                            <Card
                                image={card.poster_path}
                                name={card.original_name}
                                width="95%"
                                height="330px"
                                fontSize="20px"
                                hover={true}
                            />
                        </Div>
                    ))
                ) : (null)}
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
                    onClick={loadMoreFilm}
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