import '../styles/index.css';
import '../styles/embla.css';
import { SpeedInsights } from "@vercel/speed-insights/next"
import { Analytics } from '@vercel/analytics/react';
import { GlobalContextProvider } from '@/Store/GlobalContext';

export default function App({ Component, pageProps }) {
  return <GlobalContextProvider>
    <Component {...pageProps} />
    <SpeedInsights />
    <Analytics />
  </GlobalContextProvider>
}
