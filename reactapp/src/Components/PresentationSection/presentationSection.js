import React, { useState, useEffect } from 'react';
import { Link, Navigate } from 'react-router-dom';
import image from "../../../src/image/bureaux.jpeg";
import image1 from "../../../src/image/hotel.jpeg";
import image2 from "../../../src/image/usine.png";
import image3 from "../../../src/image/centre_de_sante.jpeg";
import image4 from "../../../src/image/logement.jpeg";

import { Carousel } from 'antd';
import 'antd/dist/antd.css';

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
    image4
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
                <Subtitle darkText={darkText}>est une entreprise de nettoyage spécialisée dans la désinfection de locaux.
                  Située en région lyonnaise, nous proposons des prestations sur mesure. Bénéficez de nos services adaptés à vos besoins.
                </Subtitle>
                <Subtitle>
                  Nous agissons dans touts types de locaux :
                </Subtitle>
                <Subtitle>
                  Bureaux, Hotêllerie, Usines, Centre de santé, Logement, Groupe scolaire, Transport en commun, Copropriété, Administration, Banque etc
                </Subtitle>
              </TextWrapper>
            </Column1>
            <Column2>
              <ImgWrap style={{
                width: "100%",
                height: "100%"
              }}>
                <Carousel dotPosition="top" autoplay
                  style={{
                    height: '100%',
                    width: '100%',
                  }}>
                  {displayImages}
                </Carousel>
              </ImgWrap>
            </Column2>
          </InfoRow>
        </InfoWrapper>
      </InfoContainer>
    </>
  )
}

export default Presentation;