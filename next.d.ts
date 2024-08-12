import type {
  NextComponentType,
  NextPageContext,
  NextLayoutComponentType,
} from "next";
import type { AppProps } from "next/app";

declare module "next" {
  type NextLayoutComponentType<P = {}> = NextComponentType<
    NextPageContext,
    any,
    P
  > & {
    getLayout?: (page: ReactNode) => ReactNode;
    setConfig?: any,
    authGuard?: any,
    guestGuard?: any,
    acl?: any
  };
}

declare module "next/app" {
  type AppLayoutProps<P = {}> = AppProps & {
    Component: NextLayoutComponentType;
  };
}

declare module '@mui/material/styles/createPalette' {
  interface CommonColors {
    bgGray: string
  }

  interface TypeText {
    link: string
  }
}
