import type { NextComponentType } from 'next';
import Image from 'next/image';

import pessoa from '../../assets/pessoa.png';

import { H1, Div } from './style'

const bodySobre: NextComponentType = () => {
    return (
    <>
        <H1>Quem sou eu ?</H1>
        <Div>
            <div className="imagem">
                <Image
                    src={pessoa}
                    alt="Foto de Gabriel"
                    width={200}
                    height={400}
                />
            </div>
            <div className="desc">
            <p>
                It is a long established fact that a 
                reader will be distracted by the readable 
                content of a page when looking at its layout. 
                The point of using Lorem Ipsum is that it has a 
                more-or-less normal distribution of letters, as 
                opposed to using 'Content here, content here', 
                making it look like readable English. Many desktop 
                publishing packages and web page editors now use Lorem 
                Ipsum as their default model text, and a search for 'lorem 
                ipsum' will uncover many web sites still in their infancy. 
                Various versions have evolved over the years, sometimes by 
                accident, sometimes on purpose Contrary to popular belief, 
                Lorem Ipsum is not simply random text. It has roots in a 
                piece of classical Latin literature from 45 BC, making it 
                over 2000 years old. Richard McClintock, a Latin professor at 
                Hampden-Sydney College in Virginia, looked up one of the more 
                obscure Latin words, consectetur, from a Lorem Ipsum passage, 
                and going through the cites of the word in classical literature,
                discovered the undoubtable source.
            </p>
            </div>
        </Div>
    </>
    );
}

export default bodySobre;