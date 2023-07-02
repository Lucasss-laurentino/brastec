import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Pagina_inicial } from "./pages/Pagina_inicial";
import { MenuContextComponent, MenuContextProvider } from "./Contexts/MenuContext";
import { CategoriaEmExibicaoProvider } from "./Contexts/CategoriaEmExibicao";

export default function routesApp () {

    return (
        <MenuContextProvider>
            <CategoriaEmExibicaoProvider>
            <Router>
                <Routes>
                        <Route path="/" element={<Pagina_inicial />} />
                </Routes>
            </Router>
            </CategoriaEmExibicaoProvider>
        </MenuContextProvider>

    );

}