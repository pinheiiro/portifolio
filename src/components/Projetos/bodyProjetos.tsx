import { NextComponentType } from 'next';
import { useState } from 'react';

import { H1, Ul, Button } from './style';

import Sites from './Sites/sites';
import Apis from './Apis/apis';
import Prototipos from './Prototipos/prototipos';

const BodyProjetos: NextComponentType = () => {

    const [sites, setSites] = useState(true);
    const [api, setApi] = useState(false);
    const [prototipo, setPrototipo] = useState(false);

    function onSites() {
        setApi(false);
        setPrototipo(false);
        setSites(true);
    }

    function onApis() {
        setSites(false);
        setPrototipo(false);
        setApi(true);
    }

    function onPrototipos() {
        setSites(false);
        setApi(false);
        setPrototipo(true);
    }

    return (
    <>
        <H1>Projetos</H1>
        <nav>
            <Ul>
                <li> <Button onClick={onSites} color={sites ? "#56CCF2" : "#fff"}> Sites </Button> </li>
                <li> <Button onClick={onApis} color={api ? "#56CCF2" : "#fff"}> API's </Button> </li>
                <li> <Button onClick={onPrototipos} color={prototipo ? "#56CCF2" : "#fff"}> Protótipos </Button></li>
            </Ul>
        </nav>
        <div>
            { (sites && (
                <Sites/>
            )) || (api && (
                <Apis/>
            )) || (prototipo && (
                <Prototipos/>
            )) }
        </div>
    </>
    )
}

export default BodyProjetos;