import type { NextComponentType } from 'next';
import Image from 'next/image';

import { Rodape } from './style';

import linkedin from '../../../assets/linkedIn.svg';
import github from '../../../assets/github.svg';

const Footer : NextComponentType = () => {
    return (
        <Rodape>
            <a target="_blank" href="https://linkedin.com/in/pinheiiro">
                <Image
                    src={linkedin}
                    alt="linkedin"
                    width={50}
                    height={50}
                />
            </a>

            <a target="_blank" href="https://github.com/pinheiiro">
                <Image
                    src={github}
                    alt="github"
                    width={50}
                    height={50}
                />
            </a>
        </Rodape>
    )
}

export default Footer;