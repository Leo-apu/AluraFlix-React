/* eslint-disable react/prop-types */

import { RiCloseCircleLine } from "react-icons/ri";
import styled from "styled-components"


const Overlay = styled.div`
    position: fixed;
    top: 0;
    left: 0;
    width: 100vw;
    min-height: 100vh;
    background-color: rgb(3 18 47 / 85%);
    display: flex;
    justify-content: center;
    align-items: center;
    z-index: 1000;

    padding: 20px;
`;

const ModlaHead = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 20px;
    padding-bottom: 20px;
    border-bottom: 1px solid #077aa3;
    
    h3 {
        color: #ffffff;
        font-size: 2rem;
        font-weight: 500; 
        text-transform: uppercase;       

        @media (max-width: 768px) {
            font-size: 1.1rem;
        }
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
    color : #ffffff;
    font-size: 3rem;

    &:hover {
        transform: scale(1.1);
    }
`;

const ModalContainer = styled.div`
    width: 65%;
    background-color: #03122F;
    border-radius: 10px;
    border : 4px solid #6BD1FF;
    position: relative;
    box-shadow: 0 7px 29px 0px rgba(100, 100, 111, 0.3);
    padding: ${ props => props.$padding ? props.$padding : "20px"};


    @media (max-width: 768px) {
        width: 97%;
    }
`;



const Modal = ( {children , estado , cambiarEstado , titulo , mostrarEncabezado , padding }  ) => {

    return (
        <>
        { estado && 
            <Overlay >
                <ModalContainer $padding={padding}>
                    { mostrarEncabezado &&
                    <ModlaHead>
                        <h3>{titulo}</h3>
                    </ModlaHead>
                    }	
                        {children}

                    <BotonCerrar  onClick={() => cambiarEstado(!estado)}>
                        <RiCloseCircleLine />
                    </BotonCerrar>
                </ModalContainer>
            </Overlay>   
        }     
        </>
    )   
}

export default Modal