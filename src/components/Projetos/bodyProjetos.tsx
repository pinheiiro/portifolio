import { NextComponentType } from 'next';
import { useState } from 'react';

import Sites from './Sites/sites';
import Apis from './Apis/apis';
import Prototipos from './Prototipos/prototipos';

const BodyProjetos: NextComponentType = () => {

    const [sites, setSites] = useState(false);
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
        <h1>Projetos</h1>
        <div>
            <nav>
                <ul>
                    <li> <button onClick={onSites}> Sites </button> </li>
                    <li> <button onClick={onApis}> API's </button> </li>
                    <li> <button onClick={onPrototipos}> Protótipos </button></li>
                </ul>
            </nav>
        </div>
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