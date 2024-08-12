import { ReactNode, useContext } from "react";
import { AbilityContext } from "./Can";

type SectionTitleProps = {
    children: ReactNode,
    navTitle?: any
}

const CanViewNavSectionTitle = (props: SectionTitleProps) => {
    const { children, navTitle } = props
    const ability = useContext(AbilityContext)

    // return ability && ability.can(navTitle?.action, navTitle?.feature) ? <>{children}</> : null
    return children
}

export default CanViewNavSectionTitle