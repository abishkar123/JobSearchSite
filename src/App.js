import './App.css';
import { BrowserRouter as Browser,Route, Router,Routes } from 'react-router-dom';
import { MainPage } from './pages/mainpage/MainPage';



function App() {
  return (
    <>
    <Browser>
    <Routes>
    <Route path="/" element={<MainPage/>}/>

    </Routes>
    </Browser>


    </>
   
  );
}

export default App;
