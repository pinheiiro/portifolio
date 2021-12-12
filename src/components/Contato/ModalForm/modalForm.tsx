import Modal from 'react-modal';
import Image from 'next/image';
import fechar from '../../../assets/botaoFechar.svg';

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
            <button onClick={offModal}>
                <Image
                    src={fechar}
                    alt="Fechar"
                />
            </button>
            <h2>Preencha o formulário e entre em contato agora mesmo</h2>
            <form action="">
                <input type="text" placeholder="Nome" required/>
                <input type="email" placeholder="Email" required/>
                <input type="text" placeholder="Assunto" required/>
                <textarea name="mensagem" id="" placeholder="Mensagem" required />
                <button type="submit">Enviar</button>
            </form>
        </Modal>
    </>
    )
}

export default ModalForm;