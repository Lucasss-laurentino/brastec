import { ListaMarcas } from '../ListaMarcas';
import './Vitrine.css';
import { Card } from '../Card';
import { useContext, useEffect } from 'react';
import { CategoriaEmExibicaoContext } from '../../Contexts/CategoriaEmExibicao';

export const Vitrine = () => {
    

    const { id } = useContext(CategoriaEmExibicaoContext);

    useEffect(() => {
        
        if(id != 0) {
            const obj = document.getElementById('div-lista-categorias')?.scrollIntoView({behavior: "smooth"});
        } else {
            const obj = document.getElementById('navbar')?.scrollIntoView({behavior: "smooth"});
        }    

    }, [id])
    
    return (
    
        <>
            
            <div id="div-escondida" className='container-fluid vitrine-personalizada'>
                
                <ListaMarcas/>

                <Card/>

            </div>

        </>
    
    );

}