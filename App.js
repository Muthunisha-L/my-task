import 'bootstrap/dist/css/bootstrap.min.css';
import {BrowserRouter,Routes,Route} from 'react-router-dom';
import Login from './components/Login';
import Home from './components/Home';
import Register from './components/Register';

function App(){
  return(
    <>
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Login/>} />
      <Route path="/home" element={<Home/>} />
      <Route path="/register" element={<Register/>} />
    </Routes>
    </BrowserRouter>
    </>
  )
}
export default App;