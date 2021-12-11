import { NextComponentType } from 'next';

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
    <>
        {prototipos.map((prototipo) => {
            return (
                <div key={prototipo.titulo}>
                    <h2>{prototipo.titulo}</h2>
                    <p>{prototipo.desc}</p>
                </div>
            )
        })}
    </>
    )
}

export default Prototipos;