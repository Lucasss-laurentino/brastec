import { createContext, useState } from "react";

type PaginacaoType = {
    limiteDeProdutos: number,
    totalDeProdutos: number,
    offSet: number,
    proximaPagina: (page: number) => void,
    voltarPagina: () => void,
}

export const PaginacaoContext = createContext<PaginacaoType>(null!);

export const PaginacaoProvider = ({children}: {children: JSX.Element}) => {
    
    const [limiteDeProdutos, setLimiteDeProdutos] = useState(10); // valores dinamicos virão da api
    const [totalDeProdutos, setTotalDeProdutos] = useState(300);
    const [offSet, setOffSet] = useState(0);
    
    const proximaPagina = (page: number) => {

        setOffSet((page - 1) * limiteDeProdutos);

        /* fazer consulta sql pra pegar produtos apartir de offSet */

    }

    const voltarPagina = () => {

    }

    return (
        <PaginacaoContext.Provider value={{ limiteDeProdutos, totalDeProdutos, offSet, proximaPagina, voltarPagina }}>
            {children}
        </PaginacaoContext.Provider>
    );


}