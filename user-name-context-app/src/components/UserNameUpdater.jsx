import React, { useState } from 'react';
import { useUser } from '../contexts/userContext';
import Modal from './Modal';

const UserNameUpdater = () => {

    const { userName, setUserName } = useUser()
    const [isModalOpen, setIsModalOpen] = useState(false)
    const [inputValue, setInputValue] = useState(userName)

    const openModal = () => { setIsModalOpen(true) }
    const closeModal = () => { setIsModalOpen(false) }

    const [item, setItem] = useState()
    const [items, setItems] = useState([])

    const handleChangeInput = (event) => {
        setInputValue(event.target.value)
    }

    const handleAdd = () => {
        setUserName(inputValue);
        setInputValue('');
        closeModal();   
    }

    return (
        <div className='UserNameUpdater'>
            <button className='btn-add' onClick={openModal}>Actualizar nombre de usuario</button>

            <Modal 
                isOpen={isModalOpen} 
                onClose={closeModal} 
                item={inputValue} 
                onChangeInput={handleChangeInput} 
                onAdd={handleAdd} />
        </div>
    )
}

export default UserNameUpdater;