import './App.css';
import Info from './components/Info';
import Buscar from './components/Buscar';
import VerTodos from './components/VerTodos';
import NotFound from './components/NotFound';
import { BrowserRouter, Route, Routes } from 'react-router-dom';


function App() {
 
 
  return (
    <>
      <BrowserRouter>
          <Routes>
            <Route path='/' element={<Info />}></Route>
            <Route path='/buscar' element={<Buscar />}></Route>
            <Route path='/vertodos' element={<VerTodos />}></Route>
            <Route path='*'><NotFound /></Route>
          </Routes>
      </BrowserRouter>  
    </>
      
  );
}

export default App;
