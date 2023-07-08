import { useContext, useEffect } from "react";
import { Banner } from "../../components/Banner";
import { Navbar } from "../../components/Navbar";
import { Vitrine } from "../../components/Vitrine";
import { CategoriaEmExibicaoContext } from "../../Contexts/CategoriaEmExibicao";
import React from "react";
import './Pagina_inicial.css';

export const Pagina_inicial = () => {

    const { id } = useContext(CategoriaEmExibicaoContext);

    return(
        <React.Fragment>

            <div className={ id == 0 ? "overflow-personalizado" : ""}>
                
                 <Navbar /> { /* Menu de usuario está sendo renderizado aqui dentro */}

                <Banner /> {/* Menu categorias está sendo renderizado aqui dentro */}

                {id != 0 && <Vitrine /> }{/* Lista de marcas está sendo renderizado aqui dentro */}

                
            
            </div>

        </React.Fragment>
    );

}