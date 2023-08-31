import logo from './logo.svg';
import './App.css';

import MainPage from './component/MainPage';
import Home from './component/Home';
import Login from './component/Login';
import { Routes, Route } from 'react-router';




// or less ideally
// import { Button } from 'react-bootstrap';


function App() {


  return (

    <div className="App">

      <Routes>
        <Route path="/" element={<MainPage />}></Route>
        <Route path="/Home" element={<Home />}></Route>
        <Route path="/Login" element={<Login />}></Route>
      </Routes>


    </div>




  );
}

export default App;
