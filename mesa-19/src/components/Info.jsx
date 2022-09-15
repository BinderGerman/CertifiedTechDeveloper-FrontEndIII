import { Link, Outlet } from 'react-router-dom';

const Info = () => {
    return (
        <>
            <nav style={{ display: 'Flex', justifyContent: 'space-around'}}>
                <Link to='/Buscar'>Buscar</Link>
                <Link to='/vertodos'>Ver Todos</Link>
            </nav>
            <h1 style={{ textAlign: 'center' }}>Info</h1>
            <Outlet />
        </>
    );
}

export default Info;
