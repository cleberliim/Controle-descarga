import { BrowserRouter, Routes, Route } from "react-router-dom";

//pages
import Nav from "./components/Nav.js";
import Dashboard from "./pages/Dashboard";
import Clientes from "./pages/Clientes";
import Creater from "./pages/Clientes/Creater";
import EditForm from "./pages/Clientes/Edit/index.js";

// css
import "./index.css";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Nav />
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/clientes" element={<Clientes />} />
          <Route path="/creater" element={<Creater />} />
          <Route path="/editar" element={<EditForm />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
