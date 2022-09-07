import styled from "styled-components";

export const ServicesConainer = styled.div`
    height: 900px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background: #010606;

    @media screen and (max-width: 1024px) {
        height: 1100px;
    }

    @media screen and (max-width: 675px) {
        height: 1900px;
    }
`;
export const ServicesWrapper = styled.div`
    /* margin: 0 auto; */
    width: 70%;
    display: flex;
    flex-wrap: wrap;
    /* display: grid; */
    /* grid-template-columns: 1fr 1fr 1fr; */
    align-items: center;
    /* grid-gap: 16px; */
    /* padding: 0 50px; */
    margin-left: auto;
    margin-right: auto;

    @media screen and (max-width: 1600px) {
        width: 80%;
    }
    @media screen and (max-width: 1350x) {
        width: 90%;
    }
    @media screen and (max-width: 1300px) {
        width: 100%;
    }
    @media screen and (max-width: 1151px) {
        display: grid;
        grid-template-columns: 1fr 1fr 1fr;
    }
    @media screen and (max-width: 1024px) {
        grid-template-columns: 1fr 1fr;
    }
    @media screen and (max-width: 675px) {
        grid-template-columns: 1fr;
        grid-row-gap: 0px;
        grid-template-rows: repeat(6, 300px);
    }
`;
export const ServicesCard = styled.div`
    background: #fff;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
    border-radius: 10px;
    max-height: 340px;
    max-width: 340px;
    padding: 30px;
    box-shadow: 0 1px 3px rgba(0, 0, 0, 0.2);
    transition: all 0.2s ease-in-out;
    margin-left: auto;
    margin-right: auto;
    margin-bottom: 10px;

    &:hover {
        transform: scale(1.02);
        transition: all 0.2s ease-in-out;
        cursor: pointer;
    }

    @media screen and (max-width: 1151px) {
        scale: calc(0.9);
    }

    @media screen and (max-width: 685px) {
        scale: calc(0.8);
    }
    @media screen and (max-width: 280px) {
        scale: calc(0.7);
        margin-left: -30px;
    }
`;
export const ServicesIcon = styled.img`
    height: 250px;
    width: 300px;
    margin-bottom: 10px;
`;
export const ServicesH1 = styled.h1`
    font-size: 2.5rem;
    color: #fff;
    margin-bottom: 64px;

    @media screen and (max-width: 1024px) {
        margin-bottom: 20px;
    }

    @media screen and (max-width: 480px) {
        font-size: 2rem;
        margin-bottom: 30px;
    }
`;
export const ServicesH2 = styled.h2`
    font-size: 1rem;
    margin-bottom: 10px;
`;
export const ServicesP = styled.p`
    font-size: 1rem;
    text-align: center;
`;
