import { useEffect } from 'react';
import { ListaMarcas } from '../ListaMarcas';
import './Vitrine.css';

export const Vitrine = () => {
    
    return (
    
        <>
            <div className="container-fluid vitrine-personalizada">
                <ListaMarcas/>
            </div>
        </>
    
    );

}