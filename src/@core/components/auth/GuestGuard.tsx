// ** React Imports
import { useEffect, ReactNode } from 'react'

// ** Next Imports
import { useRouter } from 'next/router'

// ** Hooks Import
import { useAuth } from '@/infra/hooks/useAuth'
import localStorageData from "@/@core/utils/localStorage";
import authConfig from "@/infra/configs/auth";

type AuthGuardProps = {
  children?: ReactNode;
  fallback?: any;
};

const GuestGuard = (props: AuthGuardProps) => {
  const { children, fallback } = props
  const auth = useAuth()
  const router = useRouter()
  useEffect(() => {
    if (!router.isReady) {
      return
    }
    if (localStorageData.getItem(authConfig.storeUser)) {
      router.replace('/')
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [router.route])
  if (auth.loading || (!auth.loading && auth.user !== null)) {
    return fallback
  }

  return <>{children}</>
}

export default GuestGuard
