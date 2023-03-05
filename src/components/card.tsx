import apiConfig from "../api/api_config";
import { Div, H3, Img } from "../styles";
import { Color } from "../variables";

interface Props {
    image: string;
    name: string;
}

function Card({ image, name }: Props) {
    return (
        <Div width="350px" displays={{xs: "flex"}} direction="column" align="center">
            <Img
                src={apiConfig.w500Image(image)}
                width="350px"
                height="500px"
                borderRadius="10px"
            />
            <H3 color={Color.white} fontSize={{xs: "60px"}}>
                {name}
            </H3>
        </Div>
    );
}

export default Card;