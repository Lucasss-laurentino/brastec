import { createContext, useState } from "react";

type CategoriaEmExibicaoType = {
    id: number,
    selecionarId: (id: number) => void,
}

export const CategoriaEmExibicaoContext = createContext<CategoriaEmExibicaoType>(null!);

export const CategoriaEmExibicaoProvider = ({children}: {children: JSX.Element}) => {

    const [id, setId] = useState(0);

    const selecionarId = (id: number) => {
        setId(id);
    } 

    return (
        <CategoriaEmExibicaoContext.Provider value={{id, selecionarId}}>
            {children}
        </CategoriaEmExibicaoContext.Provider>
    );

}