import { useEffect, ReactNode } from "react";
import { useRouter } from "next/router";
import { useAuth } from "@/infra/hooks/useAuth";
import localStorageData from "@/@core/utils/localStorage";
import authConfig from "@/infra/configs/auth";

type AuthGuardProps = {
  children?: ReactNode;
  fallback?: any;
};

const AuthGuard = (props: AuthGuardProps) => {
  const { children, fallback } = props;
  const auth = useAuth();
  const router = useRouter();

  useEffect(() => {
    if (!router.isReady) return;
    if (!auth.user && !localStorageData.getItem(authConfig.storeUser)) {
      if (router.asPath !== "/") {
        router.replace({
          pathname: "/login",
          query: { returnUrl: router.asPath },
        });
      } else {
        router.replace("/");
      }
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [router.route]);

  if (auth.loading || auth.user === null) {
    return fallback;
  }

  return <>{children}</>;
};

export default AuthGuard;
