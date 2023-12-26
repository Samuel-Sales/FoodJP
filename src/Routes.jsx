import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home/Home";
import Cardapio from "./pages/Cardapio/Cardapio";
import Sobre from "./pages/Sobre/Sobre";
import NotFound from "./pages/NotFound/NotFound";

export default function AppRoutes() {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="Cardapio" element={<Cardapio />} />
                <Route path="Sobre" element={<Sobre />} />
                <Route path="*" element={<NotFound />} />
            </Routes>
        </Router>
    );
};