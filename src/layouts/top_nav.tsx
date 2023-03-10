import { useEffect, useState } from "react";
import { Link, Route, useLocation } from "react-router-dom";
import { Logo } from "../assets";
import { Button, Div, H1, H3, Img } from "../styles";
import { Color } from "../variables";

function TopNav() {

    const [active, setActive] = useState(1);
    const [navbar, setNavbar] = useState(false);
    const { pathname } = useLocation();

    const changeBackground = () => {
        if (window.scrollY >= 66) {
            setNavbar(true)
        } else {
            setNavbar(false)
        }
    }

    useEffect(() => {
        changeBackground()
        window.addEventListener("scroll", changeBackground)
    }, [navbar, changeBackground])

    return (
        <Div
            width="100%"
            height={navbar ? "70px" : "auto"}
            margin="0 auto"
            displays={{ xs: "flex", sm: "flex", md: "flex", lg: "flex" }}
            justify="space-around"
            align="center"
            position="absolute"
            top="0px"
            left="auto"
            backgroundColor={navbar ? Color.black_500 : "transparent"}
        >
            <Div displays={{ xs: "flex", sm: "flex", md: "flex", lg: "flex" }} align="center" margin="20px">
                <Img src={Logo} Width={{ xs: "30px", sm: "50px" }} Height={{ xs: "30px", sm: "50px" }} />
                <H1
                    margin="0 10px"
                    fontSize={{ xs: "15px", sm: "20px", md: "30px", lg: "40px" }}
                    fontWeight={{ sm: "500", md: "500", lg: "700" }}
                    cursor="pointer"
                    color={Color.white}
                    hoverColor={Color.red}
                >
                    tMovies
                </H1>
            </Div>
            <Div displays={{ xs: "flex", sm: "flex", md: "flex", lg: "flex" }} align="center" justify="end" margin="20px">
                <Link to="/">
                    <Button
                        width="80px"
                        height="40px"
                        margin="0 10px"
                        border="none"
                        borderButtom={
                            pathname === "/" ?
                                `2px solid ${Color.red}` :
                                "2px solid transparent"
                        }
                    >
                        <H3
                            fontSize={{ sm: "15px", md: "18px", lg: "23px" }}
                            fontWeight={{ sm: "500", md: "500", lg: "700" }}
                            cursor="pointer"
                            color={Color.white}
                            hoverColor={Color.red}
                        >
                            Home
                        </H3>
                    </Button>
                </Link>
                <Link to="movies">
                    <Button
                        width="80px"
                        height="40px"
                        margin="0 10px"
                        border="none"
                        display="flex"
                        justify="center"
                        borderButtom={
                            pathname === "/movies" ?
                                `2px solid ${Color.red}` :
                                "2px solid transparent"
                        }
                    >
                        <H3
                            fontSize={{ sm: "15px", md: "18px", lg: "23px" }}
                            fontWeight={{ sm: "500", md: "500", lg: "700" }}
                            cursor="pointer"
                            color={Color.white}
                            hoverColor={Color.red}
                            height="100%"
                            display="flex"
                            justify="center"
                            align="center"
                        >
                            Movies
                        </H3>
                    </Button>
                </Link>
                <Link to="tv-series">
                    <Button
                        width="120px"
                        height="40px"
                        margin="0 10px"
                        border="none"
                        borderButtom={
                            pathname === "/tv-series" ?
                                `2px solid ${Color.red}` :
                                "2px solid transparent"
                        }
                    >
                        <H3
                            fontSize={{ sm: "15px", md: "18px", lg: "23px" }}
                            fontWeight={{ sm: "500", md: "500", lg: "700" }}
                            cursor="pointer"
                            color={Color.white}
                            hoverColor={Color.red}
                        >
                            TV Series
                        </H3>
                    </Button>
                </Link>
            </Div>
        </Div>
    );
}

export default TopNav;