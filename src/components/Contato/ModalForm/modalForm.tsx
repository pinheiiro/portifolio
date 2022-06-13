import Modal from 'react-modal';
import Image from 'next/image';
import { BaseSyntheticEvent } from 'react';
import emailjs from '@emailjs/browser';

import fechar from '../../../assets/botaoFechar.svg';
import { H2, Button, Form } from './style';

interface IModal {
    state: boolean;
    offModal:() => void;
}

const ModalForm = ({state, offModal}: IModal) => {

    Modal.setAppElement('#__next');

    function sendEmail(e: BaseSyntheticEvent): void {
        e.preventDefault();
        emailjs.sendForm('gmailMessage', 'template_g059q7o', e.target, 'user_6H2yxCWCprtSSzbnOtKmx')
            .then(() => {
                offModal()
                alert('Email enviado com sucesso !');
            }, (error) => {
                offModal()
                alert(error.text);
            });
        e.target.reset();
    }

    return (
    <>
        <Modal 
            isOpen={state} 
            onRequestClose={offModal}
            className="react-modal"
            overlayClassName="react-modal-overlay"
        >
            <Button onClick={offModal}>
                <Image
                    src={fechar}
                    alt="Fechar"
                    height={30}
                />
            </Button>
            <H2>Preencha o formulário e entre <br/> em contato agora mesmo</H2>
            <Form onSubmit={sendEmail}>
                <input type="text" name="name" placeholder="Nome" required/>
                <input type="email" name="email" placeholder="Email" required/>
                <input type="text" name="subject" placeholder="Assunto" required/>
                <textarea name="message" id="" placeholder="Mensagem" required />
                <button type="submit">Enviar</button>
            </Form>
        </Modal>
    </>
    )
}

export default ModalForm;