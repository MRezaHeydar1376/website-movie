import { useState } from "react";
import apiConfig from "../api/api_config";
import { Youtube } from "../assets";
import { Div, H3, H4, Img } from "../styles";
import { Color } from "../variables";

interface Props {
    image: string;
    name: string;
    width?: string;
    height?: string;
    fontSize?: string;
    hover: boolean;
}

function Card({ image, name, width, height, fontSize, hover }: Props) {

    const [mouseIn, setMouseIn] = useState(false)

    function mouseInImage() {
        setMouseIn(true);
    };
    function mouseOutImage() {
        setMouseIn(false);
    };

    return (
        <Div
            width={width !== undefined ? width : "350px"}
            displays={{ xs: "flex" }}
            direction="column"
            align="center"
            margin="10px"
        >
            <Div position="relative">
                <Img
                    src={apiConfig.w500Image(image)}
                    width={width !== undefined ? width : "350px"}
                    height={height !== undefined ? height : "500px"}
                    borderRadius="10px"
                    onMouseEnter={mouseInImage}
                    onMouseOut={mouseOutImage}
                    filter={mouseIn && hover ? "10%" : "100%"}
                />
                {mouseIn && hover ? (
                    <Img
                        onMouseEnter={mouseInImage}
                        src={Youtube}
                        height="60px"
                        position="absolute"
                        top="40%"
                        left="35%"
                        cursor="pointer"
                    />
                ) : null}
            </Div>
            <H4
                color={mouseIn && hover ? Color.red : Color.white}
                fontSize={{ xs: `${fontSize !== undefined ? fontSize : "60px"}` }}
                fontWeight={{ xs: "600" }} 
                textAlign="center"
                margin="20px 0"
            >
                {name}
            </H4>
        </Div>
    );
}

export default Card;