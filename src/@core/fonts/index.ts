import localFont from 'next/font/local'
import { Noto_Sans_KR } from 'next/font/google'

export const neo = localFont({
    src: [
      {
        path: './SpoqaHanSansNeo/SpoqaHanSansNeo-Regular.ttf',
        weight: '400',
        style: 'normal',
      },
      {
        path: './SpoqaHanSansNeo/SpoqaHanSansNeo-Light.ttf',
        weight: '300',
        style: 'normal',
      },
      {
        path: './SpoqaHanSansNeo/SpoqaHanSansNeo-Medium.ttf',
        weight: '500',
        style: 'normal',
      },
      {
        path: './SpoqaHanSansNeo/SpoqaHanSansNeo-Bold.ttf',
        weight: '700',
        style: 'normal',
      },
      {
        path: './SpoqaHanSansNeo/SpoqaHanSansNeo-Bold.ttf',
        weight: '900',
        style: 'normal',
      },
    ],
 })

export const noto = Noto_Sans_KR({
  weight: ['300','400', '500', '700', '800','900'],
  subsets: ['latin'],
  display: 'swap'
})