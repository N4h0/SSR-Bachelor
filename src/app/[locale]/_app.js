import Layout from './layout'
import "bootstrap/dist/css/bootstrap.min.css"
import '../styles/globals.css';

 
export default function MyApp({ Component, pageProps }) {
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  )
}