// import App from "next/app";
import type { AppProps /*, AppContext */ } from 'next/app'
import 'antd/dist/antd.css'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <Component {...pageProps} />
  )
}

export default MyApp