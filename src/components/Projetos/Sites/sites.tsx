import { NextComponentType } from 'next';
import { Carousel } from '../Slider/slider';

import { Div } from './style';

const Site : NextComponentType = () => {

    const sites = [
        {
            titulo: 'Quiz',
            desc: 'Um quiz de perguntas e respostas',
        },
        {
            titulo: 'Análise de Viagens',
            desc: 'Um site que dá dicas de lugares interessantes pelo mundo'
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
                            <button>Ver Projeto</button>
                        </div>
                    </div>
                )
            })}
        </Carousel>
    </Div>
    )
}

export default Site;