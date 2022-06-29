import React, { useState } from 'react'
import { Button } from '../ButtonElement'
import {
    HeroContainer,
    HeroContent,
    HeroH1,
    HeroP,
    HeroBtnWrapper,
    NavBtn,
    NavBtnLink,
    Img,
    ImgBackground,
    Column1,
    Column2
} from './heroSectionElements';

const HeroSection = () => {

    const [hover, setHover] = useState(false);
    const onHover = () => {
        setHover(!hover)
    }

    return (
        <>
            <ImgBackground />
            <HeroContainer>

                <Column1>
                    <HeroContent>
                        <HeroP>
                            METTEZ L’ACCENT SUR LA PROPRETÉ AVEC DES PRESTATIONS DE CHOIX ET DE QUALITÉ
                        </HeroP>
                        <HeroH1>NEF HYGIÈNE<span style={{color:"#aeca53"}}>.</span></HeroH1>
                        <HeroBtnWrapper />
                        <NavBtn>
                            <NavBtnLink to="/contact">Contacter</NavBtnLink>
                        </NavBtn>
                    </HeroContent>
                </Column1>
                <Column2>
                </Column2>
            </HeroContainer>
        </>
    )
}

export default HeroSection;