import '../styles/index.css';
import '../styles/embla.css';
import { SpeedInsights } from "@vercel/speed-insights/next"
import { Analytics } from '@vercel/analytics/react';
import { GlobalContextProvider } from '@/Store/GlobalContext';
import Script from 'next/script';
import { Poppins } from 'next/font/google'


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

    {/* <Script type="text/javascript" charset="UTF-8" src="//cdn.cookie-script.com/s/950fd7c3a8f4e1aa26f0b63459f875b6.js"></Script> */}

  </GlobalContextProvider>
}
