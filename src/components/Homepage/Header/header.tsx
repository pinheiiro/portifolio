import type { NextComponentType } from 'next';
import Image from 'next/image';

import { Body } from './style';

import br from '../../../assets/br.svg';
import eua from '../../../assets/eua.svg';

const Header: NextComponentType = () => {
    return (
        <Body>
            <div className="botoes">
                <button>
                    <Image
                        src={br}
                        alt="br"
                        width={30}
                        height={30}
                    />
                </button>
                <button>
                    <Image
                        src={eua}
                        alt="eua"
                        width={30}
                        height={30}
                    />
                </button>
            </div>
            <div className="titulo">
                <h1> Gabriel Pinheiro <br/> <strong> Programador </strong> </h1>
            </div>
        </Body>
    )
}

export default Header;