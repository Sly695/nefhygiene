import React from 'react';
import { animateScroll as scroll } from 'react-scroll';
import { FaFacebook, FaInstagram, FaYoutube } from 'react-icons/fa';
import {
    FooterContainer,
    FooterWrap,
    FooterLinksWrapper,
    FooterLinksContainer,
    FooterLinksItems,
    FooterLinksTitle,
    FooterLink,
    SocialMedia,
    SocialLogo,
    SocialIconLink,
    SocialMediaWrap,
    WebsiteRights,
    SocialIcons,
    Img
} from './footerElements';

import img1 from '../../../src/image/certibiocide.png'
import img2 from '../../../src/image/ecologieministere.png'



const Footer = () => {

    const toggleHome = () => {
        scroll.scrollToTop();
    }

    return (
        <FooterContainer>
            <FooterWrap>
                <FooterLinksContainer>
                    <FooterLinksWrapper>
                        <Img src={img2} />
                        <Img src={img1} />
                    </FooterLinksWrapper>
                </FooterLinksContainer>
                <SocialMedia>
                    <SocialMediaWrap>
                        <SocialLogo to='/' onClick={toggleHome}>
                            NEF HYGIÈNE
                        </SocialLogo>
                        <WebsiteRights>NEF HYGIENE {new Date().getFullYear()} @ All right reserved</WebsiteRights>
                    </SocialMediaWrap>
                </SocialMedia>
            </FooterWrap>
        </FooterContainer>
    )
}

export default Footer