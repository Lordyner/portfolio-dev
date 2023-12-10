import { DataProvider } from '@/Context/DataProvider'
import '../styles/index.scss';

export default function App({ Component, pageProps }) {
  return <DataProvider>
    <Component {...pageProps} />
  </DataProvider>
}
