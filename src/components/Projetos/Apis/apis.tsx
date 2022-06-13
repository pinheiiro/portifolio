import { NextComponentType } from 'next';
import { Carousel } from '../Slider/slider';

import { Div } from './style';

const Apis : NextComponentType = () => {

    const apis = [
        {
            titulo: 'Banco',
            desc: 'Uma API que simula algumas transações bancárias'
        },
        {
            titulo: 'Plataforma de Curso',
            desc: 'Uma API completa para consumir dados de alunos e professores'
        }
    ]

    return (
    <Div>
        <Carousel>
            {apis.map((api) => {
                return (
                    <div className="card" key={api.titulo}>
                        <h2>{api.titulo}</h2>
                        <p>{api.desc}</p>
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

export default Apis;