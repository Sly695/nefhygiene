import styled from 'styled-components';
import { MdKeyboardArrowRight, MdArrowForward } from 'react-icons/md';
import img from '../../../src/image/WallpaperDesinfection-min.svg';
import img2 from '../../../src/image/LogoNEFmini.svg'
import imgMobile from '../../../src/image/WallpaperMobileSize.png'
import {Link as LinkR} from 'react-router-dom';


export const HeroContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100vh;
    padding: 0 30px;
    position: relative;
    z-index: 9;


`;

export const ImgBackground = styled.img`
    position: absolute;
    z-index: 1;
    background: url(${img});
    width: 100vw;
    height: 100vh;
    z-index: 8;
    background-size: cover;

    @media screen and (max-width: 768px){
        background: url(${imgMobile});
        object-fit: fill;
    }


`;

export const HeroContent = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;

    
`;

export const HeroH1 = styled.h1`
    color: #fff;
    font-size: 48px;
    width: 70%;
    text-align: left;
    font-family: 'Roboto Condensed', sans-serif;
    font-style: light;
    font-weight: 600;
    margin: auto;
    
    @media screen and (max-width: 768px){
        font-size: 40px;
        width: 100%;
        height: 60px;
        text-align: center;
    }

    @media screen and (max-width: 480px){
        font-size: 32px;
        text-align: center;
    }
`;

export const HeroP = styled.p`
    margin-top: 24px;
    color: #fff;
    width: 70%;
    font-size: 24px;
    text-align: left;
    font-family: 'Roboto Condensed', sans-serif;
    margin: auto;

    @media screen and (max-width: 768px){
        font-size: 24px;
        width: 100%;
        text-align: center;

    }

    @media screen and (max-width: 480px){
        font-size: 18px;
    }

`;

export const HeroBtnWrapper = styled.div`
    margin-top: 32px;
    display: flex;
    flex-direction: column;
    align-items: center;
    color: #000;
`;

export const ArrowForward = styled(MdArrowForward)`
    margin-left: 8px;
    font-size: 20px;
`;

export const ArrowRight = styled(MdKeyboardArrowRight)`
    margin-left: 8px;
    font-size: 20px;
`;

export const NavBtn = styled.nav`
    display: flex;
    align-items: center;
    font-family: 'Roboto Condensed', sans-serif;
    justify-content: center;
    padding: 80px;
`;

export const NavBtnLink = styled(LinkR)`
    border-radius: 50px;
    background: #02AFE7;
    white-space: nowrap;
    padding: 10px 22px;
    color: #FFF;
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

export const Img = styled.img`
    background: url(${img2});
    width: 120px;
    height: 100px;
    margin: auto;
`;

export const Curve = styled.img`
    position: absolute;
    height: 225px;
    width: 100%;
    bottom: 0;
`;

export const Column1 = styled.div`
    margin-bottom: 15px;
    padding: 15px 15px;
    width: 50%;

    @media screen and (max-width: 768px){
        width: 100%;    
`;

export const Column2 = styled.div`
    margin-bottom: 15px;
    width: 50%;

    @media screen and (max-width: 768px){
        display: none;
    }
`;

export const IconWrap = styled.div`
    height: 50px;
    width: 50px;
    position: absolute;
    bottom: 50px;
    display: ${({ scrollNav }) => (scrollNav ? 'none' : 'block')};


    &:hover {
        transform: scale(1.17);
        transition: all 0.2s ease-in-out;
        cursor: pointer;
    }
`;

