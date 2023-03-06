import apiConfig from "../api/api_config";
import { Div, H3, Img } from "../styles";
import { Color } from "../variables";

interface Props {
    image: string;
    name: string;
    width?: string;
    height?: string;
    fontSize?: string;
}

function Card({ image, name, width, height, fontSize }: Props) {
    return (
        <Div
            width={width !== undefined ? width : "350px"}
            displays={{ xs: "flex" }}
            direction="column"
            align="center"
            margin="10px"
        >
            <Img
                src={apiConfig.w500Image(image)}
                width={width !== undefined ? width : "350px"}
                height={height !== undefined ? height : "500px"}
                borderRadius="10px"
            />
            <H3 color={Color.white} fontSize={{ xs: `${fontSize !== undefined ? fontSize : "60px"}` }}>
                {name}
            </H3>
        </Div>
    );
}

export default Card;