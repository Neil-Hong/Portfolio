import React from "react";
import img2 from "../../images/react-travel.png";
import img3 from "../../images/football-draw.png";
import img5 from "../../images/bank-console.png";
import img4 from "../../images/kidsonline-shopping.png";
import img6 from "../../images/E-commerce.png";
import img1 from "../../images/Ipomoea.png";
import {
    ServicesConainer,
    ServicesCard,
    ServicesH1,
    ServicesH2,
    ServicesIcon,
    ServicesP,
    ServicesWrapper,
} from "./ServicesElement";

const Services = () => {
    const project1 = () => {
        window.open("https://www.ipomoea.xyz/");
    };

    const project2 = () => {
        window.open("http://www.github.com/Neil-Hong/React-Travel");
    };

    const project3 = () => {
        window.open("http://www.github.com/Neil-Hong/football-draw-system");
    };

    const project4 = () => {
        window.open("https://github.com/Neil-Hong/Kids-Online-Shopping");
    };
    const project5 = () => {
        window.open("http://www.github.com/Neil-Hong/Bank-management-system");
    };
    const project6 = () => {
        window.open("https://github.com/Neil-Hong/E-Commerce");
    };

    return (
        <>
            <ServicesConainer id={"mywork"}>
                <ServicesH1>Projects</ServicesH1>
                <ServicesWrapper>
                    <ServicesCard onClick={project1}>
                        <ServicesIcon src={img1} />
                        <ServicesH2>Ipomoea Homepage</ServicesH2>
                        <ServicesP>Redesigned & Developed homepage for a start-up company.</ServicesP>
                    </ServicesCard>
                    <ServicesCard onClick={project2}>
                        <ServicesIcon src={img2} />
                        <ServicesH2>React Travel</ServicesH2>
                        <ServicesP>
                            This website is a small travel website. Users can choose their favourite travel routes on
                            this website.
                        </ServicesP>
                    </ServicesCard>
                    <ServicesCard onClick={project3}>
                        <ServicesIcon src={img3} />
                        <ServicesH2>Football Draw System</ServicesH2>
                        <ServicesP>
                            This website is a simple draw system, it imitates the UEFA Champions League Quarter Final
                            draw scenario.{" "}
                        </ServicesP>
                    </ServicesCard>
                    <ServicesCard onClick={project4}>
                        <ServicesIcon src={img4} />
                        <ServicesH2>Kids Online Shopping</ServicesH2>
                        <ServicesP>
                            This website is a simple online shopping website. It was developed in React framework with
                            Bootstrap elements.
                        </ServicesP>
                    </ServicesCard>
                    <ServicesCard onClick={project5}>
                        <ServicesIcon src={img5} />
                        <ServicesH2>Bank Console System</ServicesH2>
                        <ServicesP>This is a simple console bank management system. </ServicesP>
                    </ServicesCard>
                    <ServicesCard onClick={project6}>
                        <ServicesIcon src={img6} />
                        <ServicesH2>E-commerce</ServicesH2>
                        <ServicesP>
                            This website is a simple online shopping website. It was developed in React framework with
                            Bootstrap elements.{" "}
                        </ServicesP>
                    </ServicesCard>
                </ServicesWrapper>
            </ServicesConainer>
        </>
    );
};

export default Services;
