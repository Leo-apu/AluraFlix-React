/* eslint-disable react/prop-types */

import { AiFillCloseCircle } from "react-icons/ai";
import styled from "styled-components"


const Overlay = styled.div`
    position: fixed;
    top: 0;
    left: 0;
    width: 100vw;
    height: 100vh;
    background-color: rgb(51 23 202 / 50%);
    display: flex;
    justify-content: center;
    align-items: center;
`;

const ModlaHead = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 20px;
    padding-bottom: 20px;
    border-bottom: 1px solid #077aa3;
    

    h3 {
        color: black;
        font-size: 2rem;
        font-weight: 500;
    }
`;  

const BotonCerrar = styled.button`
    position: absolute;
    top: 10px;
    right: 10px;
    background-color: transparent;
    border: none;
    cursor: pointer;
    transition: all 0.3s ease;
    color : #d52404;
    font-size: 2rem;

    &:hover {
        transform: scale(1.1);
    }
`;

const ModalContainer = styled.div`
    width: 50%;
    background-color: white;
    border-radius: 10px;
    /* display: flex;
    justify-content: center;
    align-items: center; */
    position: relative;
    box-shadow: 0 7px 29px 0px rgba(100, 100, 111, 0.3);
    padding: 20px;

    @media (max-width: 768px) {
        width: 97%;
    }
`;


const Modal = ( {children , estado , cambiarEstado }  ) => {

    return (
        <>
        { estado && 
            <Overlay>
                <ModalContainer>
                    <ModlaHead>
                        <h3>Modal</h3>
                    </ModlaHead>

                    {children}

                    <BotonCerrar  onClick={() => cambiarEstado(!estado)}>
                        <AiFillCloseCircle />
                    </BotonCerrar>
                </ModalContainer>
            </Overlay>   
        }     
        </>
    )   
}

export default Modal