import './App.css';
import cronometroImg from './assets/cronometro.png';

function Btn(props) {
  return (
    <>
      <a></a>
    </>
  );
}

function App() {
  return (
    <div>
        <img className='img' src={ cronometroImg } />
        <a className='timer' >0.0</a>
        <div>
          <Btn />
          <Btn />
        </div>
    </div>
  );
}

export default App;
