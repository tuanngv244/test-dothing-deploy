import NavLeft from "./NavLeft";
import NavTop from "./NavTop";

export const navpos = {
    'top': NavTop,
    'left': NavLeft
}

export type NavPosType = keyof typeof navpos