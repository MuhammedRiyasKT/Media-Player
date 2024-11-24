import logo from './logo.svg';
import './App.css';
import History from './pages/History';
import Home from './pages/Home';
import Landing from './pages/Landing';
import { Routes,Route } from 'react-router-dom';
import Header from './Components/Header';
import Footers from './Components/Footers';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


function App() {
  return (
   <>
   <ToastContainer
        position="top-right"
        autoClose={3000}
        theme="light"
      />
   <Header />
   
   <Routes>
    
     <Route element={<Landing/>} path='/'/>
     <Route element={<Home/>} path='/Home'/>
     <Route element={<History/>} path='/History'/>

   </Routes>

   <Footers /> 
   </>
  );
}

export default App;
