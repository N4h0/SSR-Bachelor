import Layout from '../layout'
import 'bootstrap/dist/css/bootstrap.min.css';

import { appWithTranslation } from 'next-i18next';

function MyApp({ Component, pageProps }) {
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  );
}
export default appWithTranslation(MyApp);
