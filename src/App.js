
import { Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './pages/Home';
import DashBoard from './pages/DashBoard';
import CoinPage from './pages/CoinPage';
import ComparePage from './pages/ComparePage';

function App() {
  return (
    <div className="App">
     
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path="/dashboard" element={<DashBoard/>}/>
        <Route path='/coin/:id' element={<CoinPage/>}/>
        <Route path='/compare' element={<ComparePage/>}/>

      </Routes>
    </div>
  );
}

export default App;
