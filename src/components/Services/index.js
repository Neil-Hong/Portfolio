import React from 'react'
import img1 from "../../images/react-travel.png"
import img2 from "../../images/football-draw.png"
import img3 from "../../images/bank-console.png"
import {ServicesConainer, ServicesCard, ServicesH1, ServicesH2, ServicesIcon, ServicesP, ServicesWrapper} from "./ServicesElement"

const Services = () => {

    const project1 = ()=> {
        window.open("http://www.github.com/Neil-Hong/React-Travel")
    }

    const project2 = ()=> {
        window.open("http://www.github.com/Neil-Hong/football-draw-system")
    }

    const project3 = ()=> {
        window.open("http://www.github.com/Neil-Hong/Bank-management-system")
    }

  return (
    <>
        <ServicesConainer id={"mywork"}>
            <ServicesH1>Projects</ServicesH1>
            <ServicesWrapper>
                <ServicesCard onClick={project1}>
                    <ServicesIcon src={img1}/>
                    <ServicesH2>React Travel</ServicesH2>
                    <ServicesP>This website is a small travel website. Users can choose their favourite travel routes on this website.</ServicesP>
                </ServicesCard>
                <ServicesCard onClick={project2}>
                    <ServicesIcon src={img2}/>
                    <ServicesH2>Football Draw System</ServicesH2>
                    <ServicesP>This website is a simple draw system, it imitates the UEFA Champions League Quarter Final draw scenario. </ServicesP>
                </ServicesCard>
                <ServicesCard onClick={project3}>
                    <ServicesIcon src={img3}/>
                    <ServicesH2>Bank Console System</ServicesH2>
                    <ServicesP>This is a simple console bank management system. </ServicesP>
                </ServicesCard>
            </ServicesWrapper>
        </ServicesConainer>
    </>
  )
}

export default Services