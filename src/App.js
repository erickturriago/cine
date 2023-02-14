import './App.css'
import Login from './components/pages/login/Login';

import {BrowserRouter,Routes,Route} from 'react-router-dom';
import Home from './components/pages/home/Home';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Login/>}/>
        <Route path='/home' element={<Home/>}/>
      </Routes>
      
    </BrowserRouter>
    
  );
}

export default App;
