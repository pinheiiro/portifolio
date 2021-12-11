import { NextComponentType } from 'next';
import Image from 'next/image';

import ideia from '../../assets/ideia.svg';
import backend from '../../assets/back-end.svg';
import frontend from '../../assets/front-end.svg';

const BodyServicos: NextComponentType = () => {
    
    const servicos = [
        {
            icon: ideia,
            titulo: 'Desevolvimento de Idéias',
            texto: 'Protótipação de ideias para tornar uma aplicação mais viável possível'
        },
        {
            icon: backend,
            titulo: 'Desevolvimento de Back-end',
            texto: 'Crição de API completas com Node JS e integração com base de dados da sua preferência, além de fluxo de autenticação e etc ...'
        },
        {
            icon: frontend,
            titulo: 'Desevolvimento de Front-End',
            texto: 'Criação de sites com as tecnologias atuais e mais utilizadas no mercado. HTML, CSS, JavaScript, React'
        }
    ]

    return (
    <>
        <h1>Serviços</h1>
        <div>
            {servicos.map((servico) => {
                return (
                    <div key={servico.titulo}>
                        <Image
                            src={servico.icon}
                            alt={servico.titulo}
                        />
                        <h2>{servico.titulo}</h2>
                        <p>{servico.texto}</p>
                    </div>
                )
            })}
        </div>
    </>
    );
}

export default BodyServicos;