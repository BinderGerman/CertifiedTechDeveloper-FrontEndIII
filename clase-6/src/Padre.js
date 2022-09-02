import './Style.css';

function Padre(props) {
  return (
    <div className='Padre'>
      {props.children}
    </div>
  );
}


export default Padre;
