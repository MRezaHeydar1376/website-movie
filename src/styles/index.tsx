import styled from "@emotion/styled/macro";
import { Color } from "../variables";

interface PropsDiv {
    width?: string;
    height?: string;
    displays?: { xs?: string; sm?: string; md?: string; lg?: string; xl?: string; xxl?: string };
    gridColumn?: { xs?: string; sm?: string; md?: string; lg?: string; xl?: string; xxl?: string };
    justify?: string;
    align?: string;
    direction?: string;
    wrap?: string;
    position?: string;
    top?: string;
    left?: string;
    backgroundColor?: string;
    boxShadow?: string;
    border?: string;
    borderRadius?: string;
    padding?: string;
    overflowY?: string;
    overflowX?: string;
    margin?: string;
    zIndex?: string;
    cursor?: string;
    backgroundImage?: string;
}

interface PropsButton {
    width?: string;
    height?: string;
    backgrondColor?: string;
    display?: string;
    justify?: string;
    align?: string;
    border?: string;
    borderRadius?: string;
    margin?: string;
    borderButtom?: string;
    hoverBackgrond?: string;
    hoverColor?: string;
}

interface PropsText {
    fontSize?: { xs?: string; sm?: string; md?: string; lg?: string; xl?: string; xxl?: string };
    color?: string;
    hoverColor?: string;
    fontWeight?: { xs?: string; sm?: string; md?: string; lg?: string; xl?: string; xxl?: string };
    margin?: string;
    cursor?: string;
    position?: string;
    top?: string;
    left?: string;
    textAlign?: string;
    width?: string;
    height?: string;
    display?: string;
    justify?: string;
    align?: string;
}

interface PropsImg {
    Width?: { xs?: string; sm?: string; md?: string; lg?: string; xl?: string; xxl?: string };
    Height?: { xs?: string; sm?: string; md?: string; lg?: string; xl?: string; xxl?: string };
    borderRadius?: string;
    position?: string;
    top?: string;
    left?: string;
    cursor?: string;
    filter?: string;
}

const breakPoints = {
    xs: "370px",
    sm: "576px",
    md: "768px",
    lg: "992px",
    xl: "1265px",
    xxl: "1400px",
}

