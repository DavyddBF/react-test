import './App.css';
import cronometroImg from './assets/cronometro.png';

function Btn(props) {
  return (
    <>
      <a>{ props.title }</a>
    </>
  );
}

function App() {
  return (
    <div>
        <img className='img' src={ cronometroImg } />
        <a className='timer' >0.0</a>
        <div>
          <Btn title='Vai' />
          <Btn title='Limpar' />
        </div>
    </div>
  );
}

export default App;
