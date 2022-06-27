import React from 'react'
import { Link, Navigate } from 'react-router-dom';
import { useMediaQuery } from 'react-responsive'
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
  CardWrapper,
  CircleForm,
  CardPack,
  CardPackTitle,
  CardPackList,
  CardPackItem,
  BarSeparation
} from './prestationSectionElements';

import { Avatar, Card, Carousel } from 'antd';

import img1 from '../../../src/image/moquette.jpeg'
import img2 from '../../../src/image/surface.jpeg'
import img3 from '../../../src/image/desinfecter-les-locaux.jpeg'
import img4 from '../../../src/image/insecte.png'

const contentStyle = {
  height: '160px',
  color: '#000',
  lineHeight: '160px',
  textAlign: 'center',

};

const { Meta } = Card;


const PrestationSection = (
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


  const isTabletOrMobile = useMediaQuery({ query: '(max-width: 768px)' })

  let displayCard = "";

  if (!isTabletOrMobile) {
    displayCard = (
      <CardWrapper>
        {/* PACK CLEAN */}
        <Card
          style={{
            width: 300,

          }}
          cover={
            <img
              alt="example"
              src={img2}
              style={{ width: "300px", height: "200px" }}
            />
          }
        >
          <Meta
            title="PACK CLEAN"
          />
          <BarSeparation></BarSeparation>
          <CardPackList>
            <CardPackItem>
              Désinfection des surfaces de contact
            </CardPackItem>
            <CardPackItem>
              Nettoyage des sols
            </CardPackItem>
            <CardPackItem>
              Nettoyage du bas des murs
            </CardPackItem>
            <CardPackItem>
              Dépoussiérage du mobilier
            </CardPackItem>
            <CardPackItem>
              Vidage des corbeilles et poubelles
            </CardPackItem>
          </CardPackList>
        </Card>

        {/* PACK CLEAN + */}
        <Card
          style={{
            width: 300,
          }}
          cover={
            <img
              style={{ width: "300px", height: "200px" }}
              alt="example"
              src={img1}
            />
          }
        >
          <Meta
            title="PACK CLEAN +"
          />
          <BarSeparation></BarSeparation>
          <CardPackList>
            <CardPackItem>
              PACK CLEAN
            </CardPackItem>
            <CardPackItem>
              Entretien des textiles : moquettes, canapés, fauteuils
              par technique d'aspiration injectrice extractive
            </CardPackItem>
          </CardPackList>
        </Card>

        {/* PACK DESINFECTION */}
        <Card
          style={{
            width: 300,
          }}
          cover={
            <img
              alt="example"
              src={img3}
            />
          }
        >
          <Meta
            title="PACK DÉSINFECTION"
          />
          <BarSeparation></BarSeparation>
          <CardPackList>
            <CardPackItem>
              PACK CLEAN +
            </CardPackItem>
            <CardPackItem>
              Désinfection de locaux avec produit virucide qui détruit 99,99%
              des bactéries et demeure le plus efficace pour l'élimination
              de virus
            </CardPackItem>
          </CardPackList>
        </Card>

        {/* PACK 3D */}
        <Card
          style={{
            width: 300,
          }}
          cover={
            <img
              alt="example"
              src={img4}
            />
          }
        >
          <Meta
            avatar={<img style={{ 
              background: "#000",
            }} />}
            title="PACK 3D"
            style={{
              color: "#02AFE7",
            }}
          />
        <BarSeparation></BarSeparation>
          <CardPackList>
            <CardPackItem>
              La notion de 3D englobent trois grands axes :
            </CardPackItem>
            <CardPackItem>
              Désinfection
            </CardPackItem>
            <CardPackItem>
              Dératisation
            </CardPackItem>
            <CardPackItem>
              Désinsectisation
            </CardPackItem>
          </CardPackList>
        </Card>

      </CardWrapper>)
  } else {
    displayCard = (
      <Carousel  dotPosition="top" autoplay style={{ fontFamily: "Verdana", display: "flex", margin: "auto", width: "70%", height: "100%" }}>
        <Card
          style={{
            width: 300,
          }}

          cover={
            <img
              alt="example"
              src={img2}
              style={{ width: "300px", height: "200px" }}
            />
          }
        >
          <Meta
            title="PACK CLEAN"
          />
          <BarSeparation></BarSeparation>
          <CardPackList>
            <CardPackItem>
              Désinfection des surfaces de contact
            </CardPackItem>
            <CardPackItem>
              Nettoyage des sols
            </CardPackItem>
            <CardPackItem>
              Nettoyage du bas des murs
            </CardPackItem>
            <CardPackItem>
              Dépoussiérage du mobilier
            </CardPackItem>
            <CardPackItem>
              Vidage des corbeilles et poubelles
            </CardPackItem>
          </CardPackList>
        </Card>

        {/* PACK CLEAN + */}
        <Card
          style={{
            width: 300,
          }}
          cover={
            <img
              style={{ width: "300px", height: "200px" }}
              alt="example"
              src={img1}
            />
          }
        >
          <Meta
            title="PACK CLEAN +"
          />
          <BarSeparation></BarSeparation>
          <CardPackList>
            <CardPackItem>
              PACK CLEAN
            </CardPackItem>
            <CardPackItem>
              Entretien des textiles : moquettes, canapés, fauteuils
              par technique d'aspiration injectrice extractive
            </CardPackItem>
          </CardPackList>
        </Card>

        {/* PACK DESINFECTION */}
        <Card
          style={{
            width: 300,
          }}
          cover={
            <img
              alt="example"
              src={img3}
            />
          }
        >
          <Meta
            title="PACK DÉSINFECTION"
          />
          <BarSeparation></BarSeparation>
          <CardPackList>
            <CardPackItem>
              PACK CLEAN +
            </CardPackItem>
            <CardPackItem>
              Désinfection de locaux avec produit virucide qui détruit 99,99%
              des bactéries et demeure le plus efficace pour l'élimination
              de virus
            </CardPackItem>
          </CardPackList>
        </Card>

        {/* PACK 3D */}
        <Card
          style={{
            background: "rgb(250,233,177)",
            background: "radial-gradient(circle, rgba(250,233,177,1) 0%, rgba(212,175,55,1) 100%)",
          }}
          cover={
            <img
              alt="example"
              src={img4}
            />
          }
        >
          <Meta
            title="PACK 3D"
            style={{
              color: "#02AFE7",
            }}
          />
        <BarSeparation></BarSeparation>
          <CardPackList>
            <CardPackItem>
              La notion de 3D englobent trois grands axes :
            </CardPackItem>
            <CardPackItem>
              Désinfection
            </CardPackItem>
            <CardPackItem>
              Dératisation
            </CardPackItem>
            <CardPackItem>
              Désinsectisation
            </CardPackItem>
          </CardPackList>
        </Card>

      </Carousel>)
      
  }



  return (
    <>
      <InfoContainer lightBg={lightBg} id="prestations">
        <InfoWrapper>
          <TextWrapper>
            <TopLine>
              Nos services
            </TopLine>
            <Heading>
              Nous vous proposons 4 packs pour résoudre vos problèmes en tout genre
            </Heading>
            <Subtitle>
              Afin de satisfaire vos besoins et exigences.
            </Subtitle>
          </TextWrapper>
        </InfoWrapper>
        {displayCard}
      </InfoContainer>
    </>
  )
}

export default PrestationSection;