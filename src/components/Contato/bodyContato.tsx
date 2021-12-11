import { NextComponentType } from 'next';
import Image from 'next/image';

import imgEmail from '../../assets/email.svg';
import imgTelefone from '../../assets/telefone.svg';
import imgLocalizacao from '../../assets/localizacao.svg';

const BodyContato: NextComponentType = () => {

    const contatos = [
        {
            img: imgEmail,
            titulo: 'Email',
            desc: 'gp.psl55@gmail.com'
        },
        {
            img: imgTelefone,
            titulo: 'Telefone',
            desc: '+55 (75) 998303588'
        },
        {
            img: imgLocalizacao,
            titulo: 'Localização',
            desc: 'Alagoinhas - Bahia'
        }
    ]

    return (
    <>
        <h1>Contato</h1>
        <div>
            {contatos.map((contato) => {
                return (
                    <div key={contato.titulo}>
                        <Image
                            src={contato.img}
                            alt={contato.titulo}
                        />
                        <h2>{contato.titulo}</h2>
                        <h4>{contato.desc}</h4>
                    </div>
                )
            })}
        </div>
        <button>Envie uma mensagem</button>
    </>
    )
}

export default BodyContato;