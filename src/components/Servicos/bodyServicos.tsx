import { NextComponentType } from 'next';
import Image from 'next/image';

import { H1, Div } from './style';

import ideia from '../../assets/ideia.svg';
import backend from '../../assets/back-end.svg';
import frontend from '../../assets/front-end.svg';

const BodyServicos: NextComponentType = () => {
    
    const servicos = [
        {
            icon: ideia,
            titulo: 'Desenvolvimento de Idéias',
            texto: 'Protótipação de ideias para tornar uma aplicação mais viável possível'
        },
        {
            icon: backend,
            titulo: 'Desenvolvimento de Back-end',
            texto: 'Criação de API completas com Node JS e integração com base de dados da sua preferência, além de fluxo de autenticação, validações e etc ...'
        },
        {
            icon: frontend,
            titulo: 'Desenvolvimento de Front-End',
            texto: 'Criação de sites com as tecnologias atuais e mais utilizadas no mercado. HTML, CSS, JavaScript, React e etc ...'
        },
    ]

    return (
    <>
        <H1>Serviços</H1>
        <Div>
            {servicos.map((servico) => {
                return (
                    <div key={servico.titulo}>
                        <Image
                            src={servico.icon}
                            alt={servico.titulo}
                            height={90}
                        />
                        <h2>{servico.titulo}</h2>
                        <p>{servico.texto}</p>
                    </div>
                )
            })}
        </Div>
    </>
    );
}

export default BodyServicos;