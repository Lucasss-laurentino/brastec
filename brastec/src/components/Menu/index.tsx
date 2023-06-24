import { useContext, useState } from 'react';
import './Menu.css';
import { MenuContext } from '../../Contexts/MenuContext';

export const Menu = () => {

    const { classeDeAnimacaoMenu } = useContext(MenuContext);
    
    return (
        <>
        
            <div className="div-menu-user">
                <ul className='lista-menu-user'>
                    <li  className={classeDeAnimacaoMenu+' item1'}>teste1</li>
                    <li  className={classeDeAnimacaoMenu+' item2'}>teste2</li>
                    <li  className={classeDeAnimacaoMenu+' item3'}>teste3</li>
                    <li  className={classeDeAnimacaoMenu+' item4'}>teste4</li>
                    <li  className={classeDeAnimacaoMenu+' item5'}>teste5</li>

                </ul>
            </div>
        
        </>
    )

}