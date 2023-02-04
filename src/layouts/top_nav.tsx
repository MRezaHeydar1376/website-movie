import { useState } from "react";
import { Logo } from "../assets";
import { Button, Div, H1, H3, Img } from "../styles";
import { Color } from "../variables";

function TopNav() {

    const [active, setActive] = useState(1);

    function activeButton(id: number) {
        setActive(id)
    };

    return (
        <Div
            width="100%"
            margin="0 auto"
            display="flex"
            justify="space-around"
            align="center"
            position="absolute"
            top="0px"
            left="auto"
        >
            <Div display="flex" align="center" margin="20px">
                <Img src={Logo} width="50px" height="50px" />
                <H1
                    margin="0 10px"
                    fontWeight="700"
                    fontSize="40px"
                    cursor="pointer"
                    color={Color.white}
                    hoverColor={Color.red}
                >
                    tMovies
                </H1>
            </Div>
            <Div display="flex" align="center" justify="end" margin="20px">
                <Button
                    width="80px"
                    height="40px"
                    margin="0 10px"
                    border="none"
                    borderButtom={active === 1 ? `2px solid ${Color.red}` : "2px solid transparent"}
                    onClick={() => activeButton(1)}
                >
                    <H3
                        fontWeight="700"
                        fontSize="23px"
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
                        fontWeight="700"
                        fontSize="23px"
                        cursor="pointer"
                        color={Color.white}
                        hoverColor={Color.red}
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
                        fontWeight="700"
                        fontSize="23px"
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