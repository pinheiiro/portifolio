import { NextComponentType } from 'next';
import { Carousel } from '../Slider/slider';

import { Div } from './style';

const Site : NextComponentType = () => {

    const sites = [
        {
            titulo: 'Quiz',
            desc: 'Um quiz de perguntas e respostas',
            url: 'https://p-quiz.netlify.app/'
        },
        {
            titulo: 'Análise de Viagens',
            desc: 'Um site que dá dicas de lugares interessantes pelo mundo',
            url: 'https://google.com'
        }
    ]

    return (
    <Div>
        <Carousel>
            {sites.map((site) => {
                return (
                    <div className="card" key={site.titulo}>
                        <h2>{site.titulo}</h2>
                        <p>{site.desc}</p>
                        <h5>Olá</h5>
                        <div className="btn">
                            <a target="_blank" href={site.url} rel="noopener noreferrer">
                                <button>Ver Projeto</button>
                            </a>
                        </div>
                    </div>
                )
            })}
        </Carousel>
    </Div>
    )
}

export default Site;