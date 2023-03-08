import { Button, Div, H3, Input } from "../styles";
import { Color } from "../variables";

function InputSearch() {
    return (
        <Div displays={{xs: "flex"}} align="center" margin="20px 0px">
            <Input
                backgroundColor={Color.black}
                width="100%"
                height="35px"
                borderRadius="20px"
                color={Color.white}
                placeholder="Enter keyword"
                padding="0 20px"
            />
            <Button
                width="100px"
                height="35px"
                borderRadius="20px"
                backgrondColor={Color.red}
                position="relative"
                left="-25px"
                border="none"
                boxShadow={`0px 0px 20px 5px ${Color.red}`}
                hoverBoxShadow= {`0px 0px 20px 10px ${Color.red}`}
            >
                <H3 color={Color.white} cursor="pointer">
                    Search
                </H3>
            </Button>
        </Div>
    );
}

export default InputSearch;