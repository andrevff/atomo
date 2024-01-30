import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/home/main";

export default function AppRoutes() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Home />} />
            </Routes>
        </BrowserRouter>
    )
}