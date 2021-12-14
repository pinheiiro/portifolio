import type { NextPage } from 'next';
import Voltar from '../components/voltar';
import Body from '../components/Sobre/bodySobre';

const Sobre : NextPage = () => {
    return (
        <div className="sobre">
            <Voltar/>
            <Body/>
        </div>
    )
}

export default Sobre;