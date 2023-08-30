import { Routes, Route } from 'react-router-dom';
import './App.css';



// sayfalarımız
import Home from './Pages/Home';


function App() {
  return (
  
    <>


      <Routes>


        <Route path='/' element={<Home></Home>}></Route>

      </Routes>

    </>
  );
}

export default App;
