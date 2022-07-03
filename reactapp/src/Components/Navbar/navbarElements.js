import styled from 'styled-components';
import {Link as LinkR} from 'react-router-dom';
import {Link as LinkS} from 'react-scroll';

export const Nav = styled.nav`
    background: ${({ scrollNav }) => (scrollNav ? 'background: rgb(12,51,99);background: linear-gradient(22deg, rgba(12,51,99,1) 0%, rgba(0,194,255,1) 72%);' : 'transparent')};
    height: 80px;
    margin-top: -80px;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 1rem;
    position: sticky;
    top: 0;
    z-index: 100;

    @media screen and (max-width: 960px){
        transition: 0.8s all ease; 
    }
`;

export const NavbarContainer = styled.div`
    display: flex;
    justify-content: space-between;
    height: 80px;
    z-index: 1;
    width: 100%;
    padding: 0 24px;
    max-width: 1100px;
`;


export const NavLogo = styled.img`
    color: #000;
    height: 60px;
    justify-self: flex-start;
    cursor: pointer;
    font-size: 1.5rem;
    display: flex;
    align-items: center;
    margin-left: 24px;
    text-decoration: none;
    margin-top: 10px;
    
`;

export const MobileIcon = styled.div`
    display: none;

    @media screen and (max-width: 768px) {
        display: block;
        position: absolute;
        top: -5px;
        right: 0;
        transform: translate(-100%, 60%);
        font-size: 1.8rem;
        cursor: pointer;
        color: #fff;
    }
`;

export const NavMenu = styled.ul`
    display: flex;
    align-items: center;
    list-style: none;
    text-align: center;
    margin-right: -22px;  
    

    @media screen and (max-width: 768px) {
        display: none;
    }
`;

export const NavItem = styled.li`
    height: 80px;
    font-family: 'Roboto Condensed', sans-serif;
    margin: auto;
    font-weight: 400;
`;

export const NavLinks = styled(LinkS)`
    color: #fff;
    display: flex;
    align-items: center;

    text-decoration: none;
    padding: 0 1rem;
    height: 100%;
    cursor: pointer;

    &:hover{
        color: ${({ scrollNav }) => (scrollNav ? '#aeca53' : '#aeca53')};
    }
    

    &.active {
        border-bottom: 3px solid #FFF;
    }
`;

export const NavBtn = styled.nav`
    display: flex;
    align-items: center;
    font-family: 'Roboto Condensed', sans-serif;
    color: #000;
    
    @media screen and (max-width: 768px) {
        display: none;
    }
`;

export const NavBtnLink = styled(LinkR)`
    border-radius: 50px;
    background: ${({ scrollNav }) => (scrollNav ? '#fff' : '#02AFE7')};
    white-space: nowrap;
    padding: 10px 22px;
    color: ${({ scrollNav }) => (scrollNav ? '#02AFE7' : '#fff')};
    font-size: 16px;
    outline: none;
    border: none;
    cursor: pointer;
    transition: all 0.2s ease-in-out;
    text-decoration: none;

    &:hover {
        transition: all 0.2s ease-in-out;
        background: #fff;
        color: #aeca53;
        
    }
`;