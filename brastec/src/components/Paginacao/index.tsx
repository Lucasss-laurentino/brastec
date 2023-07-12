import { useContext, useEffect, useState } from 'react';
import './Paginacao.css';
import { PaginacaoContext } from '../../Contexts/Paginacao';

export const Paginacao = () => {

    const { limiteDeProdutos, totalDeProdutos, offSet, proximaPagina } = useContext(PaginacaoContext);

    const [paginaAtual, setPaginaAtual] = useState(
        offSet ? (offSet / limiteDeProdutos) + 1 : 1
    );

    const [totalDePaginas, setTotalDePaginas] = useState(
        Math.ceil(totalDeProdutos / limiteDeProdutos)
    );

    const [maximoPaginas, setMaximoPaginas] = useState(5); // Máximo de botões a ser renderizados

    const [paginasDivididas, setPaginasDivididas] = useState((maximoPaginas - 1) / 2); // tres botoes pra cada lado e um no meio

    const [primeiraPagina, setPrimeiraPagina] = useState(
        Math.max(paginaAtual - paginasDivididas, 1)
    ); // Pagina do primeiro botão da lista de acordo com a pagina atual


    useEffect(() => {

        setPaginaAtual(
            offSet ? (offSet / limiteDeProdutos) + 1 : 1
        );

        setTotalDePaginas(
            Math.ceil(totalDeProdutos / limiteDeProdutos)
        );

        setPrimeiraPagina(
            Math.max(paginaAtual - paginasDivididas, 1)
        );

    }, [limiteDeProdutos, totalDeProdutos, offSet]);

    return (
        <>

            <div className="linha-paginacao">
                <ul className='lista-de-paginacao'>
                    <li className='item-inativo'><p className='texto-responsivo'>Anterior</p></li>
                    {Array.from({ length: Math.min(maximoPaginas, totalDePaginas) }).map((_, index) => index + paginaAtual).map((page) => {
                        return (
                            <li onClick={() => proximaPagina(page)} key={page} className={paginaAtual == page ? 'ativa' : 'item-inativo'}>
                                {page}
                            </li>
                        );
                    })}
                    <li  className='item-inativo'><p className='texto-responsivo'>Próxima</p></li>
                </ul>
            </div>
        
        </>
    );


}