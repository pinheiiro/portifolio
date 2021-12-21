import type { NextPage } from 'next';
import Head from 'next/head';
import Voltar from '../components/voltar';

import BodyProjetos from '../components/Projetos/bodyProjetos';

const Projetos: NextPage = () => {
    return (
        <div className="projetos">
            <Head>
                <title>Projetos</title>
            </Head>

            <Voltar/>
            <BodyProjetos/>
        </div>
    )
}

export default Projetos;