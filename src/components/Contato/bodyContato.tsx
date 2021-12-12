import { NextComponentType } from 'next';
import Image from 'next/image';
import { useState } from 'react';

import imgEmail from '../../assets/email.svg';
import imgTelefone from '../../assets/telefone.svg';
import imgLocalizacao from '../../assets/localizacao.svg';

import ModalForm from './ModalForm/modalForm';

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

    const [modal, setModal] = useState(false);

    function onModal() {
        setModal(true);
    }

    function offModal() {
        setModal(false);
    }

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
        <button onClick={onModal}>Envie uma mensagem</button>
        <ModalForm state={modal} offModal={offModal}/>
    </>
    )
}

export default BodyContato;