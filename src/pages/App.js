import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { NavBar } from '../components/nav/NavBar';
import { Layout } from './Layout';
import { Persona } from '../pages/Layout/Persona';
import { Inscripcion } from '../pages/Layout/Inscripcion';
import { Carrera } from '../pages/Layout/Carrera';

function App(){
    return(
        <div className='comp-app'>
            <NavBar />
            <BrowserRouter>
                <Routes>
                    <Route path='/' element={ <Layout />}/>
                    <Route path='/persona' element={ <Persona />} />
                    <Route path='/inscripcion' element={ <Inscripcion />} />
                    <Route path='/carrera' element={ <Carrera />} />
                </Routes>
            </BrowserRouter>
        </div>
    );
}

export { App };