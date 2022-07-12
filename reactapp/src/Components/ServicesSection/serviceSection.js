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
  ImgWrapper, 
  SentenceSpan,
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
                <Heading lightText={lightText}>Pourquoi faire appels à services ?</Heading>
                <Subtitle darkText={darkText}>
                  Comprendre les attentes, les besoins et être à l’entière écoute de notre clientèle fait de  <SentenceSpan>NEF HYGIÈNE </SentenceSpan>
                  une société proche de ses clients. 
                </Subtitle>
                <Subtitle> 
                  <SentenceSpan>Trouver</SentenceSpan> des solutions adaptées <SentenceSpan>ensemble</SentenceSpan> est notre satisfaction première.
                </Subtitle>
                <Subtitle>
                  <SentenceSpan>NEF HYGIÈNE</SentenceSpan> met à votre disposition son professionnalisme de haut niveau et sa polyvalence dans les différentes
                  missions à effectuer, <SentenceSpan>alors n'hésitez plus !</SentenceSpan>
                </Subtitle>
                <Subtitle>
                  Que vous soyez professionnel ou particulier, notre
                  politique est de vous permettre de bénéficier de prestations de services abordables !
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