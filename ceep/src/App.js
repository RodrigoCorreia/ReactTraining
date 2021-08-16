import logo from './logo.svg';
import './App.css';
import { ListaDeNotas } from './components/ListaDeNotas';

function App() {
  return (
    <section>
  <form>
    <input type="text" placeholder="Título"/>
      <textarea placeholder="Escreva sua nota.."/>
      <button>Criar Nota</button>
  </form>
  <ListaDeNotas/>
  </section>
  );
}

export default App;
