import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/home/main";
import Atendimento from "./pages/atendimento/main";
import Clientes from "./pages/clientes/main";

export default function AppRoutes() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/atendimento" element={<Atendimento />} />
                <Route path="/clientes" element={<Clientes />}/>
            </Routes>
        </BrowserRouter>
    )
}