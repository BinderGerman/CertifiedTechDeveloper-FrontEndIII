function Rejuvenecedor() {
    return(
        <form>
            <label>Nombre</label>
            <p>Ingrese su nombre: <input type='text' name='nombre' /></p>
            <label>Edad</label>
            <p>Ingrese su edad: <input type='number' name='edad' /></p>
            <input type='submit' value='validar datos' />
        </form>
    );
}

export default Rejuvenecedor;