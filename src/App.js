import {BrowserRouter,Routes,Route} from 'react-router-dom'
import './App.css';
import { Home } from './pages/Home';
import Header from './components/Layout/Header/Header';
import Courses from './components/Courses/Courses';
import Footer from './components/Layout/Footer/Footer';

function App() {
  return (
    <BrowserRouter>
     <Header/>
      <Routes>
        <Route path='/'element={<Home/>}/>
        <Route path='/courses' element={<Courses/>}/>
      </Routes>
      <Footer/>
    </BrowserRouter>
   
  );
}

export default App;
