import type { NextComponentType } from 'next';
import Link from 'next/link';
import Image from 'next/image';

import { Body } from './style';

import seta from '../../../assets/seta.svg';

import imgSobre from '../../../assets/sobre.svg';
import imgContato from '../../../assets/contato.svg';
import imgProjetos from '../../../assets/projetos.svg';
import imgServicos from '../../../assets/servicos.svg';

const Main : NextComponentType = () => {

    const links = [
        {
            pag: "/sobre",
            src: imgSobre,
            alt: "sobre",
            nome: "Sobre"
        },
        {
            pag: "/contato",
            src: imgContato,
            alt: "contato",
            nome: "Contato"
        },
        {
            pag: "/projetos",
            src: imgProjetos,
            alt: "projetos",
            nome: "Projetos"
        },
        {
            pag: "/servicos",
            src: imgServicos,
            alt: "serviços",
            nome: "Serviços"
        },
    ];

    return (
        <Body>
            {links.map((link) => {
                return (
                    <Link href={link.pag} key={link.nome}>
                        <div className="card">
                            <Image
                                src={link.src}
                                alt={link.alt}
                            />
                            <div className="titulo">
                                {link.nome}
                                <Image
                                    src={seta}
                                    alt={`seta${link.nome}`}
                                />
                            </div>
                        </div>
                    </Link>
                );
            })}
        </Body>
    )
}

export default Main;