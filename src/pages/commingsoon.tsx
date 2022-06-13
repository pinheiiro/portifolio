import { NextPage } from 'next';
import Head from 'next/head';
import Voltar from '../components/voltar';

const Commingsoon: NextPage = () => {
    return (
        <div className="commingsoon">
            <Head>
                <title>Comming Soon</title>
            </Head>
            <Voltar/>
            <h1>
                Soon the portfolio will be available in english...
            </h1>
        </div>
    )
}

export default Commingsoon;