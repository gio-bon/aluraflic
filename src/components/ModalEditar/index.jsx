import React from 'react'
import styled from 'styled-components'
import { IoCloseSharp } from "react-icons/io5";
import FormularioEdicao from '../FormularioEdicao';

const ModalEditar = ({ estadoModal, alternarModal, idEdit, selecaoEdit}) => {
    
    return (
        <>
            {estadoModal &&
                <Overlay>
                    <dialog open={estadoModal}>
                        <FormularioEdicao idEdit={idEdit} selecaoEdit={selecaoEdit}  /> {/* TODO */}
                        <a onClick={alternarModal}><IoCloseSharp /></a>
                    </dialog>
                </Overlay>
            }
        </>
    )
}

const Overlay = styled.dialog`
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(64, 66, 174, 0.62);
    display: flex;
    align-items: center;
    justify-content: center;
    z-index: 2;
    backdrop-filter: blur(5px);
    dialog {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        gap: 20px;
        background-color: var(--back1);
        border-radius: 18px;
        padding: 80px;
        width: 500px;
        height: 500px;
        z-index: 3;
    }
        a {
            cursor: pointer;
            color: var(--white);
            font-size: 25px;
            padding: 10px 10px;
            &:hover {
                background-color: var(--white);
                color: var(--black);
                transition: 0.5s;
            }
        }
`;

export default ModalEditar
