import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './components/layout/Header/Header';
import HelloWorld from './components/HelloWorld/HelloWorld';
import Footer from './components/layout/Footer/Footer';
import ListOfTasks from './components/ListOfTasks/ListOfTasks';
import ColorPalete from './components/ColorPalette/ColorPalette';
import ListOfEmployees from './components/ListOfEmployees/ListOfEmployees';
import SimpleForm from './components/SimpleForm/SimpleForm';
import VeterinaryPatients from './components/VeterinaryPatients/VeterinaryPatients';
import WeatherWeb from './components/WeatherWeb/WeatherWeb';
import RecipeBlog from './components/RecipeBlog/RecipeBlog';
import NewsWebsite from './components/NewsWebsite/NewsWebsite';
import MovieRegistration from './components/MovieRegistration/MovieRegistration';

function App() {
  return (
    <div>
      <Header/>
      <HelloWorld nuevoSaludo='amigo mio'/>
      <ListOfTasks />
      <ColorPalete />
      <ListOfEmployees />
      <SimpleForm />
      <VeterinaryPatients />
      <MovieRegistration />
      <NewsWebsite />
      <WeatherWeb />
      <RecipeBlog />
      <Footer/>
    </div>
  )
}

export default App;
