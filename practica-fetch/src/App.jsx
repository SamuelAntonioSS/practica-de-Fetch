import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from './pages/Home';
import DragonBall from './pages/DragonBall';
import Nav from './components/Nav';

function App() {
  return (
    <Router>
      <Nav />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/dragonball" element={<DragonBall />} />
      </Routes>
    </Router>
  );
}

export default App;
