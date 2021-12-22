import Modal from 'react-modal';
import Image from 'next/image';
import fechar from '../../../assets/botaoFechar.svg';

import { H2, Button, Form } from './style';

interface IModal {
    state: boolean;
    offModal:() => void;
}

const ModalForm = ({state, offModal}: IModal) => {

    Modal.setAppElement('#__next');

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
            <Form action="">
                <input type="text" placeholder="Nome" required/>
                <input type="email" placeholder="Email" required/>
                <input type="text" placeholder="Assunto" required/>
                <textarea name="mensagem" id="" placeholder="Mensagem" required />
                <button type="submit">Enviar</button>
            </Form>
        </Modal>
    </>
    )
}

export default ModalForm;