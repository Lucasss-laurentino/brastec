import { useContext, useEffect, useState } from 'react';
import './ListaMarcas.css';
import { CategoriaEmExibicaoContext } from '../../Contexts/CategoriaEmExibicao';

export const ListaMarcas = () => {

    const { id } = useContext(CategoriaEmExibicaoContext);

    const [classeMarcas, setClasseMarcas] = useState('ul-lista-marcas-oculta')
    
    useEffect(() => {

        if(id != 0){

            setTimeout(() => {
                setClasseMarcas('ul-lista-marcas')
            }, 10)
        
        } else {

            setClasseMarcas('ul-lista-marcas-oculta')
        
        }

    }, [id])

    return (
        <>
            <div className="container-fluid p-0">
                <ul className={classeMarcas}>
                    <li className=''>Apple</li>
                    <li className=''>Samsung</li>
                    <li className=''>Xiaomi</li>
                    <li className=''>Motorola</li>
                    <li className=''>Nokia</li>
                </ul>
            </div>
        </>
    );
}