import React, { useState } from 'react';
import {
    Container,
    FormWrap,
    Icon,
    FormContent,
    Form,
    FormH1,
    FormInput,
    FormLabel,
    FormButton,
    FormSelect,
    FormWrapper,
    InputWrapper,
    FormSentence,
    SidebarRouteContact
} from './contactElements';

import img from '../../image/nefhygienelogo.svg';
import { useNavigate } from 'react-router-dom';


const ContactPage = () => {

    const [entreprise, setEntreprise] = useState("");
    const [email, setEmail] = useState("");
    const [superficie, setSuperficie] = useState("");
    const [propriete, setPropriete] = useState("");
    const [pack, setPack] = useState("");
    const [message, setMessage] = useState("");
    const [response, setResponse] = useState(false);
    const [phoneNumber, setPhoneNumber] = useState("");
    const navigate = useNavigate();

    function onChangeEmail(arg) {
        setEmail(arg)
    }

    function onChangeMessage(arg) {
        setMessage(arg)
    }

    function onChangeSuperficie(arg) {
        setSuperficie(arg)
    }

    function onChangePack(arg) {
        setPack(arg)
    }

    function onChangeEntreprise(arg) {
        setEntreprise(arg)
    }

    function onChangePropriete(arg) {
        setPropriete(arg)
    }

    function onChangePhoneNumber(arg) {
        setPhoneNumber(arg)
    }

    async function submit() {
        let rawResponse = await fetch("/sendData", {
            body: `entreprise=${entreprise}&email=${email}&superficie=${superficie}&propriete=${propriete}&pack=${pack}&message=${message}&number=${phoneNumber}`,
            headers: {
                "Content-Type": "application/x-www-form-urlencoded",
            },
            method: "post",
        })

        let response = await rawResponse.json();

        setResponse(response.status);

    }

    function toHomePage() {
        return (
           navigate('/')
        )
    }

    return (
            <Container>
                <FormWrap>
                    <Icon onClick={() => toHomePage()} src={img} />
                    <FormContent>
                        <Form>
                            <FormH1>Contactez-nous</FormH1>
                            <FormSentence>
                                Nous nous engageons ?? vous fournir un devis sur un d??lai de 24H. Devis gratuit sans engagement. Intervention uniquement en Auvergnes Rh??nes-Alpes en attendant le d??ploiement national.
                            </FormSentence>
                            <FormWrapper>
                                <InputWrapper>
                                    <FormLabel htmlFor='for'>Nom de l'entreprise</FormLabel>
                                    <FormInput onChange={(arg) => onChangeEntreprise(arg.target.value)} type="entreprise" required />
                                </InputWrapper>
                                <InputWrapper>
                                    <FormLabel htmlFor='for'>Email</FormLabel>
                                    <FormInput onChange={(arg) => onChangeEmail(arg.target.value)} type="email" required />
                                </InputWrapper>
                            </FormWrapper>
                            <FormWrapper>
                                <InputWrapper>
                                    <FormLabel htmlFor='for'>Superficie ?? traiter</FormLabel>
                                    <FormInput onChange={(arg) => onChangeSuperficie(arg.target.value)} placeholder="  m??" type="superficie" required />
                                </InputWrapper>
                                <InputWrapper>
                                    <FormLabel type="propriete" htmlFor='for'>Type de propri??t??</FormLabel>
                                    <FormSelect onChange={(arg) => onChangePropriete(arg.target.value)}>
                                        <option value="">Choisir</option>
                                        <option value="Bureaux">Bureaux</option>
                                        <option value="Hotellerie">Hot??llerie</option>
                                        <option value="Immeubles">Immeubles</option>
                                        <option value="Commerces">Commerces</option>
                                        <option value="Usines">Usines</option>
                                        <option value="Centre de sante">Centre de sant??</option>
                                        <option value="Logement">Logement</option>
                                        <option value="Groupe scolaire">Groupe scolaire</option>
                                        <option value="Transport en commun">Transport en commun</option>
                                        <option value="Copropriete">Copropri??t??</option>
                                        <option value="Administration">Administration</option>
                                        <option value="Banque">Banque</option>
                                        <option value="Autre">Autre</option>
                                    </FormSelect>
                                </InputWrapper>
                            </FormWrapper>
                            <InputWrapper>
                                <FormLabel htmlFor='for'>T??l??phone</FormLabel>
                                <FormInput onChange={(arg) => onChangePhoneNumber(arg.target.value)} type="superficie" required />
                            </InputWrapper>
                            <InputWrapper>
                                <FormLabel htmlFor='for'>Pack</FormLabel>
                                <FormSelect onChange={(arg) => onChangePack(arg.target.value)}>
                                    <option value="">Choisir</option>
                                    <option value="clean">Pack Clean</option>
                                    <option value="clean+">Pack Clean +</option>
                                    <option value="desinfection">Pack D??sinfection</option>
                                    <option value="3D">Pack 3D</option>
                                </FormSelect>
                            </InputWrapper>
                            <FormLabel htmlFor='for'>Message ou joignez nous au <a style={{ color: "#02AFE7"}} href="tel: 06 99 56 23 75">06 99 56 23 75</a></FormLabel>
                            <FormInput onChange={(arg) => onChangeMessage(arg.target.value)} type="text" required />
                            <FormButton onClick={() => submit()}>Envoyer</FormButton>
                            <p style={{ marginTop: "15px", color: "#02AFE7", textAlign: "center" }}>{response}</p>
                        </Form>
                    </FormContent>
                </FormWrap>
            </Container>
    )
}

export default ContactPage;
