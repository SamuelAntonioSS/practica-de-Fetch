import { BrowserRouter as Router, Routes, Route } from "react-router";
import Home from './pages/Home';
import Nav from './components/Nav';
import DragonBall from './pages/DragonBall';
import About from "./pages/About";
import RickandMorty from "./pages/RickandMorty";

function App() {
  return (
    <>
    <Router>
      <Nav />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/dragonball" element={<DragonBall />} />
        <Route path="/rickandmorty" element={<RickandMorty />} />

      </Routes>

    </Router>
    </>
  )
}

export default App;
