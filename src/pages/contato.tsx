import type { NextPage } from 'next';
import Head from 'next/head';
import Voltar from '../components/voltar';
import Body from '../components/Contato/bodyContato';

const Contato: NextPage = () => {
    return (
        <div className="contato">
            <Head>
                <title>Contato</title>
            </Head>
            <Voltar/>
            <Body/>
        </div>
    )
}

export default Contato;