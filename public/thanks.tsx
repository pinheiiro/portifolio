import { NextPage } from 'next';
import Voltar from '../src/components/voltar';

const Thanks: NextPage = () => {
    return (
        <div className="thanks">
            <Voltar/>
            <h1>Obrigado pelo envio do email !</h1>
        </div>
    )
}

export default Thanks;