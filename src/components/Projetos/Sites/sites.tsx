import { NextComponentType } from 'next';

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
    <>
        {sites.map((site) => {
            return (
                <div key={site.titulo}>
                    <h2>{site.titulo}</h2>
                    <p>{site.desc}</p>
                </div>
            )
        })}
    </>
    )
}

export default Site;