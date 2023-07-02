import { createContext, useState } from "react";

type MarcaType = {
    idMarca: number,
    nomeMarca: string,
    produtosMarca: string, // produtosMarca type []
}

export const MarcaContext = createContext<MarcaType>(null!);

export const MarcaProvider = ({children}: {children: JSX.Element}) => {

    const [idMarca, setIdMarca] = useState(0);
    const [nomeMarca, setNomeMarca] = useState('');
    const [produtosMarca, setProdutosMarca] = useState('');

    return (
        <MarcaContext.Provider value={{idMarca, nomeMarca, produtosMarca}}>
        {children}
        </MarcaContext.Provider>
    );
}