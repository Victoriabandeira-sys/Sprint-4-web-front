import { Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import Solucao from "./pages/Solucao";
import Publico from "./pages/Publico";
import Galeria from "./pages/Galeria";
import Login from "./pages/Login";
import Estudos from "./pages/Estudos";
import Equipe from "./pages/Equipe";
import Footer from "./components/Footer";

function App() {
    return (
    <Routes>
        <Route
        path="/"
        element={
        <div  className="flex flex-col min-h-screen bg-black text-white">
            <>
            <Home />
            <Solucao />
            <Publico />
            <Galeria />
            <Login />
            <Equipe />
            <Footer />
            </>
        </div>
        }
    />
    <Route path="/estudos" element={<Estudos />} />
    </Routes>
        
    );
}

export default App;