import React from 'react'
import { animateScroll as scroll } from 'react-scroll/modules'
import { FaFacebook, FaInstagram, FaGithub, FaYoutube, FaPhone } from "react-icons/fa"
import { MdEmail } from "react-icons/md"
import {
    FooterContainer,
    FooterWrap,
    FooterLinkWrapper,
    FooterLinkItems,
    FooterLinkTitle,
    FooterLink,
    FooterLinkContainer,
    SocialMedia,
    SocialMediaWrap,
    SocialLogo,
    SocialIcons,
    WebsiteRights,
    SocialIconLink
} from './FooterElement'

const Footer = () => {

    const toggleHome = () => {
        scroll.scrollToTop()
    }
    return (
        <>
            <FooterContainer>
                <FooterWrap>
                    <FooterLinkContainer>
                        <FooterLinkWrapper>
                            <FooterLinkItems>
                                <SocialIconLink href="//www.github.com/Neil-Hong" target="_blank" aria-label="Github">
                                    <FaGithub />&nbsp;&nbsp;&nbsp;www.github.com/Neil-Hong
                                </SocialIconLink>
                                <SocialIconLink target="_blank" aria-label="Phone">
                                    <FaPhone />&nbsp;&nbsp;&nbsp;0451-630-300
                                </SocialIconLink>
                                <SocialIconLink href="//www.gmail.com" target="_blank" aria-label="Email">
                                    <MdEmail />&nbsp;&nbsp;&nbsp;neilhong0422@gmail.com
                                </SocialIconLink>
                            </FooterLinkItems>
                        </FooterLinkWrapper>
                    </FooterLinkContainer>
                    <SocialMedia>
                        <SocialMediaWrap>
                            <SocialLogo to="/" onClick={toggleHome}>Home</SocialLogo>
                            <WebsiteRights>© {new Date().getFullYear()} All rights reserved</WebsiteRights>
                            <SocialIcons>
                                <SocialIconLink href="/" target="_blank" aria-label="Facebook">
                                    <FaFacebook />
                                </SocialIconLink>
                                <SocialIconLink href="/" target="_blank" aria-label="Instagram">
                                    <FaInstagram />
                                </SocialIconLink>
                                <SocialIconLink href="//www.youtube.com" target="_blank" aria-label="Youtube">
                                    <FaYoutube />
                                </SocialIconLink>
                                <SocialIconLink href="//www.github.com/Neil-Hong" target="_blank" aria-label="Github">
                                    <FaGithub />
                                </SocialIconLink>
                            </SocialIcons>
                        </SocialMediaWrap>
                    </SocialMedia>
                </FooterWrap>
            </FooterContainer>
        </>
    )
}

export default Footer