import { useContext, useEffect } from 'react';
import { Menu } from '../Menu';
import './Navbar.css';
import { MenuContext } from '../../Contexts/MenuContext';

export const Navbar = () => {

    const { aberto, menuAnimacao, setClasseDeAnimacaoMenu } = useContext(MenuContext);


    useEffect(() => {

        if(aberto){

            setClasseDeAnimacaoMenu('item-lista-menu-user')

        } else {

            setClasseDeAnimacaoMenu('item-lista-menu-user-escondida')

        }

    }, [aberto])

    const abrirMenu = () => {
        menuAnimacao();
    }

    return (

        <>
        <div className="position-relative navbar-largura">
            <div className="container-fluid px-0 navbar-personalizado d-flex justify-content-between">
                <div className="container d-flex px-3 justify-content-start align-self-center p-0">
                    <button type="button" className="btn-search-personalizado">
                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="#ffff" className="bi bi-search" viewBox="0 0 16 16">
                            <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z" />
                        </svg>
                    </button>
                    <input type="text" className='input-personalizado' placeholder="Oque você procura ?" />
                </div>
                <div className="container d-flex justify-content-end col-3">
                    <button type="button" className="btn-menu-personalizado" onClick={abrirMenu}>
                        <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="#ffff" className="bi bi-menu-down" viewBox="0 0 16 16">
                            <path d="M7.646.146a.5.5 0 0 1 .708 0L10.207 2H14a2 2 0 0 1 2 2v9a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h3.793L7.646.146zM1 7v3h14V7H1zm14-1V4a1 1 0 0 0-1-1h-3.793a1 1 0 0 1-.707-.293L8 1.207l-1.5 1.5A1 1 0 0 1 5.793 3H2a1 1 0 0 0-1 1v2h14zm0 5H1v2a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1v-2zM2 4.5a.5.5 0 0 1 .5-.5h8a.5.5 0 0 1 0 1h-8a.5.5 0 0 1-.5-.5zm0 4a.5.5 0 0 1 .5-.5h11a.5.5 0 0 1 0 1h-11a.5.5 0 0 1-.5-.5zm0 4a.5.5 0 0 1 .5-.5h6a.5.5 0 0 1 0 1h-6a.5.5 0 0 1-.5-.5z"/>
                        </svg>
                    </button>
                </div>
            </div>

            <Menu />
        </div>

        </>

    )

}