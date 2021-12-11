import type { NextPage } from 'next';
import Voltar from '../components/voltar';
import BodyServicos from '../components/Servicos/bodyServicos';

const Servicos: NextPage = () => {
    return (
    <>
        <Voltar/>
        <BodyServicos/>
    </>
    )
}

export default Servicos;