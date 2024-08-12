import { AuthActionTypeable } from '@/domains/interfaces/auth.interface';

const authDefaultProvider = {
    user: null as any,
    loading: true,
    isInitialized: false,
    login: (params: any, cb?: any) => Promise.resolve(),
    register: (params: any, cb?: any) => Promise.resolve(),
    logout: () => Promise.resolve(),
    useDispatch: (action: AuthActionTypeable) => Promise.resolve(),
}

export default authDefaultProvider