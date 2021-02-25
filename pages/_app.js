import '../styles/global.scss';
import PageHeader from '../components/PageHeader/PageHeader';
import PageFooter from '../components/PageFooter/PageFooter';

function MyApp({ Component, pageProps }) {
  return (
    <>
      <PageHeader />
      <Component {...pageProps} />
      <PageFooter />
    </>
  )
}

export default MyApp
