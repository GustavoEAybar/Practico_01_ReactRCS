import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './components/layout/Header/Header';
import HelloWorld from './components/HelloWorld/HelloWorld';
import Footer from './components/layout/Footer/Footer';
import ListOfTasks from './components/ListOfTasks/ListOfTasks';
import ColorPalete from './components/ColorPalete/ColorPalete';

function App() {
  return (
    <div>
      <Header/>
      <HelloWorld nuevoSaludo='amigo mio'/>
      <ListOfTasks></ListOfTasks>
      <ColorPalete></ColorPalete>
      <Footer/>
    </div>
  )
}

export default App;
