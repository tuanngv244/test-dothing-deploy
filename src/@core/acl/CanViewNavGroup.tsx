import { ReactNode, useContext } from "react";
import { AbilityContext } from "./Can";

type NavGroupProps = {
    children: ReactNode,
    navGroup?: any
}

const CanViewNavGroup = (props: NavGroupProps) => {
    const { children, navGroup } = props
    const ability = useContext(AbilityContext)

    const canViewMenuGroup = (item: any) => {
        const hasAnyVisibleChild = item.children && item.children.some((i: any) => ability && ability.can(i.action, i.feature))
        if (! (item.action && item.feature)) {
            return hasAnyVisibleChild
        }

        return ability && ability.can(item.action, item.feature) && hasAnyVisibleChild
    }

    // return navGroup && canViewMenuGroup(navGroup) ? <>{children}</> : null
    return children
}

export default CanViewNavGroup