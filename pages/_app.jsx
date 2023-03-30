import Header from '../components/Header'
import Footer from '../components/Footer'
import '../styles/globals.scss'
import 'react-date-range/dist/styles.css'; // main style file
import 'react-date-range/dist/theme/default.css'; // theme css file
import 'swiper/scss'
import 'swiper/css/navigation'

function MyApp({ Component, pageProps }) {
  return (
    <>
    <Header />
    <Component {...pageProps} />
    <Footer />
    </>
    
  )
}

export default MyApp

