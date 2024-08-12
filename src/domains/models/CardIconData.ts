import { ReactNode } from "react";

export default interface CardIconData {
    imgSrc: string,
    label?: string,
    elementEn?: ReactNode,
    elementKr?: ReactNode,
    width?: string,
    type?: string
}