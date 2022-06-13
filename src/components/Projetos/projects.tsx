import { NextComponentType } from 'next';
import { Carousel } from './Slider/slider';
import Image from 'next/image';

import { H1, Div } from './styleProjects';

import imgQuiz from '../../assets/quiz.svg';
import imgClima from '../../assets/clima.svg';

/* 
    Essa é um arquivo alternativo a bodyProjetos, esse arquivo mostra
    diretamente todos os projetos enquanto o arquivo bodyProjetos mostra
    os projetos por categorias
*/

export const Projects: NextComponentType = () => {

    const projects = [
        {
            titulo: 'Quiz',
            desc: 'Um quiz simples de matemática para testar conhecimentos básicos da matéria. Desenvolvido em React JS.',
            url: 'https://p-quiz.netlify.app/',
            img: imgQuiz
        },
        {
            titulo: 'Clima Atual',
            desc: 'Um site para obter informações do clima atual de qualquer lugar do mundo. Desenvolvido em React JS com Next JS, Typescript, e integrado a uma API de informações climáticas em tempo real.',
            url: 'https://climanow.vercel.app/',
            img: imgClima
        }
    ]

    return (
    <>
        <H1>Projetos</H1>
        <Div>
            <Carousel>
                {projects.map((project) => {
                    return (
                        <div className="card" key={project.titulo}>
                            <h2>{project.titulo}</h2>
                            <p>{project.desc}</p>
                            <div className='img'>
                                <Image
                                    src={project.img}
                                    alt={project.titulo}
                                    width={60}
                                    height={60}
                                />
                            </div>
                            <div className="btn">
                                <a target='_blank' href={project.url} rel="noopener noreferrer">
                                    <button>Ver Projeto</button>
                                </a>
                            </div>
                        </div>
                    )
                })}
            </Carousel>
        </Div>
    </>
    )
}