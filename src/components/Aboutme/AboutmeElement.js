import styled from "styled-components"
import { Link } from "react-router-dom"

export const Container = styled.div`
    min-height: 692px;
    position:fixed;
    bottom:0;
    left:0;
    right:0;
    top:0;
    z-index: 0;
    overflow:hidden;
    background:black;
`
export const FormWrap = styled.div`
    height:100%;
    display: flex;
    flex-direction:column;
    justify-content:center;

    @media screen and (max-width: 480px){
        height:80%;
    }
`
export const Icon = styled(Link)`
    margin-left: 32px;
    margin-top:32px;
    text-decoration:none;
    color:#fff;
    font-weight:700;
    font-size:32px;

    @media screen and (max-width: 480px){
        margin-left: 16px;
        margin-top:8px;
    }
`
export const FormContent = styled.div`
    height:100%;
    display: flex;
    flex-direction:column;
    justify-content:center;

    @media screen and (max-width: 480px){
        padding: 10px;
    }
`
export const Form = styled.div`
    background: white;
    max-width: 1024px;
    height: auto;
    width:100%;
    z-index:1;
    display:grid;
    margin:0 auto;
    padding:80px 32px;
    border-radius:4px;
    box-shadow:0 1px 3px rgba(0,0,0,0.9);

    @media screen and (max-width: 400px){
        padding:32px 32px;
    }
`
export const FormH1 = styled.h1`
    margin-bottom: 40px;
    margin-top: -30px;
    color:black;
    font-size:40px;
    font-weight:400;
    text-align:center;
`
export const FormP = styled.p`
    color:#01bf71;
    font-size:16px;
    line-height:16px;
    font-weight:700;
    letter-spacing:1.4px;
    text-align: justify;
    margin-bottom:16px;
`
export const VideoBg = styled.video`
    width: 100%;
    height:100%;
    -o-object-fit:cover;
    object-fit:cover;
 `
export const HeroBg = styled.div`
    position: absolute;
    top:0;
    right:0;
    bottom:0;
    left:0;
    width:100%;
    height:100%;
    overflow:hidden;
    display: flex;
    flex-direction:column;
`