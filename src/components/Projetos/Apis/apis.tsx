import { NextComponentType } from 'next';

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
    <>
        {apis.map((api) => {
            return (
                <div key={api.titulo}>
                    <h2>{api.titulo}</h2>
                    <p>{api.desc}</p>
                </div>
            )
        })}
    </>
    )
}

export default Apis;