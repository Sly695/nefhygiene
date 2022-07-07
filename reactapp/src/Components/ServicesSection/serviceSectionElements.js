import styled from "styled-components";
import img from '../../../src/image/Prestation.svg'

export const InfoContainer = styled.div`
    background: rgb(12,51,99);
    background: linear-gradient(22deg, rgba(12,51,99,1) 0%, rgba(0,194,255,1) 72%);

    @media screen and (max-width: 768px) {
        padding: 100px 0;
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
        padding: 0;
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
    grid-area: col2;
    width: 100%;
`;

export const Column2 = styled.div`
    margin-bottom: 15px;
    padding: 0 15px; 
    grid-area: col1;
`;

export const TextWrapper = styled.div`
    max-width: 540px;
    padding-top: 0;
`;

export const TopLine = styled.p`
    color: #000;
    line-height: 16px;
    font-weight: 700;
    letter-spacing: 1.4px;
    text-transform: uppercase;
    margin-bottom: 16px;
    font-family: 'Gantari', sans-serif;    
`;

export const Heading = styled.h1`
    margin-bottom: 24px;
    font-size: 32px;
    line-height: 1.1;
    font-weight: 600;
    font-family: 'Gantari', sans-serif;    
    color: ${({ lightText }) => (lightText ? '#f7f8fa' : '#fff')};

    @media screen and (max-width: 480px) {
        font-size: 18px;

    };
`;

export const Subtitle = styled.p`
    max-width: 440px;
    font-size: 18px;
    line-height: 24px;
    font-family: 'Gantari', sans-serif;
    color: ${({ darkText }) => (darkText ? '#010606' : '#fff')};
    text-align: left;

    @media screen and (max-width: 768px){
        font-size: 14px;
    }
`;

export const BtnWrap = styled.div`
    display: flex;
    justify-content: flex-start;
`;

export const ImgWrap = styled.div`
    max-width: 555px;
    height: 100%;
`;

export const Img = styled.img`
    height: 25%;
    width: 60%,
    display: flex;
    justify-content: center;
    margin: auto;
`;

export const ImgWrapper = styled.div`
    display: flex;
    width: 100%;
    flex-direction: column;
    justify-content: center;

    @media screen and (max-width: 768px){
        flex-direction: column;
    }
`;
