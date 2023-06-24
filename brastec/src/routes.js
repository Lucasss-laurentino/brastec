import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Pagina_inicial } from "./pages/Pagina_inicial";
import { MenuContextComponent, MenuContextProvider } from "./Contexts/MenuContext";

export default function routesApp () {

    return (
        <MenuContextProvider>
            <Router>
                <Routes>
                        <Route path="/" element={<Pagina_inicial />} />
                </Routes>
            </Router>
        </MenuContextProvider>

    );

}