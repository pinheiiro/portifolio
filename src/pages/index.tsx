import type { NextPage } from 'next';
import Head from 'next/head';

import Header from '../components/Homepage/Header/header';
import Main from '../components/Homepage/Main/main';
import Footer from '../components/Homepage/Footer/footer';

const Home: NextPage = () => {
  return (
    <div className="homepage">
      <Head>
        <title>Home</title>
        <meta name="description" content="Portifólio de Gabriel Pinheiro" />
        <link rel="icon" href="/agenda.png" />
      </Head>

      <Header/>
      <Main/>
      <Footer/>
      
    </div>
  )
}

export default Home;

/*

      <Header/>
      <Main/>
      <Footer/>

*/