export const Div = styled.div<PropsDiv>`
    ${(props) => Object.entries(props.displays ?? {}).map(([key, value]) => {
    return `@media screen and (min-width: ${breakPoints[key as keyof typeof breakPoints]}){
                display: ${value};
            }`
})};
${(props) => Object.entries(props.gridColumn ?? {}).map(([key, value]) => {
    return `@media screen and (min-width: ${breakPoints[key as keyof typeof breakPoints]}){
                grid-template-columns: ${value};
            }`
})};
    gap: 0px;
    flex-wrap: ${({ wrap = "nowrap" }) => (wrap ? wrap : "nowrap")};
    width: ${({ width = "100%" }) => (width ? width : "100%")};
    background-image: url(${({ backgroundImage = "none" }) => (backgroundImage ? backgroundImage : "100%")});
    height: ${({ height = "auto" }) => (height ? height : "auto")};
    justify-content: ${({ justify = "start" }) => (justify ? justify : "start")};
    align-items: ${({ align = "flex-start" }) => (align ? align : "flex-start")};
    flex-direction: ${({ direction = "row" }) => (direction ? direction : "row")};
    position: ${({ position = "block" }) => (position ? position : "row")};
    top: ${({ top = "0px" }) => (top ? top : "0px")};
    left: ${({ left = "none" }) => (left ? left : "none")};
    padding: ${({ padding = "0px" }) => (padding ? padding : "0px")};
    background-color: ${({ backgroundColor = "transparent" }) => (backgroundColor ? backgroundColor : "transparent")};
    box-shadow: ${({ boxShadow = "none" }) => (boxShadow ? boxShadow : "none")};
    border-radius: ${({ borderRadius = "0px" }) => (borderRadius ? borderRadius : "0px")};
    margin: ${({ margin = "0px" }) => (margin ? margin : "0px")};
    border: ${({ border = "none" }) => (border ? border : "none")};
    z-index: ${({ zIndex = "1" }) => (zIndex ? zIndex : "1")};
    cursor: ${({ cursor = "auto" }) => (cursor ? cursor : "auto")};
    overflow-y: ${({ overflowY = "visible" }) => (overflowY ? overflowY : "visible")};
    overflow-x: ${({ overflowX = "visible" }) => (overflowX ? overflowX : "visible")};
    &::-webkit-scrollbar {
        width: 10px;
        height: 8px !important;
    }
    &::-webkit-scrollbar-track {
        background: transparent;
        width: 10px;
        height: 140px;

    }
    &::-webkit-scrollbar-thumb {
        background: #b49dd8;
        border-radius: 50px;
        height: 1px;
    }
`
export const Button = styled.button<PropsButton>`
    padding: 0;
    width: ${({ width = "100%" }) => (width ? width : "100%")};
    height: ${({ height = "auto" }) => (height ? height : "auto")};
    background-color: ${({ backgrondColor = "transparent" }) => (backgrondColor ? backgrondColor : "transparent")};
    display: ${({ display = "block" }) => (display ? display : "block")};
    justify-content: ${({ justify = "start" }) => (justify ? justify : "start")};
    align-items: ${({ align = "flex-start" }) => (align ? align : "flex-start")};
    border: ${({ border = "1px solid black" }) => (border ? border : "1px solid black")};
    border-bottom: ${({ borderButtom = "none" }) => (borderButtom ? borderButtom : "none")};
    border-radius: ${({ borderRadius = "1px solid black" }) => (borderRadius ? borderRadius : "1px solid black")};
    margin: ${({ margin = "0px" }) => (margin ? margin : "0px")};
    cursor: pointer;
    &:hover {
        background-color: ${({ hoverBackgrond = "none" }) => (hoverBackgrond ? hoverBackgrond : "none")};
    }
`
export const H1 = styled.h1<PropsText>`
    ${(props) => Object.entries(props.fontSize ?? {}).map(([key, value]) => {
    return `@media screen and (min-width: ${breakPoints[key as keyof typeof breakPoints]}){
                font-size: ${value};
            }`
})};
    ${(props) => Object.entries(props.fontWeight ?? {}).map(([key, value]) => {
    return `@media screen and (min-width: ${breakPoints[key as keyof typeof breakPoints]}){
            font-weight: ${value};
            }`
})};
    text-align: ${({ textAlign = "auto" }) => (textAlign ? textAlign : "auto")};
    display: ${({ display = "block" }) => (display ? display : "block")};
    justify-content: ${({ justify = "start" }) => (justify ? justify : "start")};
    align-items: ${({ align = "flex-start" }) => (align ? align : "flex-start")};
    color: ${({ color = Color.black }) => (color ? color : Color.black)};
    font-family: 'Open Sans', sans-serif;
    margin: ${({ margin = "0" }) => (margin ? margin : "0")};
    cursor: ${({ cursor = "auto" }) => (cursor ? cursor : "auto")};
    position: ${({ position = "block" }) => (position ? position : "block")};
    top: ${({ top = "0px" }) => (top ? top : "0px")};
    left: ${({ left = "0px" }) => (left ? left : "0px")};
    &:hover{
        color: ${({ hoverColor = "none" }) => (hoverColor ? hoverColor : "none")};
    }
`
export const H2 = styled.h2<PropsText>`
      ${(props) => Object.entries(props.fontSize ?? {}).map(([key, value]) => {
    return `@media screen and (min-width: ${breakPoints[key as keyof typeof breakPoints]}){
                font-size: ${value};
            }`
})};
    ${(props) => Object.entries(props.fontWeight ?? {}).map(([key, value]) => {
    return `@media screen and (min-width: ${breakPoints[key as keyof typeof breakPoints]}){
            font-weight: ${value};
            }`
})};
text-align: ${({ textAlign = "auto" }) => (textAlign ? textAlign : "auto")};
    display: ${({ display = "block" }) => (display ? display : "block")};
    justify-content: ${({ justify = "start" }) => (justify ? justify : "start")};
    align-items: ${({ align = "flex-start" }) => (align ? align : "flex-start")};
    color: ${({ color = Color.black }) => (color ? color : Color.black)};
    font-family: 'Open Sans', sans-serif;
    margin: ${({ margin = "0" }) => (margin ? margin : "0")};
    cursor: ${({ cursor = "auto" }) => (cursor ? cursor : "auto")};
    position: ${({ position = "block" }) => (position ? position : "block")};
    top: ${({ top = "0px" }) => (top ? top : "0px")};
    left: ${({ left = "0px" }) => (left ? left : "0px")};
    &:hover{
        color: ${({ hoverColor = "none" }) => (hoverColor ? hoverColor : "none")};
    }
`
export const H3 = styled.h3<PropsText>`
    width: ${({ width = "auto" }) => (width ? width : "auto")};
    height: ${({ height = "auto" }) => (height ? height : "auto")};
    ${(props) => Object.entries(props.fontSize ?? {}).map(([key, value]) => {
    return `@media screen and (min-width: ${breakPoints[key as keyof typeof breakPoints]}){
                font-size: ${value};
            }`
})};
    ${(props) => Object.entries(props.fontWeight ?? {}).map(([key, value]) => {
    return `@media screen and (min-width: ${breakPoints[key as keyof typeof breakPoints]}){
            font-weight: ${value};
            }`
})};
text-align: ${({ textAlign = "auto" }) => (textAlign ? textAlign : "auto")};
    display: ${({ display = "block" }) => (display ? display : "block")};
    justify-content: ${({ justify = "start" }) => (justify ? justify : "start")};
    align-items: ${({ align = "flex-start" }) => (align ? align : "flex-start")};
    color: ${({ color = Color.black }) => (color ? color : Color.black)};
    font-family: 'Open Sans', sans-serif;
    margin: ${({ margin = "0" }) => (margin ? margin : "0")};
    cursor: ${({ cursor = "auto" }) => (cursor ? cursor : "auto")};
    position: ${({ position = "block" }) => (position ? position : "block")};
    top: ${({ top = "0px" }) => (top ? top : "0px")};
    left: ${({ left = "0px" }) => (left ? left : "0px")};
    &:hover{
        color: ${({ hoverColor = "none" }) => (hoverColor ? hoverColor : "none")};
    }
`
export const H4 = styled.h4<PropsText>`
      ${(props) => Object.entries(props.fontSize ?? {}).map(([key, value]) => {
    return `@media screen and (min-width: ${breakPoints[key as keyof typeof breakPoints]}){
                font-size: ${value};
            }`
})};
    ${(props) => Object.entries(props.fontWeight ?? {}).map(([key, value]) => {
    return `@media screen and (min-width: ${breakPoints[key as keyof typeof breakPoints]}){
            font-weight: ${value};
            }`
})};
text-align: ${({ textAlign = "auto" }) => (textAlign ? textAlign : "auto")};
    display: ${({ display = "block" }) => (display ? display : "block")};
    justify-content: ${({ justify = "start" }) => (justify ? justify : "start")};
    align-items: ${({ align = "flex-start" }) => (align ? align : "flex-start")};
    color: ${({ color = Color.black }) => (color ? color : Color.black)};
    font-family: 'Open Sans', sans-serif;
    margin: ${({ margin = "0" }) => (margin ? margin : "0")};
    cursor: ${({ cursor = "auto" }) => (cursor ? cursor : "auto")};
    position: ${({ position = "block" }) => (position ? position : "block")};
    top: ${({ top = "0px" }) => (top ? top : "0px")};
    left: ${({ left = "0px" }) => (left ? left : "0px")};
    text-align: ${({ textAlign = "auto" }) => (textAlign ? textAlign : "auto")};
    &:hover{
        color: ${({ hoverColor = "none" }) => (hoverColor ? hoverColor : "none")};
    }
`
export const H5 = styled.h5<PropsText>`
  ${(props) => Object.entries(props.fontSize ?? {}).map(([key, value]) => {
    return `@media screen and (min-width: ${breakPoints[key as keyof typeof breakPoints]}){
                font-size: ${value};
            }`
})};
    ${(props) => Object.entries(props.fontWeight ?? {}).map(([key, value]) => {
    return `@media screen and (min-width: ${breakPoints[key as keyof typeof breakPoints]}){
            font-weight: ${value};
            }`
})};
text-align: ${({ textAlign = "auto" }) => (textAlign ? textAlign : "auto")};
    display: ${({ display = "block" }) => (display ? display : "block")};
    justify-content: ${({ justify = "start" }) => (justify ? justify : "start")};
    align-items: ${({ align = "flex-start" }) => (align ? align : "flex-start")};
    color: ${({ color = Color.black }) => (color ? color : Color.black)};
    font-family: 'Open Sans', sans-serif;
    margin: ${({ margin = "0" }) => (margin ? margin : "0")};
    cursor: ${({ cursor = "auto" }) => (cursor ? cursor : "auto")};
    position: ${({ position = "block" }) => (position ? position : "block")};
    top: ${({ top = "0px" }) => (top ? top : "0px")};
    left: ${({ left = "0px" }) => (left ? left : "0px")};
    &:hover{
        color: ${({ hoverColor = "none" }) => (hoverColor ? hoverColor : "none")};
    }
`
export const H6 = styled.h6<PropsText>`
  ${(props) => Object.entries(props.fontSize ?? {}).map(([key, value]) => {
    return `@media screen and (min-width: ${breakPoints[key as keyof typeof breakPoints]}){
                font-size: ${value};
            }`
})};
    ${(props) => Object.entries(props.fontWeight ?? {}).map(([key, value]) => {
    return `@media screen and (min-width: ${breakPoints[key as keyof typeof breakPoints]}){
            font-weight: ${value};
            }`
})};
text-align: ${({ textAlign = "auto" }) => (textAlign ? textAlign : "auto")};
    display: ${({ display = "block" }) => (display ? display : "block")};
    justify-content: ${({ justify = "start" }) => (justify ? justify : "start")};
    align-items: ${({ align = "flex-start" }) => (align ? align : "flex-start")};
    color: ${({ color = Color.black }) => (color ? color : Color.black)};
    font-family: 'Open Sans', sans-serif;
    margin: ${({ margin = "0" }) => (margin ? margin : "0")};
    cursor: ${({ cursor = "auto" }) => (cursor ? cursor : "auto")};
    position: ${({ position = "block" }) => (position ? position : "block")};
    top: ${({ top = "0px" }) => (top ? top : "0px")};
    left: ${({ left = "0px" }) => (left ? left : "0px")};
    &:hover{
        color: ${({ hoverColor = "none" }) => (hoverColor ? hoverColor : "none")};
    }
`
export const Paragraph = styled.p<PropsText>`
      ${(props) => Object.entries(props.fontSize ?? {}).map(([key, value]) => {
    return `@media screen and (min-width: ${breakPoints[key as keyof typeof breakPoints]}){
                font-size: ${value};
            }`
})};
    ${(props) => Object.entries(props.fontWeight ?? {}).map(([key, value]) => {
    return `@media screen and (min-width: ${breakPoints[key as keyof typeof breakPoints]}){
            font-weight: ${value};
            }`
})};
text-align: ${({ textAlign = "auto" }) => (textAlign ? textAlign : "auto")};
    display: ${({ display = "block" }) => (display ? display : "block")};
    justify-content: ${({ justify = "start" }) => (justify ? justify : "start")};
    align-items: ${({ align = "flex-start" }) => (align ? align : "flex-start")};
    color: ${({ color = Color.black }) => (color ? color : Color.black)};
    font-family: 'Open Sans', sans-serif;
    margin: ${({ margin = "0" }) => (margin ? margin : "0")};
    cursor: ${({ cursor = "auto" }) => (cursor ? cursor : "auto")};
    position: ${({ position = "block" }) => (position ? position : "block")};
    top: ${({ top = "0px" }) => (top ? top : "0px")};
    left: ${({ left = "0px" }) => (left ? left : "0px")};
    &:hover{
        color: ${({ hoverColor = "none" }) => (hoverColor ? hoverColor : "none")};
    }
`
export const Img = styled.img<PropsImg>`
   ${(props) => Object.entries(props.Width ?? {}).map(([key, value]) => {
    return `@media screen and (min-width: ${breakPoints[key as keyof typeof breakPoints]}){
                width: ${value};
            }`
})};
 ${(props) => Object.entries(props.Height ?? {}).map(([key, value]) => {
    return `@media screen and (min-width: ${breakPoints[key as keyof typeof breakPoints]}){
                height: ${value};
            }`
})};
    border-radius: ${({ borderRadius = "0%" }) => (borderRadius ? borderRadius : "0%")};
    position: ${({ position = "block" }) => (position ? position : "block")};
    top: ${({ top = "0px" }) => (top ? top : "0px")};
    left: ${({ left = "0px" }) => (left ? left : "0px")};
    cursor: ${({ cursor = "auto" }) => (cursor ? cursor : "auto")};
    filter: brightness(${({ filter = "100%" }) => (filter ? filter : "auto")});
`
