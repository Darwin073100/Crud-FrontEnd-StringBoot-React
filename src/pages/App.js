import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { NavBar } from '../components/nav/NavBar';
import { Layout } from './Layout';
import { Information } from '../pages/Layout/Information';
import { Becas } from '../pages/Layout/Becas';
import { Extra } from '../pages/Layout/Extra';

function App(){
    return(
        <div className='comp-app'>
            <NavBar />
            <BrowserRouter>
                <Routes>
                    <Route path='/' element={ <Layout />}/>
                    <Route path='/information' element={ <Information />} />
                    <Route path='/becas' element={ <Becas />} />
                    <Route path='/extra' element={ <Extra />} />
                </Routes>
            </BrowserRouter>
        </div>
    );
}

export { App };