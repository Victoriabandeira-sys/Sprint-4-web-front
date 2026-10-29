import Home from "./pages/Home";
import Solucao from "./pages/Solucao";
import Publico from "./pages/Publico";
import Galeria from "./pages/Galeria";
import Estudos from "./pages/Estudos";
import Login from "./pages/Login";
import Equipe from "./pages/Equipe";
import Footer from "./components/Footer";

function App() {
    return (
        <div  className="flex flex-col min-h-screen bg-black text-white">
            <>
            <Home />
            <Solucao />
            <Publico />
            <Galeria />
            <Estudos />
            <Login />
            <Equipe />
            <Footer />
            </>
        </div>
        
    );
}

export default App;