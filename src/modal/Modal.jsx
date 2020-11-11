import React from 'react'
import './style.css'
import Title from '../title-relatorio/Title'
import Conteudo from '../conteudo/Conteudo'
function Modal(){
    return(
        <div className='modal grid'>
            <div className='content'>
                <Title></Title>
                <Conteudo></Conteudo>
            </div>

        </div>
    )
}
export default Modal