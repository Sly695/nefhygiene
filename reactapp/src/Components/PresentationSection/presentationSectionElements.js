import styled from "styled-components";
import image from "../../../src/image/bureaux.jpeg";
import image1 from "../../../src/image/hotel.jpeg";
import image2 from "../../../src/image/usine.jpg";
import image3 from "../../../src/image/centre_de_sante.jpeg";
import image4 from "../../../src/image/logement.jpeg";

export const InfoContainer = styled.div`
    color: #fff;
    background: ${({ lightBg }) => (lightBg ? '#f9f9f9' : "#010606")};

    @media screen and (max-width: 768px) {
        padding: 50px 0;
    }
`;

export const InfoWrapper = styled.div`
    display: grid;
    z-index: 1;
    height: 760px;
    width: 80%;
    max-width: 1100px;
    margin-right: auto;
    margin-left: auto;
    padding: 0 24px;
    justify-content: center;
    display: flex;

    @media screen and (max-width: 768px) {
        padding: 0px;
    }


    
`;

export const InfoRow = styled.div`
    display: grid;
    grid-auto-columns: minmax(auto, 1fr);
    align-items: center;
    grid-template-areas : ${({ imgStart }) => imgStart ? `'col2 col1 '` : `'col1 col2'`};

    @media screen and (max-width: 768px) {
        grid-template-areas: ${({ imgStart }) => (imgStart ? `'col1' 'col2'` : `'col1 col1' 'col2 col2'`)};
    }

`;

export const Column1 = styled.div`
    margin-bottom: 15px;
    padding: 0 15px;
    grid-area: col1;
`;

export const Column2 = styled.div`
    margin-bottom: 15px;
    padding: 0 15px; 
    grid-area: col2;

    @media screen and (max-width: 768px) {
        width: 100%;
    }

`;

export const TextWrapper = styled.div`
    max-width: 540px;
    padding-top: 0;
`;

export const TopLine = styled.p`
    color: #02AFE7;
    line-height: 16px;
    font-weight: 700;
    letter-spacing: 1.4px;
    text-transform: uppercase;
    margin-bottom: 16px;
    font-family: 'Gantari', sans-serif;

    @media screen and (max-width: 768px) {
        font-size: 15px;
    }


`;

export const Heading = styled.h1`
    margin-bottom: 24px;
    font-size: 48px;
    line-height: 1.1;
    font-weight: 600;
    color: ${({ lightText }) => (lightText ? '#f7f8fa' : '#010606')};
    font-family: 'Gantari', sans-serif;
    
    @media screen and (max-width: 480px) {
        font-size: 20px;
    };
`;

export const Subtitle = styled.p`
    max-width: 440px;
    margin-bottom: 15px;
    font-size: 18px;
    line-height: 24px;
    font-family: 'Gantari', sans-serif;
     
    color: ${({ darkText }) => (darkText ? '#010606' : '#000')};

    @media screen and (max-width: 768px) {
        font-size: 12px;
    }

`;

export const BtnWrap = styled.div`
    display: flex;
    justify-content: flex-start;
`;

export const Carousel = styled.div`
    display: block;
    width: 100%;
    max-width: 500px;
    height: 400px;
    overflow-x: scroll;
    margin: 0;
    white-space: nowrap; 
    
`;

export const Img = styled.img`
    top: 50%;
    position: absolute;
    color: white;
    text-align: center;
    width: 100%;
    font-size: 4em;
`;

export const ItemWrap = styled.div`
    display: inline-block;
    width: 200px;
    margin: 0 10px;
    height: 200px;
    position: relative;
    z-index: 10;

`;

export const ImgWrap = styled.div`
    width: 100%;
    height: 100%;
    position: absolute;
    text-align: center;
    font-size: 9em;
    color: #fff;
    z-index: 10;
    background-size: auto;

`;

export const TitleImage = styled.h1`
    top: 50%;
    position: absolute;
    color: white;
    text-align: center;
    width: 100%;
    font-size: 2.5em;
    z-index: 11;
    top: 85px;
    font-weight: 600;
    font-family: 'Gantari', sans-serif;


    
`;
