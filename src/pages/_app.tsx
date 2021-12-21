import '../styles/globals.css';
import type { AppProps } from 'next/app';

// Importações da Biblioteca React-Slick
  import "slick-carousel/slick/slick.css"; 
  import "slick-carousel/slick/slick-theme.css";
//

function MyApp({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />
}

export default MyApp
