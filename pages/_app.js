import '../styles/index.css';
import '../styles/embla.css';
import '../styles/wordpress_style.min.css';
import { SpeedInsights } from "@vercel/speed-insights/next"
import { Analytics } from '@vercel/analytics/react';
import { GlobalContextProvider } from '@/Store/GlobalContext';
import Script from 'next/script';
import { Poppins } from 'next/font/google'
import { GoogleTagManager } from '@next/third-parties/google'

const poppins = Poppins({
  weight: ['300', '400', '500', '600', '700', '800'],
  style: ['normal'],
  subsets: ['latin']
})

export default function App({ Component, pageProps }) {

  return <GlobalContextProvider>
    <div className={poppins.className}>
      <Component {...pageProps} />
    </div>
    <SpeedInsights />
    <Analytics />
    <GoogleTagManager gtmId="GTM-MGPLHD9R" />
  </GlobalContextProvider>
}
