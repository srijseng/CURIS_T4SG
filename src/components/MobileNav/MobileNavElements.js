import styled from 'styled-components';
import {Link as LinkS} from 'react-scroll';
//import {Link as LinkR} from 'react-router-dom';
import { FaTimes } from 'react-icons/fa';

export const SidebarContainer = styled.aside`
  position: fixed;
  z-index: 999;
  width: 100%;
  height: 40%;
  background: white;
  display: grid;
  align-items: center;
  top: 80px;
  left: 0;
  transition: 0.3s ease-in-out;
  opacity: ${({ isOpen }) => (isOpen ? '100%' : '0')};
  top: ${({ isOpen }) => (isOpen ? '80px' : '-100%')};
`

export const CloseIcon = styled(FaTimes)`
  color: black;
`

export const Icon = styled.div`
  position: absolute;
  top: 1.2rem;
  right: 1.5rem;
  background: transparent;
  font-size: 2rem;
  cursor: pointer;
  outline: none;
  display: none;
`

export const SidebarWrapper = styled.div`
  color: #fff;
`;

export const SidebarMenu = styled.ul`
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: repeat(6, 80px);
  text-align: center;

  a  {
    text-decoration: none;
    font-size: 1.5rem;
    color: black;
    cursor: pointer;
    border-bottom: 2px solid #4d84bc;
    padding-top: 10px;
  }

  @media screen and (max-width: 480px) {
    grid-template-rows: repeat(6, 60px);
  }
`

// export const SideBtnWrap = styled.div`
//   display: flex;
//   justify-content: center;
// `

// export const SidebarRoute = styled(LinkR)`
//
// `
