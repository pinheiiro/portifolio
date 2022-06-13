import type { NextComponentType } from 'next';

import { H1, Div } from './style';
import { SiMongodb, SiHtml5, SiCss3, SiJavascript, SiTypescript, SiReact, SiNextdotjs, SiNodedotjs, SiPostgresql, SiMysql } from 'react-icons/si';

const bodySobre: NextComponentType = () => {
    return (
    <>
        <H1>Quem sou eu ?</H1>
        <Div>
            <div className="imagem">
                <div className="card">
                    <img className="img" src="Gabriel2.jpg" alt="Gabriel" />
                    <div>
                        <h3>
                            Gabriel Pinheiro
                            <br />
                            <strong> 23 Anos </strong>
                        </h3>
                        <div className="icons">
                            <SiHtml5 color='#E34F26'/>
                            <SiCss3 color='#1572B6'/>
                            <SiJavascript color='#F7DF1E'/>
                            <SiTypescript color='#3178C6'/>
                            <SiReact color='#61DAFB'/>
                            <SiNextdotjs color='#ffffff'/>
                            <SiNodedotjs color='#339933'/>
                            <SiMongodb color='#47A248'/>
                            <SiMysql color='#4479A1'/>
                            <SiPostgresql color='#4169E1'/>
                        </div>
                    </div>
                </div>
            </div>
            <div className="desc">
                <p>
                    Graduando em Sistema de Informação na Universidade do Estado da Bahia, 
                    sou um grande apaixonado por tecnologia.
                </p>
                <br />
                <p>
                    Estudo e aplico programação desde 2018, criando sites estáticos com HTML e CSS, 
                    posteriormente me aprofundando nos conhecimentos de Front-End através do Javascript 
                    tendo uma base para logo após partir para bibliotecas e frameworks como: React JS, Next JS e etc ... 
                    Criando pequenos projetos interativos visando a melhor experiência do usuário e objetivando projetos 
                    aplicáveis no mundo real.
                </p>
                <br />
                <p>
                    Após ter consolidado conhecimentos no Front-End, comecei a me aprofundar no Back-End com Node JS 
                    criando aplicações integrando base de dados relacionais e não relacionais, utilizando conceitos de 
                    arquitetura limpa, desenvolvendo APIs cada vez mais robustas visando segurança, boas práticas, validações, 
                    código limpo e manutenível.
                </p>
                <br />
                <p>
                    Atualmente venho realizando projetos próprios tanto no Front quanto no Back, sempre buscando trazer 
                    soluções viáveis para o mundo real tentando me desafiar a aprender algo mais para estar sempre me 
                    aperfeiçoando, futuramente penso em mergulhar no mundo mobile para adquirir mais habilidades e trazer 
                    novas soluções.
                </p>
            </div>
        </Div>
    </>
    );
}

export default bodySobre;