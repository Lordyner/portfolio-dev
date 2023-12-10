import { DataProvider } from '@/Context/DataProvider'
import '../styles/index.scss';
import { SpeedInsights } from "@vercel/speed-insights/next"
import { Analytics } from '@vercel/analytics/react';

export default function App({ Component, pageProps }) {
  return <DataProvider>
    <Component {...pageProps} />
    <SpeedInsights />
    <Analytics />
  </DataProvider>
}
