import apiConfig from "../api/api_config";
import { Div, Img } from "../styles";

interface Props {
    image: string;
    name: string;
}

function Card({ image, name }: Props) {
    return (
        <Div width="350px">
            <Img
                src={apiConfig.w500Image(image)}
                width="350px"
                height="500px"
                borderRadius="10px"
            />
        </Div>
    );
}

export default Card;