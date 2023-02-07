import { useEffect, useState } from "react";
import { Logo } from "../assets";
import { Button, Div, H1, H3, Img } from "../styles";
import { Color } from "../variables";

function TopNav() {

    const [active, setActive] = useState(1);
    const [navbar, setNavbar] = useState(false)

    function activeButton(id: number) {
        setActive(id)
    };

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
    }, [navbar,changeBackground])

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
                <Button
                    width="80px"
                    height="40px"
                    margin="0 10px"
                    border="none"
                    borderButtom={active === 1 ? `2px solid ${Color.red}` : "2px solid transparent"}
                    onClick={() => activeButton(1)}
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
                <Button
                    width="80px"
                    height="40px"
                    margin="0 10px"
                    border="none"
                    display="flex"
                    justify="center"
                    borderButtom={active === 2 ? `2px solid ${Color.red}` : "2px solid transparent"}
                    onClick={() => activeButton(2)}
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
                <Button
                    width="120px"
                    height="40px"
                    margin="0 10px"
                    border="none"
                    borderButtom={active === 3 ? `2px solid ${Color.red}` : "2px solid transparent"}
                    onClick={() => activeButton(3)}
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
            </Div>
        </Div>
    );
}

export default TopNav;