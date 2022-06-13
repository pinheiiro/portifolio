import type { NextPage } from 'next';
import Head from 'next/head';
import Voltar from '../components/voltar';
import Body from '../components/Sobre/bodySobre';

const Sobre : NextPage = () => {
    return (
        <div className="sobre">
            <Head>
                <title>Sobre</title>
            </Head>
            <Voltar/>
            <Body/>
        </div>
    )
}

export default Sobre;