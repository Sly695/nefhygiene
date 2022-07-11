import React, { useState } from 'react'
import { Link, Navigate } from 'react-router-dom';
import { useMediaQuery } from 'react-responsive'
import {
  Heading,
  InfoContainer,
  InfoWrapper,
  Subtitle,
  TextWrapper,
  TopLine,
  CardWrapper,
  CardPackList,
  CardPackItem,
  BarSeparation,
  Details,
  SentencePrestationWrap, 
  SentencePrestation
} from './prestationSectionElements';

import { Card, Carousel, Modal } from 'antd';

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
) => {


  const isTabletOrMobile = useMediaQuery({ query: '(max-width: 768px)' })
  const [visiblePackClean, setVisiblePackClean] = useState(false);
  const [visiblePackCleanPlus, setVisiblePackCleanPlus] = useState(false);
  const [visibleDesinfection, setVisibleDesinfection] = useState(false);
  const [visible3d, setVisible3d] = useState(false);


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
            style={{
              color: "red",
            }}
          />
          <BarSeparation></BarSeparation>
          <CardPackList>
            <CardPackItem>
              Désinfection des surfaces de contact
            </CardPackItem>
            <CardPackItem>
              Nettoyage des sols, des murs, des plinthes et du mobilier par dépoussiérage
            </CardPackItem>
            <CardPackItem>
              Vidage des corbeilles et poubelles
            </CardPackItem>
          </CardPackList>
          <Details onClick={() => setVisiblePackClean(true)}>En savoir plus</Details>
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
          <Details onClick={() => setVisiblePackCleanPlus(true)}>En savoir plus</Details>
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
              Désinfection par nébulisation/ pulvérisation avec produit virucide NF EN 14476 qui détruit 99,9%
              des bactéries et demeure parmi l’une des techniques des plus radicale pour l’élimination de virus dès
              le premier passage.
            </CardPackItem>
          </CardPackList>
          <Details onClick={() => setVisibleDesinfection(true)}>En savoir plus</Details>
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
            title="PACK 3D"
          />
          <BarSeparation></BarSeparation>
          <p style={{paddingTop: "10px", paddingLeft: "10px"}}>La notion de 3D englobent trois grands axes :</p>
          <CardPackList>
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
          <Details onClick={() => setVisible3d(true)}>En savoir plus</Details>
        </Card>

      </CardWrapper>)
  } else {
    displayCard = (
      <Carousel dotPosition="top" style={{ fontFamily: "Verdana", display: "flex", margin: "auto", width: "70%", height: "100%" }}>
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
              Nettoyage des sols, des murs, des plinthes et du mobilier par dépoussiérage
            </CardPackItem>
            <CardPackItem>
              Vidage des corbeilles et poubelles
            </CardPackItem>
          </CardPackList>
          <Details onClick={() => setVisiblePackClean(true)}>En savoir plus</Details>
        </Card>

        {/* PACK CLEAN + */}
        <Card
          style={{
            width: 300,
          }}
          cover={
            <img
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
          <Details onClick={() => setVisiblePackCleanPlus(true)}>En savoir plus</Details>
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
              Désinfection par nébulisation/pulvérisation avec produit virucide NF EN 14476 qui détruit 99,9%
              des bactéries et demeure parmi l’une des techniques des plus radicale pour l’élimination de virus dès
              le premier passage.
            </CardPackItem>
          </CardPackList>
          <Details onClick={() => setVisibleDesinfection(true)}>En savoir plus</Details>
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
          <p style={{paddingTop: "10px", paddingLeft: "10px"}}>La notion de 3D englobent trois grands axes :  </p>
          <CardPackList>
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
          <Details onClick={() => setVisible3d(true)}>En savoir plus</Details>
        </Card>

      </Carousel>)

  }



  return (
    <>
      <InfoContainer lightBg={lightBg} id="prestations">
        <InfoWrapper>
          <TextWrapper>
            <TopLine>
              Nos prestations
            </TopLine>
            <Heading>
              Nous vous proposons 4 packs pour résoudre vos problèmes en tout genre
            </Heading>
          </TextWrapper>
        </InfoWrapper>
        {displayCard}
        <Modal
          title="PACK CLEAN"
          centered
          visible={visiblePackClean}
          onOk={() => setVisiblePackClean(false)}
          onCancel={() => setVisiblePackClean(false)}
          width={1000}
        >
          <p>
            Utilisation de produits professionnels et adaptés à la surface traitée.

          </p>
        </Modal>
        <Modal
          title="PACK CLEAN +"
          centered
          visible={visiblePackCleanPlus}
          onOk={() => setVisiblePackCleanPlus(false)}
          onCancel={() => setVisiblePackCleanPlus(false)}
          width={1000}
        >
          <p>
            Nous reprenons exactement les mêmes prestations que dans le PACK CLEAN tout en rajoutant l’entretien des textiles : moquettes, canapés , fauteuils.
            Nous traiterons cette espèce par technique d’aspiration injectrice extractive.
          </p>
        </Modal>
        <Modal
          title="PACK DESINFECTION"
          centered
          visible={visibleDesinfection}
          onOk={() => setVisibleDesinfection(false)}
          onCancel={() => setVisibleDesinfection(false)}
          width={1000}
        >
          <p>
            1. Regroupe toutes les prestations visant à réduire les contaminations microbiennes en
            éliminant efficacement tous les microorganismes présents .
          </p>
          <p>
            2. Maximise les chances de travailler dans un environnement sain avec l’amélioration de la
            qualité de l’air intérieur
          </p>
          <p>
            3. A titre préventif, désinfecter ses locaux prouve votre intérêt concernant la santé de vos
            employés, collaborateurs et clients. L’article L.4121-1 du code du travail vous incite à veiller
            sur la santé physique et mentale de vos employés.
          </p>
          <p>
            4. L’agrément CERTIBIOCIDE délivré par le ministère de l’écologie et du développement durable
            vous garantira une prestation de qualité. Nous respectons un protocole rigoureux fixé par le
            gouvernement. L’utilisation des produits requiert une durée d’application suivi d’un délai de
            réentrée.
          </p>
          <p>
            Ce PACK complet optimise le ralentissement de la propagation des virus et bactéries et
            permet ainsi de prévenir les risques de transmission de maladies.
          </p>
          <p>
            POSSIBILITÉ D’EFFECTUER LA PRESTATION SEULE.
          </p>
          <p>
            Notre société proposera des
            tarifs dégressifs en fonction de la fréquence de passage( prestation unique ou abonnement mensuel/
            trimestriel/annuel).
          </p>
          <p>
            Nous vous remettrons un certificat de désinfection de vos locaux qui prouvera que vous avez fait
            appel à NEF HYGIÈNE qui vous garantit une prestation qualitative et conforme à ses engagements.
          </p>
        </Modal>
        <Modal
          title="PACK 3D"
          centered
          visible={visible3d}
          onOk={() => setVisible3d(false)}
          onCancel={() => setVisible3d(false)}
          width={1000}
        >
          <p>
            En plus d’être expert en désinfection , notre entreprise est spécialisé contre les rongeurs et insectes.
            Nous agissons par principe de lutte raisonnée. De ce fait nous utiliserons des méthodes en respectant l’écologie et l’économie. 
          </p>
          <p>  
            Ces techniques se voudront non dangereuse pour l’Homme et l’environnement, avec à long terme , la diminution de l’application de ces produits en ne les utilisant
            qu’en dernier lieu et à minima.
          </p>
          <p>
            NEF HYGIÈNE interviendra dans les plus bref délais de façon efficace et ponctuelle.  tout d’abord nous effectuerons un diagnostic afin d’avoir une vision globale du site puis nous déterminerons à quelle(s) espèce(s) nous avons à faire .
          </p>
          <p>
            Ensuite nous mettrons en place un plan précis afin de pouvoir agir sur du long terme contre ces nuisibles.
          </p>
        </Modal>
        <SentencePrestationWrap>
          <SentencePrestation>Il est de notre devoir commun d'entretenir un lieu <span style={{ fontWeight: "900"}}>PROPRE ET DÉSINFECTER.</span></SentencePrestation>
          <SentencePrestation><span style={{ fontWeight: "900"}}>NEF HYGIÈNE</span> offre bien plus qu'un nettoyage classique, demander <span style={{ fontWeight: "900"}}>NEF HYGIÈNE</span> c'est aussi une qualité supérieure à des prix avantageux.</SentencePrestation>
        </SentencePrestationWrap>
      </InfoContainer>
    </>
  )
}

export default PrestationSection;