import type { NextComponentType } from 'next';

import { H1, Div } from './style';
import { SiMongodb, SiHtml5, SiCss3, SiJavascript, SiTypescript, SiReact, SiNextdotjs, SiSpring, SiMicrosoftsqlserver, SiPostgresql } from 'react-icons/si';

const bodySobre: NextComponentType = () => {

    function calcularIdade(dia: number, mes: number, ano: number): number {
        let hoje = new Date();
        let dataNascimento = new Date(ano, mes - 1, dia);
        let idade = hoje.getFullYear() - dataNascimento.getFullYear();
        let m = hoje.getMonth() - dataNascimento.getMonth();
    
        if (m < 0 || (m === 0 && hoje.getDate() < dataNascimento.getDate())) {
            idade--;
        }
    
        return idade;
    }    
     

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
                            <strong>{calcularIdade(16, 11, 1998)} Anos</strong>
                        </h3>
                        <div className="icons">
                            <SiHtml5 color='#E34F26'/>
                            <SiCss3 color='#1572B6'/>
                            <SiJavascript color='#F7DF1E'/>
                            <SiTypescript color='#3178C6'/>
                            <SiReact color='#61DAFB'/>
                            <SiNextdotjs color='#ffffff'/>
                            <SiSpring color='#6DB33F'/>
                            <SiMongodb color='#47A248'/>
                            <SiMicrosoftsqlserver color='#CC2927'/>
                            <SiPostgresql color='#4169E1'/>
                        </div>
                    </div>
                </div>
            </div>
            <div className="desc">
                <p>
                    Graduado em Sistema de Informação na Universidade do Estado da Bahia, 
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
                    Após ter consolidado conhecimentos no Front-End, comecei a me aprofundar no Back-End com Java
                    criando desde APIs bem simples a integrações com base de dados relacionais e não relacionais através do ecossistema Spring, utilizando conceitos de 
                    arquitetura limpa, desenvolvendo APIs cada vez mais robustas visando segurança, boas práticas, validações, código limpo e manutenível.
                </p>
                <br />
                <p>
                    Atualmente venho realizando projetos próprios e melhorando os conhecimentos na parte de microsserviços.
                </p>
            </div>
        </Div>
    </>
    );
}

export default bodySobre;