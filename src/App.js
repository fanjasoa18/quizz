import './App.css';
import './components/Quizz.css'
import WelcomePage from './components/WelcomePage';
import Quizz from './components/Quizz';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<WelcomePage/>} />
        <Route path="/home" element={<Quizz/>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
