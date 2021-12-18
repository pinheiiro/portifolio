import type { NextPage } from 'next';
import Voltar from '../components/voltar';
import Body from '../components/Contato/bodyContato';

const Contato: NextPage = () => {
    return (
        <div className="contato">
            <Voltar/>
            <Body/>
        </div>
    )
}

export default Contato;