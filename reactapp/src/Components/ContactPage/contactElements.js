import styled from 'styled-components';
import { Link as LinkR } from 'react-router-dom';
import img from '../../image/LogoNEF.svg'

export const Container = styled.div`
    min-height: 692px;
    position: fixed;
    bottom: 0;
    left: 0;
    right: 0;
    top: 0;
    z-index: 0;
    overflow: hidden;

    background: #8edff5;
`;

export const FormWrap = styled.div`
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;

`;

export const Icon = styled.img`
    width: 100px;
    height: 100px;
    cursor: pointer;
    background-repeat: no-repeat;

    @media screen and (max-width: 768px){
        width: 70px;
        height: 70px;    
    }
`;

export const FormContent = styled.div`
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;

    @media screen and (max-width: 480px){
        padding: 0px 10px;
    }
`;

export const Form = styled.div`
    background: #010101;
    max-width: 425px;
    height: 90%;
    width: 100%;
    z-index: 1;
    display: grid;
    margin: auto;
    padding: 0px 32px;
    border-radius: 4px;
    box-shadow: 0 1px 3px rgba(0, 0, 0, 0.9);

    @media screen and (max-width: 480px){
        padding: 0px 32px;
    }

`;

export const FormH1 = styled.h1`
    margin-top: 7px;
    margin-bottom: 7px;
    color: #fff;
    font-size: 20px;
    font-weight: 400;
    text-align: center;
`;

export const FormLabel = styled.label`
    margin-bottom: 8px;
    font-size: 14px;
    color: #fff;
    margin-top: 5px;
`;

export const FormInput = styled.input`
    padding: 6px 6px;
    width: 100%;
    margin-bottom: 10px;
    border: none;
    border-radius: 4px;
    margin: auto;

    @media screen and (max-width: 768px){
        padding: 1px 0px;
    }


`;

export const FormButton = styled.button`
    background: #02AFE7;
    border: none;
    border-radius: 4px;
    color: #fff;
    font-size: 16px;
    cursor: pointer;
    padding: 4px 4px;
    margin-top: 20px;
    
    &:hover {
        transition: all 0.2s ease-in-out;
        background: #fff;
        color: #02AFE7;
    }
    
`;

export const Text = styled.span`
    text-align: center;
    margin-top: 24px;
    color: #fff;
    font-size: 14px;
`;

export const FormSelect = styled.select`
    width: 100%;
    margin-bottom: 10px;
    border: none;
    border-radius: 4px;
    padding: 8px 4px;
    margin: auto;

    @media screen and (max-width: 768px){
        width: 100%;
        padding: 1px 0px;
    }

`;

export const FormWrapper = styled.div`
    display: flex;
    justify-content: space-between;

    @media screen and (max-width: 768px){
        flex-direction: column;
    }
    
    
`;

export const InputWrapper = styled.div`
    display: flex;
    flex-direction: column;
    

`;

export const FormSentence = styled.p`
    color: #02AFE7;
    text-align: center;
    font-size: 10px;
    padding: 0px;

    @media screen and (max-width: 768px){
        width: 100%;
        font-size: 8px;
    }
`;

export const SidebarRouteContact = styled(LinkR)`

`;



