import { createContext } from "react";
import { createContextualCan } from '@casl/react'

export const AbilityContext = createContext<any>(null)

export default createContextualCan(AbilityContext.Consumer)