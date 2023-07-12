import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Pagina_inicial } from "./pages/Pagina_inicial";
import { MenuContextComponent, MenuContextProvider } from "./Contexts/MenuContext";
import { CategoriaEmExibicaoProvider } from "./Contexts/CategoriaEmExibicao";
import { PaginacaoProvider } from "./Contexts/Paginacao";

export default function routesApp () {

    return (
        <MenuContextProvider>
            <CategoriaEmExibicaoProvider>
                <PaginacaoProvider>
                    <Router>
                        <Routes>
                                <Route path="/" element={<Pagina_inicial />} />
                        </Routes>
                    </Router>                                
                </PaginacaoProvider>
            </CategoriaEmExibicaoProvider>
        </MenuContextProvider>

    );

}