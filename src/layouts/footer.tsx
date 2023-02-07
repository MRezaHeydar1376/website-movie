import { FooterBg, Logo } from "../assets";
import { Div, H1, H3, Img, Ul } from "../styles";
import { Color } from "../variables";

function Footer() {
    return (
        <Div margin="50px 0 0 0" displays={{ xs: "flex" }} align="center" direction="column" backgroundImage={FooterBg} height="500px">
            <Div
                displays={{ xs: "flex", sm: "flex", md: "flex", lg: "flex" }}
                align="center"
                justify="center"
                width="20%"
                margin="50px 0 0 0"
            >
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
            <Div displays={{ xs: "flex" }} width="70%">
                <Div width="100%" displays={{xs:"flex"}} direction="column">
                    <H3 margin="20px 0" color={Color.white} hoverColor={Color.red} fontSize={{ xs: "12px", sm: "18px", md: "20px", lg: "24px" }} fontWeight={{ xs: "600" }}>
                        Home
                    </H3>
                    <H3 margin="20px 0" color={Color.white} hoverColor={Color.red} fontSize={{ xs: "12px", sm: "18px", md: "20px", lg: "24px" }} fontWeight={{ xs: "600" }}>
                        Contact us
                    </H3>
                    <H3 margin="20px 0" color={Color.white} hoverColor={Color.red} fontSize={{ xs: "12px", sm: "18px", md: "20px", lg: "24px" }} fontWeight={{ xs: "600" }}>
                        Term of services
                    </H3>
                    <H3 margin="20px 0" color={Color.white} hoverColor={Color.red} fontSize={{ xs: "12px", sm: "18px", md: "20px", lg: "24px" }} fontWeight={{ xs: "600" }}>
                        About us
                    </H3>
                </Div>
                <Div width="100%" displays={{xs:"flex"}} direction="column">
                    <H3 margin="20px 0" color={Color.white} hoverColor={Color.red} fontSize={{ xs: "12px", sm: "18px", md: "20px", lg: "24px" }} fontWeight={{ xs: "600" }}>
                        Live
                    </H3>
                    <H3 margin="20px 0" color={Color.white} hoverColor={Color.red} fontSize={{ xs: "12px", sm: "18px", md: "20px", lg: "24px" }} fontWeight={{ xs: "600" }}>
                        FAQ
                    </H3>
                    <H3 margin="20px 0" color={Color.white} hoverColor={Color.red} fontSize={{ xs: "12px", sm: "18px", md: "20px", lg: "24px" }} fontWeight={{ xs: "600" }}>
                        Permium
                    </H3>
                    <H3 margin="20px 0" color={Color.white} hoverColor={Color.red} fontSize={{ xs: "12px", sm: "18px", md: "20px", lg: "24px" }} fontWeight={{ xs: "600" }}>
                        Praivacy policy
                    </H3>
                </Div>
                <Div width="100%" displays={{xs:"flex"}} direction="column">
                    <H3 margin="20px 0" color={Color.white} hoverColor={Color.red} fontSize={{ xs: "12px", sm: "18px", md: "20px", lg: "24px" }} fontWeight={{ xs: "600" }}>
                        You must watch
                    </H3>
                    <H3 margin="20px 0" color={Color.white} hoverColor={Color.red} fontSize={{ xs: "12px", sm: "18px", md: "20px", lg: "24px" }} fontWeight={{ xs: "600" }}>
                        Recent release
                    </H3>
                    <H3 margin="20px 0" color={Color.white} hoverColor={Color.red} fontSize={{ xs: "12px", sm: "18px", md: "20px", lg: "24px" }} fontWeight={{ xs: "600" }}>
                        Top IMDM
                    </H3>
                </Div>
            </Div>
        </Div >
    );
}

export default Footer;