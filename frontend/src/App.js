import './App.css';
import { Routes, Route } from "react-router-dom";
import User from "./components/User";
import Signin from "./pages/signin/Signin"
import MainPage from "./pages/mainPage/MainPage";
import HomePage from "./pages/homePage/HomePage";


function App() {
  return (
    <Routes>
      <Route path='/' element={<MainPage/>}/>
      <Route path='/signup' element={<User/>}/>
      <Route path='/signin' element={<Signin/>}/>
      <Route path='/home' element={<HomePage/>}/>
    </Routes>
  );
}

export default App;
