import React, { useState, useEffect } from 'react';
import { Link, Navigate } from 'react-router-dom';
import {
  BtnWrap,
  Column1,
  Column2,
  Heading,
  ImgWrap,
  InfoContainer,
  InfoRow,
  InfoWrapper,
  Subtitle,
  TextWrapper,
  TopLine,
  Img,
  Column3,
  ImgWrapper
} from './serviceSectionElements';

import { Carousel } from 'react-bootstrap';

import img1 from '../../../src/image/cleaning.jpg';
import img2 from '../../../src/image/desinfection.jpg';


const contentStyle = {
  height: "10px",
  width: "10px",
  color: '#fff',
  lineHeight: '160px',
  textAlign: 'center',
  background: '#364d79',
};


const ServiceSection = (
  lightBg,
  lightText,
  darkText,
  img,
) => {

  const [index, setIndex] = useState(0);
  const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex);
  };


  return (
    <>
      <InfoContainer lightBg={lightBg} id="services">
        <InfoWrapper>
          <InfoRow imgStart={img}>
            <Column1>
              <TextWrapper>
                <TopLine>Nos services</TopLine>
                <Heading lightText={lightText}>Pourquoi les choisir ?</Heading>
                <Subtitle darkText={darkText}>
                  Au vu du contexte sanitaire actuel, vivre dans un espace sain et désinfecté relève d’un devoir.
                </Subtitle>
                <Subtitle>
                  L’hygiène de vos locaux est primordiale pour la pérennité de votre activité.
                  Cela peut éviter dans un premier temps d’être un lieu de circulation de virus et bactéries.
                  Vous pourrez éviter la fermeture de votre espace de travail lié à des personnes infectées et donc empêcher la perte d’une partie de votre chiffre d’affaires.
                  Faites un calcul simple : à combien estimez-vous vos pertes annuelles liées aux jours de congés maladies de vos employés ?
                  N’attendez plus et profitez de nos services! Nous comprenons vos attentes, vos besoins et nous nous efforcerons de trouver des solutions adaptées à vos exigences.
                </Subtitle>
                <Subtitle>
                  NEF HYGIÈNE met à votre disposition son professionnalisme, sa polyvalence et son savoir faire pour les différentes missions à effectuer.
                  Nous nous adressons aussi bien aux professionnels qu’aux particuliers , notre politique étant de permettre à chacun de bénéficier de prestations de services abordables.
                </Subtitle>
              </TextWrapper>
            </Column1>
            <Column2>
              <TextWrapper>
                <ImgWrapper>
                  <Img src={img1} style={{ width: "60%", marginBottom: "30px" }} />
                  <Img src={img2} style={{ width: "60%", marginBottom: "30px" }} />
                </ImgWrapper>
              </TextWrapper>
            </Column2>
          </InfoRow>
        </InfoWrapper>
      </InfoContainer>
    </>
  )
}

export default ServiceSection;