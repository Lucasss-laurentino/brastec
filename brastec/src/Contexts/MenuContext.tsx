import { createContext, useState } from "react";

type MenuContextType = {
    aberto: boolean,
    menuAnimacao: () => void,
    classeDeAnimacaoMenu: string, // essa classe e compartilhada com o navbar, ela é mudada de acordo com o click no botao "hamburguer" do menu
    setClasseDeAnimacaoMenu:  React.Dispatch<React.SetStateAction<string>>,
}

export const MenuContext = createContext<MenuContextType>(null!);

export const MenuContextProvider = ({children}: {children: JSX.Element}) => {
    
    const [aberto, setAberto] = useState<boolean>(false);
    const [classeDeAnimacaoMenu, setClasseDeAnimacaoMenu] = useState<string>('');

    const menuAnimacao = () => {
        setAberto(!aberto)
    }

    return (

        <MenuContext.Provider value={{aberto, menuAnimacao, classeDeAnimacaoMenu, setClasseDeAnimacaoMenu}}>
            {children}
        </MenuContext.Provider>

    );

}