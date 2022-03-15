import React, { useState } from 'react'
import { HeroContainer, HeroBg, VideoBg, HeroH1, HeroP, HeroBtnWrapper, ArrowForward, ArrowRight, HeroContent } from './HeroElement'
import Video from "../../videos/video.mp4"
import { Button } from '../ButtonElement'

export const HeroSection = () => {

    const [hover, setHover] = useState(false)

    const onHover = () => {
        setHover(!hover)
    }

  return (
    <>
        <HeroContainer id={"home"}>
            <HeroBg>
                <VideoBg autoPlay loop muted src={Video} type="video/mp4"></VideoBg>
            </HeroBg>
            <HeroContent>
                <HeroH1>Hi, I'm Neil</HeroH1>
                <HeroP>
                    I'm a Front-end Developer
                </HeroP>
                <HeroBtnWrapper>
                    <Button 
                    to="aboutme" 
                    onMouseEnter={onHover} 
                    onMouseLeave={onHover} 
                    primary={"true"}
                    dark={"true"}
                    smooth={true} duration={500} spy={true} exact={"true"} offset={-70}
                    >About Me{hover ? <ArrowForward />:<ArrowRight />}</Button>
                </HeroBtnWrapper>
            </HeroContent>
        </HeroContainer>
    </>
  )
}
