// import Layout from "./components/Layout/Layout";
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import About from './pages/About'
import Horario from "./pages/Horario";
import Indice from "./pages/Indice";
import Sala1 from "./pages/Sala1";
import Sala2 from "./pages/Sala2";
import Sala3 from "./pages/Sala3";
import Sala4 from "./pages/Sala4";
import Sala5 from "./pages/Sala5";
import Sala6 from "./pages/Sala6";
import Sala7 from "./pages/Sala7";
import Sala8 from "./pages/Sala8";
import Sala9 from "./pages/Sala9";
import Sala10 from "./pages/Sala10";
import Pagenotfound from './pages/Pagenotfound'


function App() {
  return (
    <div>
      <BrowserRouter>
      <Routes>
        <Route path="/museum-website" element={<About />} />
        <Route path="/horario" element={<Horario />} />
        <Route path="/indice" element={<Indice />} />
        <Route path="/primeroshabitantes" element={<Sala1 />} />
        <Route path="/mineria" element={<Sala2 />} />
        <Route path="/movimientoobrero1906" element={<Sala3 />} />
        <Route path="/mineros" element={<Sala4 />} />
        <Route path="/porfiriatosonora" element={<Sala5 />} />
        <Route path="/porfiriatotecnologíacananea" element={<Sala6 />} />
        <Route path="/patiocárcelcananea" element={<Sala7 />} />
        <Route path="/carcelcananea" element={<Sala8 />} />
        <Route path="/hospitaldelronquillo" element={<Sala9 />} />
        <Route path="/teatroestudio(XEFQ)" element={<Sala10 />} />
        <Route path="*" element={<Pagenotfound/>} />
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
