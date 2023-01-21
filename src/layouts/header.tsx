import { Logo } from "../assets";
import { Button, Div, H1, H3, Img } from "../styles";

function Header() {
    return (
        <Div width="98%" margin="0 auto" display="flex" justify="space-between" align="center">
            <Div display="flex" align="center">
                <Img src={Logo} width="50px" height="50px" />
                <H1 margin="0 10px" fontWeight="700" fontSize="40px" cursor="pointer">
                    tMovies
                </H1>
            </Div>
            <Div display="flex" align="center" justify="end">
                <Button width="80px" height="40px" margin="0 10px"border="none">
                    <H3 fontWeight="700" fontSize="23px" cursor="pointer">
                        Home
                    </H3>
                </Button>
                <Button width="80px" height="40px" margin="0 10px"border="none">
                    <H3 fontWeight="700" fontSize="23px" cursor="pointer">
                        Movies
                    </H3>
                </Button>
                <Button width="120px" height="40px"margin="0 10px" border="none">
                    <H3 fontWeight="700" fontSize="23px" cursor="pointer">
                        TV Series
                    </H3>
                </Button>
            </Div>
        </Div>
    );
}

export default Header;