import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './components/layout/Header/Header';
import HelloWorld from './components/HelloWorld/HelloWorld';
import Footer from './components/layout/Footer/Footer';
import ListOfTasks from './components/ListOfTasks/ListOfTasks';
import ColorPalete from './components/ColorPalette/ColorPalette';
import ListOfEmployees from './components/ListOfEmployees/ListOfEmployees';

function App() {
  return (
    <div>
      <Header/>
      <HelloWorld nuevoSaludo='amigo mio'/>
      <ListOfTasks></ListOfTasks>
      <ColorPalete></ColorPalete>
      <ListOfEmployees></ListOfEmployees>
      <Footer/>
    </div>
  )
}

export default App;
