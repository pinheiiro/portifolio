import type { NextPage } from 'next';
import Image from 'next/image';

import { Rodape } from './style';

import linkedin from '../../../assets/linkedIn.svg';
import github from '../../../assets/github.svg';

const Footer : NextPage = () => {
    return (
    <>
        <a target="_blank" href="https://linkedin.com/in/pinheiiro">
            <Image
                src={linkedin}
                alt="linkedin"
            />
        </a>

        <a target="_blank" href="https://github.com/pinheiiro">
            <Image
                src={github}
                alt="github"
            />
        </a>

        <Rodape>Desenvolvido por Gabriel Pinheiro</Rodape>
    </>
    )
}

export default Footer;