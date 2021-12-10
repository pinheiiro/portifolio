import type { NextPage } from 'next';
import Head from 'next/head';
import Voltar from '../components/voltar';

const Projetos: NextPage = () => {
    return (
    <>
        <Head>
            <title>Projetos</title>
        </Head>
        
        <Voltar/>
        <h2>Página de Projetos</h2>
    </>
    )
}

export default Projetos;