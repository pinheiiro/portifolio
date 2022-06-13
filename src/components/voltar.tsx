import type { NextComponentType } from 'next';
import Image from 'next/image';
import Link from 'next/link';

import style from '../styles/voltar.module.css';

import voltar from '../assets/setaVoltar.svg';

const Voltar : NextComponentType = () => {
    return (
    <>
        <Link href="/">
            <div className={style.voltar}>
                <Image
                    src={voltar}
                    alt="voltar"
                    width={40}
                    height={40}
                />
                <h3>Voltar</h3>
            </div>
        </Link>
    </>
    )
}

export default Voltar;