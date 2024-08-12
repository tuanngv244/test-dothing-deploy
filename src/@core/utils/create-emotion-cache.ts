import createCache from '@emotion/cache'

export const createEmotionCache = () => {
    const styleCache = createCache({key: 'css'})
    styleCache.compat = true
    return styleCache
}