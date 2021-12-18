import { NextComponentType } from 'next';
import Image from 'next/image';
import { useState } from 'react';

import ModalForm from './ModalForm/modalForm';

import { Container, H1, Div, Button } from './style';

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

    const [modal, setModal] = useState(false);

    function onModal() {
        setModal(true);
    }

    function offModal() {
        setModal(false);
    }

    return (
    <>
        <Container>
            <H1>Contato</H1>
            <Div>
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
            </Div>
            <Button onClick={onModal}>Envie uma mensagem</Button>
        </Container>
        <ModalForm state={modal} offModal={offModal}/>
    </>
    )
}

export default BodyContato;