import React, { useState, useEffect } from 'react'
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
    Column2,
    IconWrap
} from './heroSectionElements';

import { animateScroll as scroll } from 'react-scroll';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAnglesDown } from '@fortawesome/free-solid-svg-icons'

const HeroSection = () => {

    const [hover, setHover] = useState(false);

    const onHover = () => {
        setHover(!hover)
    }

    const [scrollNav, setScrollNav] = useState(false);

    const changeNav = () => {
        if (window.scrollY >= 80) {
            setScrollNav(true)
        } else {
            setScrollNav(false)
        }
    }

    useEffect(() => {
        window.addEventListener('scroll', changeNav)
    }, [])

    const toggleHome = () => {
        scroll.scrollToTop();
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
                        <HeroH1>NEF HYGIÈNE<span style={{color:"#FFF"}}>.</span></HeroH1>
                        <HeroBtnWrapper />
                        <NavBtn>
                            <NavBtnLink to="/contact">Contacter</NavBtnLink>
                        </NavBtn>
                    </HeroContent>
                </Column1>
                <Column2>
                </Column2>
                <IconWrap scrollNav={scrollNav}>
                    <FontAwesomeIcon style={{ color: "#FFF", width: "100%", height: "100%"}} icon={faAnglesDown} />
                </IconWrap>
            </HeroContainer>
        </>
    )
}

export default HeroSection;