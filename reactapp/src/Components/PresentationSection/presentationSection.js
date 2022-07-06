import React, { useState, useEffect } from 'react';
import { Link, Navigate } from 'react-router-dom';
import image from "../../../src/image/bureaux.jpeg";
import image1 from "../../../src/image/hotel.jpeg";
import image2 from "../../../src/image/usine.jpg";
import image3 from "../../../src/image/centre_de_sante.jpeg";
import image4 from "../../../src/image/logement.jpeg";
import image5 from "../../../src/image/hotel.jpeg";
import image6 from "../../../src/image/transportscommun.jpg";
import image7 from '../../../src/image/ecole.jpeg'


import 'antd/dist/antd.css';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMartiniGlassCitrus } from '@fortawesome/free-solid-svg-icons'

import {
  BtnWrap,
  Column1,
  Column2,
  Heading,
  ItemWrap,
  InfoContainer,
  InfoRow,
  InfoWrapper,
  Subtitle,
  TextWrapper,
  TopLine,
  Img,
  Carousel,
  ImgWrap,
  TitleImage,
} from './presentationSectionElements';

const Presentation = (
  lightBg,
  id,
  imgStart,
  topLine,
  lightText,
  headLine,
  darkText,
  description,
  buttonLabel,
  img,
  alt,
  primary,
  dark,
  dark2
) => {

  let images = [
    image,
    image1,
    image2,
    image3,
    image4,
  ]

  const contentStyle = {
    height: '100%',
    width: '100%',
    objectFit: "cover",
  };

  const onChange = (currentSlide) => {
    console.log(currentSlide);
  };

  let displayImages = images.map(function (img, i) {
    return (
      <div>
        <img src={img} style={contentStyle} />
      </div>
    )
  })


  return (
    <>
      <InfoContainer lightBg={lightBg} id="quisommesnous">
        <InfoWrapper>
          <InfoRow imgStart={imgStart}>
            <Column1>
              <TextWrapper>
                <TopLine>Qui sommes nous ?</TopLine>
                <Heading lightText={lightText}>NEF HYGIENE</Heading>
                <Subtitle darkText={darkText}>
                  Entreprise spécialisée dans la désinfection de lieux en tout genre, NEF HYGIENE s’impose parmi
                  les experts de qualité dans l’hygiène globale de locaux.
                </Subtitle>
                <Subtitle>
                  Située en région lyonnaise et joignable 6 jours sur 7 de 8h à 20h, une palette de services adaptée
                  à votre demande vous est proposée.
                </Subtitle>
                <Subtitle>
                  Notre expert certifié certibiocide se fera un plaisir de vous accompagner au plus proche de vos
                  besoins grâce à un suivi régulier, même après notre passage ! 
                </Subtitle>
                <Subtitle>
                  NEF HYGIENE intervient en Auvergnes Rhône-Alpes !
                </Subtitle>
                <Subtitle>
                </Subtitle>
              </TextWrapper>
            </Column1>
            <Column2>

              <Carousel style={{
                width: "100%",
                height: "100%",
              }}>
                <ItemWrap id="party" class="item">
                  <ImgWrap>
                    {/* <FontAwesomeIcon icon={faMartiniGlassCitrus}/> */}
                    <img src={image} style={{ width: "100%", height: "80%" }} />
                  </ImgWrap>
                  <TitleImage>Bureaux</TitleImage>
                </ItemWrap>
                <ItemWrap id="party" class="item">
                  <ImgWrap>
                    <img src={image2} style={{ width: "100%", height: "80%" }} />
                  </ImgWrap>
                  <TitleImage>Usines</TitleImage>
                </ItemWrap >
                <ItemWrap id="party" class="item">
                  <ImgWrap>
                    <img src={image3} style={{ width: "100%", height: "80%" }} />
                  </ImgWrap>
                  <TitleImage>Santé</TitleImage>
                </ItemWrap>
                <ItemWrap id="party" class="item">
                  <ImgWrap>
                    <img src={image4} style={{ width: "100%", height: "80%" }} />
                  </ImgWrap>
                  <TitleImage>Maisons</TitleImage>
                </ItemWrap>
                <ItemWrap id="party" class="item">
                  <ImgWrap>
                    <img src={image5} style={{ width: "100%", height: "80%" }} />
                  </ImgWrap>
                  <TitleImage>Hôtels</TitleImage>
                </ItemWrap>
                <ItemWrap id="party" class="item">
                  <ImgWrap>
                    <img src={image6} style={{ width: "100%", height: "80%" }} />
                  </ImgWrap>
                  <TitleImage>Transports</TitleImage>
                </ItemWrap>
                <ItemWrap id="party" class="item">
                  <ImgWrap>
                    <img src={image7} style={{ width: "100%", height: "80%" }} />
                  </ImgWrap>
                  <TitleImage>Écoles</TitleImage>
                </ItemWrap>
              </Carousel>
            </Column2>
          </InfoRow>
        </InfoWrapper>
      </InfoContainer>
    </>
  )
}

export default Presentation;