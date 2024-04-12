import '../styles/index.css';
import { SpeedInsights } from "@vercel/speed-insights/next"
import { Analytics } from '@vercel/analytics/react';
import { GlobalContextProvider } from '@/Store/GlobalContext';
import Script from 'next/script';

export default function App({ Component, pageProps }) {

  const GA_TRACKING_ID = process.env.GOOGLE_ANALYTICS_ID
  console.log(GA_TRACKING_ID)
  return <GlobalContextProvider>
    <Component {...pageProps} />
    <SpeedInsights />
    <Analytics />
    <Script src={`https://www.googletagmanager.com/gtag/js?id=${GA_TRACKING_ID}`} strategy='afterInteractive' />
    <Script id="google-analytics" strategy='afterInteractive'>
      {`
        window.dataLayer = window.dataLayer || [];
        function gtag(){dataLayer.push(arguments);}
        gtag('js', new Date());
        gtag('config', '${GA_TRACKING_ID}');
      `}
    </Script>

  </GlobalContextProvider>
}
