import type { NextPage } from 'next';
import Image from 'next/image';

import br from '../../../assets/br.svg';
import eua from '../../../assets/eua.svg';

const Header: NextPage = () => {
    return (
    <>
        <div>
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
        <div>
            <h1> Gabriel Pinheiro <br/> <strong> Programador </strong> </h1>
        </div>    
    </>
    )
}

export default Header;