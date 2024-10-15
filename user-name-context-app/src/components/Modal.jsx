import React from 'react'
import ReactDOM from 'react-dom'
import './Modal.css'

const Modal = ({isOpen, onClose, item, onChangeInput, onAdd}) => {

    if (!isOpen) return null

    return ReactDOM.createPortal(
        <div className='modal-overlay' onClick={onClose}>
            <div className='modal-content' onClick={(event) => event.stopPropagation()}>
                <button className="close-button" onClick={onClose}>x</button>
                <div className='input-container'>
                    <input className='input' type='text' value={item} onChange={onChangeInput}/>
                    <button className='btn-add' onClick={onAdd}>Agregar</button>
                    <button className='btn-close' onClick={onClose}>Cerrar</button>
                </div>
            </div>
        </div>,
        document.getElementById('modal-root')
    )
}

export default Modal

