import type { NextPage } from 'next';
import Head from 'next/head';
import Voltar from '../components/voltar';
import BodyServicos from '../components/Servicos/bodyServicos';

const Servicos: NextPage = () => {
    return (
        <div className="servicos">
            <Head>
                <title>Serviços</title>
            </Head>
            <Voltar/>
            <BodyServicos/>
        </div>
    )
}

export default Servicos;