/* eslint-disable react-refresh/only-export-components */

import styled from 'styled-components'
import logo from '../../assets/img/Logo.png'


const HeaderEstilizado = styled.header`
   padding: 60px 0;
   display: flex;
    justify-content: space-between;
    img{
        width: 212px;
    }
`

const header = () => {
  return (
        <HeaderEstilizado>
            <img src={logo} alt="Logo AluraFlix" />
        </HeaderEstilizado>
  )
}

export default header
