import '../styles/index.css';
import { SpeedInsights } from "@vercel/speed-insights/next"
import { Analytics } from '@vercel/analytics/react';
import { GlobalContextProvider } from '@/Store/GlobalContext';
import { useRouter } from 'next/router';
import { gtag } from '../gtag';
import { useEffect } from 'react';
export default function App({ Component, pageProps }) {

  const router = useRouter();

  useEffect(() => {
    const handleRouteChange = (url) => {
      gtag.pageview(url);
    };
    router.events.on('routeChangeComplete', handleRouteChange);
    return () => {
      router.events.off('routeChangeComplete', handleRouteChange);
    };
  }, [router.events]);

  return <GlobalContextProvider>
    <Component {...pageProps} />
    <SpeedInsights />
    <Analytics />
  </GlobalContextProvider>
}
