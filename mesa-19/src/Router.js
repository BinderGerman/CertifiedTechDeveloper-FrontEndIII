import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Info from './components/Info';
import VerTodos from './components/VerTodos'
import Buscar from './components/Buscar';
import NotFound from './components/NotFound';

const Router = () => {

    return (
        <>
            <BrowserRouter>
                <Routes>
                    <Route path='/' element={<Info/>}></Route>
                    <Route index path='/vertodos' element={<VerTodos/>}></Route>
                    <Route path='/buscar' element={<Buscar/>}></Route>
                    <Route path='*' element={<NotFound />}></Route>
                </Routes>
            </BrowserRouter>
        </>
    );
}

export default Router;