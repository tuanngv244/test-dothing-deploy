import { useContext, ReactNode } from "react";
import { AbilityContext } from "./Can";

type LinkProps = {
    children: ReactNode,
    navLink?: any
}

const CanViewNavLink = (props: LinkProps) => {
    const { children, navLink } = props
    const ability = useContext(AbilityContext)

    //return ability && ability.can(navLink?.action, navLink?.feature) ? <>{children}</> : null
    return children
}

export default CanViewNavLink