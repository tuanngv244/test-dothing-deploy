import axios, { AxiosRequestConfig } from 'axios'
import queryString from 'query-string'
import Cookies from 'universal-cookie'
import { getRefreshToken } from '@/infra/common/auth'
import localStorageData from './localStorage'

const config: AxiosRequestConfig = {
    baseURL: process.env.NEXT_PUBLIC_BASE_URL_BE,
    paramsSerializer: (params: any) => queryString.stringify(params),
    headers: {
        Accept: 'application/json',
        'Access-Control-Allow-Origin': '*',
        timeout: 180000,
        withCredentials: true
    },
    responseType: 'json'
}

const api = axios.create(config)

export const setJWTAuth = (token: any) => {
    api.defaults.headers.common["Authorization"] = `Bearer ${token}`
}

export const setLang = (lang: string) => {
    api.defaults.headers.common["Accept-Language"] = lang
}

export const setMenu = (menu: string, url: string) => {
    api.defaults.headers.common["menu"] = menu
    api.defaults.headers.common["menuUrl"] = url
}

const getResToken = async(token: string | null) => {
    await getRefreshToken(token)
}

api.interceptors.request.use(
    function (config: any) {
        const cookies = new Cookies(config.headers.cookie)
        const token = cookies.get("accessToken")
        const lang = cookies.get("lang" || "ko")
        
        config.headers['Content-Type'] = 'application/json'

        if (token) {
            config.headers.common["Authorization"] = `Bearer ${token}`
        }

        if (lang) {
            config.headers.common["Accept-Language"] = lang
        }

        return config
    },
    function (error) {
        return Promise.reject(error)
    }
)

api.interceptors.response.use(
    function (response) {
        return response
    },
    function (error) {
        const originalRequest = error.config
        
        if (error.response && error.response.status === 401 && !originalRequest._retry) {
            originalRequest._retry = true
            let refreshToken: string | null

            if (localStorageData.getItem('refreshToken')) {
                refreshToken = localStorageData.getItem('refreshToken')

                return getResToken(refreshToken).then((res) => {
                    setJWTAuth(res)
                    return api(originalRequest)
                }).catch((error) => {
                    localStorageData.clear()
                    location.reload()
                    return Promise.reject(error)
                })
            } 
        }

        return Promise.reject(error)
    }
)

export default api