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
              Désinfection de locaux avec produit virucide qui détruit 99,99%
              des bactéries et demeure le plus efficace pour l'élimination
              de virus
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
          <Details onClick={() => setVisible3d(true)}>En savoir plus</Details>
        </Card>

      </CardWrapper>)
  } else {
    displayCard = (
      <Carousel dotPosition="top" autoplay style={{ fontFamily: "Verdana", display: "flex", margin: "auto", width: "70%", height: "100%" }}>
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
              Désinfection de locaux avec produit virucide qui détruit 99,99%
              des bactéries et demeure le plus efficace pour l'élimination
              de virus
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
        <Modal
          title="PACK CLEAN"
          centered
          visible={visiblePackClean}
          onOk={() => setVisiblePackClean(false)}
          onCancel={() => setVisiblePackClean(false)}
          width={1000}
        >
          <p>Nettoyage de surface : désinfection des surfaces de contact (ordinateurs, souris, clavier, interrupteur, rampe, poignée).</p>
          <p>
            Cette prestation comprend le nettoyage des sols , du
            bas des murs ainsi que du mobilier par dépoussiérage puis vidage des corbeilles et poubelles.
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
            Nous reprenons les 2 premiers pack en rajoutant la désinfection de locaux .Nous Désinfectons par
            nébulisation/ pulvérisation avec produit virucide NF EN 14476 qui détruit 99,99% des bactéries et
            demeure le plus efficace pour l’élimination de virus. Nous pouvons aussi vous fournir les produits
            indispensables de type masques, lingettes et gel hydroalcoolique.Notre société proposera des tarifs
            dégressifs en fonction de la fréquence de passage( prestation unique ou abonnement mensuel/
            trimestriel/annuel).
          </p>
          <p>
            Nous vous remettrons un certificat de désinfection de vos locaux qui prouvera que vous avez fait
            appel à NEF HYGIÈNE qui vous garantit une prestation qualitative et conforme à ses engagements.
            Pourquoi opter pour ce PACK ?
          </p>
          <p>
            1. Regroupe toutes les prestations visant à réduire les contaminations microbiennes en
            éliminant efficacement touts les micro organismes présents.
          </p>
          <p>
            2. Maximise les chances de travailler dans un environnement sain avec l’amélioration de la
            qualité de l’air intérieur
          </p>
          <p>
            3. A titre préventif , désinfecter ses locaux prouve votre intérêt concernant la santé de vos
            employés, collaborateurs et clients . L’article L.4121-1 du code du travail vous incite à veiller
            sur la santé physique et mentale de vos employés.
          </p>
          4. L’agrément CERTIBIOCIDE délivré par le ministère de l’écologie et du développement durable
          vous garantira une prestation de qualité.Nous respectons un protocole rigoureux fixé par le
          gouvernement . L’utilisation des produits requiert une durée d’application suivi d’un délai de
          ré-entrée.
          <p>
            NEF HYGIÈNE vous prêtera main forte dans le nettoyage et la désinfection de vos locaux .
            Ce PACK optimisera vos chances de stopper la propagation des virus et bactéries ou du moins
            de prévenir les risques d’infections. Nous ne savons pas de quoi est fait demain c’est
            pourquoi nous prenons toutes ces menaces avec le plus grand des sérieux .
          </p>
          <p>
            NEF HYGIÈNE offre bien plus qu’un nettoyage classique, il en va de votre santé et de votre portefeuille !
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
            La notion de 3D englobent trois grands axes :
          </p>
            <ul>
              <li>Désinfection</li>
              <li>Dératisation</li>
              <li>Désinsectisation</li>
            </ul>
          <p>
            En plus d’être expert en désinfection , notre entreprise est spécialisé contre les rongeurs et insectes.
            Nous agissons par principe de lutte raisonnée. De ce fait nous utiliserons des méthodes en respectant l’écologie et l’économie. Ces techniques se voudront non dangereuse pour l’Homme et l’environnement, avec à long terme , la diminution de l’application de ces produits en ne les utilisant
            qu’en dernier lieu et à minima.
            NEF HYGIÈNE interviendra dans les plus bref délais de façon efficace et ponctuelle.  tout d’abord nous effectuerons un diagnostic afin d’avoir une vision globale du site puis nous déterminerons à quelle(s) espèce(s) nous avons à faire .
            Ensuite nous mettrons en place un plan précis afin de pouvoir agir sur du long terme contre ces nuisibles.
          </p>
        </Modal>
      </InfoContainer>
    </>
  )
}

export default PrestationSection;