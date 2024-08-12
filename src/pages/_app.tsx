import { AppLayoutProps } from "next/app";
import Head from "next/head";
import { Router } from "next/router";
import nProgress from "nprogress";
import { ReactNode } from "react";

import { store } from "@/infra/store";
import { CacheProvider } from "@emotion/react";
import { Provider } from "react-redux";

// ** Config Imports
import FallbackSpinner from "@/@core/components/spinner";
import WindowWrapper from "@/@core/components/window-wrapper";
import { defaultACLObj } from "@/infra/configs/acl";
import "@/infra/configs/i18n";
import themeConfig from "@/infra/configs/themeConfig";

import AuthGuard from "@/@core/components/auth/AuthGuard";
import GuestGuard from "@/@core/components/auth/GuestGuard";
import ThemeComponent from "@/@core/theme/ThemeComponent";
import ClientLayout from "@/infra/layouts/ClientLayout";

import {
  SettingsConsumer,
  SettingsProvider,
} from "@/@core/context/settingsContext";
import { createEmotionCache } from "@/@core/utils/create-emotion-cache";
import { AuthProvider } from "@/infra/context/AuthContext";

import { noto } from "@/@core/fonts";
import "prismjs";
import "prismjs/components/prism-jsx";
import "prismjs/components/prism-tsx";
import "prismjs/themes/prism-tomorrow.css";
import "react-perfect-scrollbar/dist/css/styles.css";

import "@/app/global.css";
import { Toaster } from "react-hot-toast";
import { useTranslation } from "react-i18next";

const clientSideEmotionCache = createEmotionCache();

if (themeConfig.routingLoader) {
  Router.events.on("routeChangeStart", () => {
    nProgress.start();
  });
  Router.events.on("routeChangeError", () => {
    nProgress.done();
  });
  Router.events.on("routeChangeComplete", () => {
    nProgress.done();
  });
}

type GuardProps = {
  children?: ReactNode;
  authGuard?: any;
  guestGuard?: any;
};

const Guard = ({ children, authGuard, guestGuard }: GuardProps) => {
  if (guestGuard) {
    return <GuestGuard fallback={<FallbackSpinner />}>{children}</GuestGuard>;
  } else if (!guestGuard && !authGuard) {
    return <>{children}</>;
  } else {
    return <AuthGuard fallback={<FallbackSpinner />}>{children}</AuthGuard>;
  }
};

type AppPropsExt = AppLayoutProps & { emotionCache: any };

const App = ({
  Component,
  pageProps,
  emotionCache = clientSideEmotionCache,
}: AppPropsExt) => {
  const getLayout =
    Component.getLayout ??
    ((page: ReactNode) => <ClientLayout>{page}</ClientLayout>);

  const { t } = useTranslation();

  const setConfig = Component.setConfig ?? undefined;
  const authGuard = Component.authGuard ?? true;
  const guestGuard = Component.guestGuard ?? false;
  const aclAbilities = Component.acl ?? defaultACLObj;

  return (
    <Provider store={store}>
      <CacheProvider value={emotionCache}>
        <Head>
          <title>{`DOTHING | IoT Smart Logisitics Solution - ${t(
            "NAV.home"
          )}`}</title>
          <meta
            name="description"
            content={`DOTHING | IoT Smart Logisitics Solution – Home`}
          />
          <meta name="keywords" content="crm, dki, platform" />
          <meta name="viewport" content="initial-scale=1, width=device-width" />
          <link
            rel="apple-touch-icon"
            sizes="180x180"
            href="/apple-touch-icon.png"
          />
          <link rel="shortcut icon" href="/favicon.ico" />
          <style global>{`
            :root {
              --noto-font: ${noto.style.fontFamily};
            }
          `}</style>
        </Head>

        <AuthProvider>
          <SettingsProvider
            {...(setConfig ? { pageSettings: setConfig() } : {})}
          >
            <SettingsConsumer>
              {({ settings }) => {
                return (
                  <ThemeComponent settings={settings}>
                    <WindowWrapper>
                      {getLayout(<Component {...pageProps} />)}
                      {/* <Guard authGuard={authGuard} guestGuard={guestGuard}>
                        <PermissionGuard aclAbilities={aclAbilities} guestGuard={guestGuard}>
                          {getLayout(<Component {...pageProps} />)}
                        </PermissionGuard>
                      </Guard> */}
                    </WindowWrapper>
                  </ThemeComponent>
                );
              }}
            </SettingsConsumer>
          </SettingsProvider>
        </AuthProvider>
      </CacheProvider>
      <Toaster />
    </Provider>
  );
};

export default App;
