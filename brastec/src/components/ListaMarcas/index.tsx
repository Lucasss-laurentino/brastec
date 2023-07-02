import { useContext } from 'react';
import './ListaMarcas.css';
import { CategoriaEmExibicaoContext } from '../../Contexts/CategoriaEmExibicao';

export const ListaMarcas = () => {

    const { id } = useContext(CategoriaEmExibicaoContext);

    return (
        <>
            <div className="container-fluid div-lista-marcas p-0">
                <ul className={ id != 0 ? "ul-lista-marcas" : "ul-lista-marcas-oculta" }>
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