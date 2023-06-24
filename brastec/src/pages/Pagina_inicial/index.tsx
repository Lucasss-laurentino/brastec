import { Banner } from "../../components/Banner";
import { Navbar } from "../../components/Navbar";

export const Pagina_inicial = () => {

    return(
        <>
            <Navbar /> { /* Menu de usuario está sendo renderizado aqui dentro */}

            <Banner /> {/* Menu categorias está sendo renderizado aqui dentro */}      
        </>
    );

}