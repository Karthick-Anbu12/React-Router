import './App.css'
import "bootstrap/dist/css/bootstrap.min.css";
import Nav from './Nav';
import Fsd from './Fsd';
import Data from './Data';
import Cyber from './Cyber';
import Career from './Career';
import All from './All';
import { BrowserRouter, Routes, Route } from "react-router-dom";
function App() {

  return (
    <>
    <BrowserRouter>
    <Nav></Nav>
    <div className='container'>
    <Routes>
    <Route index path="/" element={<All/>}/>
    <Route path="/fsd" element={<Fsd/>}/>
    <Route path="/data" element={<Data/>}/>
    <Route path="/cyber" element={<Cyber/>}/>
    <Route path="/career" element={<Career/>}/>
    </Routes>
    </div>
      </BrowserRouter>
   </>
  )
}

export default App
