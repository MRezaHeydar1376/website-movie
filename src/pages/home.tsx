import { useEffect, useState } from "react";
import tmdbApi, { Movie, MovieType, Tv, TvType } from "../api/tmdbApi";
import { Header, Slider } from "../components";
import { Div } from "../styles";

function Home() {

    const [moviesPopular, setMoviesPopular] = useState<Movie[]>();
    const [moviesTopRated, setMoviesTopRated] = useState<Movie[]>();
    const [tvPopular, setTvPopular] = useState<Tv[]>();

    useEffect(() => {
        (async () => {
            try {
                const responsePopular = await tmdbApi.getMoviesList(MovieType.popular, 1)
                const responseTopRated = await tmdbApi.getMoviesList(MovieType.top_rated, 1)
                const responseTV = await tmdbApi.getTvList(TvType.popular, 1)
                setMoviesPopular(responsePopular.data.results.slice(1, 20).map(({ original_title, ...movie }) => ({ ...movie, original_name: original_title })))
                setMoviesTopRated(responseTopRated.data.results.slice(1, 20).map(({ original_title, ...movie }) => ({ ...movie, original_name: original_title })))
                setTvPopular(responseTV.data.results.slice(1, 20))
            }
            catch (error) {
                console.log(error)
            }
        })()
    }, [])

    return (
        <Div>
            <Header />
            <Div width="98%" margin="0 auto">
                <Slider movies={moviesPopular} title={"Trending Movies"} />
                <Slider movies={moviesTopRated} title={"Top Rated Movies"} />
                <Slider movies={tvPopular} title={"Trending TV"} />
            </Div>
        </Div>
    );
}

export default Home;