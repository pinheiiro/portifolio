import { NextComponentType } from 'next';
import { Carousel } from '../Slider/slider';

import { Div } from './style';

const Prototipos : NextComponentType = () => {

    const prototipos = [
        {
            titulo: 'Portifólio',
            desc: 'Protipagem de um portifolio'
        },
        {
            titulo: 'Concessionária',
            desc: 'Prototipagem de uma concessionária'
        },
    ]

    return (
    <Div>
        <Carousel>
            {prototipos.map((prototipo) => {
                return (
                    <div className="card" key={prototipo.titulo}>
                        <h2>{prototipo.titulo}</h2>
                        <p>{prototipo.desc}</p>
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

export default Prototipos;