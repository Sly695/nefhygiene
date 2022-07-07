import styled from "styled-components";

export const InfoContainer = styled.div`
    color: #fff;
    background: ${({lightBg}) => (lightBg ? '#ffffe' : "#010606")};
    padding: 38px 0;

    @media screen and (max-width: 768px) {
        height: 100%;
    }
`;

export const InfoWrapper = styled.div`
    display: flex;
    z-index: 1;
    max-width: 1600px;
    margin-right: auto;
    margin-left: auto;
    padding: 12px 12px;
    justify-content: center;
    flex-wrap: wrap;
    width: 100%;
    flex-direction: column;
    justify-content: center;
`;



export const InfoRow = styled.div`
    display: flex;
    grid-auto-columns: minmax(auto, 1fr);
    align-items: center;
    grid-template-areas : ${({imgStart}) => imgStart ? `'col2 col1 '` : `'col1 col2'`};

    @media screen and (max-width: 768px) {
        grid-template-areas: ${({imgStart}) => (imgStart ? `'col1' 'col2'` : `'col1 col1' 'col2 col2'`)};
    }

`;


export const TextWrapper = styled.div`
    padding: 0 38px;
    
    @media screen and (max-width: 768px){
        width: 100%;
    }
`;

export const TopLine = styled.p`
    color: #02AFE7;
    line-height: 16px;
    font-weight: 700;
    letter-spacing: 1.4px;
    text-transform: uppercase;
    margin-bottom: 16px;
    font-size: 100%;
    font-family: 'Gantari', sans-serif;

    @media screen and (max-width: 768px){
        font-size: 100%;
    }
`;

export const Heading = styled.h1`
    margin-bottom: 24px;
    flex: flex-end;
    width: 50%;
    font-size: 32px;
    line-height: 1.1;
    font-weight: 600;
    font-family: 'Gantari', sans-serif;
    color: ${({ lightText }) => (lightText ? '#f7f8fa' : '#010606')};

    @media screen and (max-width: 768px) {
        width: 100%;
        font-size: 20px;
    };
`;

export const Subtitle = styled.p`
    margin-bottom: 35px;
    font-size: 100%;
    line-height: 24px;
    color: ${({darkText}) => (darkText ? '#010606' : '#000')};
    font-family: 'Gantari', sans-serif;

    @media screen and (max-width: 768px){
        font-size: 100%;
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
    width: 100%;
    margin: 0 0 10px 0;
    padding-right: 0;
`;

export const CardWrapper = styled.div`
    display: flex;
    justify-content: space-around;
    flex-wrap: wrap;
    width: 400px:
`;

export const CircleForm = styled.div`
    width: 100px;
    height: 100px;
    background: rgb(123,173,41);
    background: linear-gradient(90deg, rgba(123,173,41,1) 0%, rgba(145,207,45,1) 100%);
    border-radius: 100%;
    z-index: 2;
    position: absolute;
    left: -50px;
    top: 25px;
    font-size: 10px;
    box-shadow: rgba(149, 157, 165, 0.2) 0px 8px 24px;
    box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px
`;
    

export const CardPackTitle = styled.p`

`;

export const CardPackList = styled.ul`
    list-style: block;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    text-align: left;
    margin: 20px;
    width: 100%;
    padding: 10px;
    font-family: 'Gantari', sans-serif;

`;

export const CardPackItem = styled.li`
    text-align: left;
`

export const BarSeparation = styled.div`
    width: 100%;
    border: 1px solid #aeca53;
    color: red;
    margin-top: 3%;
`;

export const Details = styled.p`
    color: #02AFE7;
    text-align: right;
    position: absolute;
    right: 20px;
    bottom 0px;
    font-family: 'Gantari', sans-serif;

    &:hover{
        color: #aeca53;
        cursor: pointer;
    }
`;