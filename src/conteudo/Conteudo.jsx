import React from 'react'
import './style.css'
import Option from '../option-paciente/Option'
import Date from '../input-date/InputDate'
function Conteudo() {
    return (
        <div className='conteudo grid'>
            <Option></Option>
            <Date></Date>
            <Date></Date>
            <Date></Date>
        </div>
    )
}
export default Conteudo;