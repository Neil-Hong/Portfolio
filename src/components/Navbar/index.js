import React, { useEffect, useState } from 'react'
import { IconContext } from 'react-icons'
import { animateScroll as scroll } from 'react-scroll/modules'
import { Nav, NavbarContainer, NavLogo, NavLinks, MobileIcon, NavItem, NavMenu, NavBtn, NavBtnLink } from './NavbarElement'
import { FaBars } from "react-icons/fa"
import logo from "../../images/logo.jpg"

const Navbar = ({toggle}) => {

    const [scrollNav, setScrollNav] = useState(false)

    const changeNav = () =>{
        if(window.scrollY >= 80){
            setScrollNav(true)
        }else{
            setScrollNav(false)
        }
    }

    const toggleHome = () => {
        scroll.scrollToTop()
    }

    useEffect(()=>{
        window.addEventListener("scroll", changeNav)
    },[])

    return (
        <>
        <IconContext.Provider value={{color:"#fff"}}>
            <Nav scrollNav={scrollNav}>
                <NavbarContainer>
                    <NavLogo onClick={toggleHome} src={logo}></NavLogo>
                    <MobileIcon onClick={toggle}>
                        <FaBars />
                    </MobileIcon>
                    <NavMenu>
                        <NavItem>
                            <NavLinks to="whatido" smooth={true} duration={500} spy={true} exact={"true"} offset={-80}>What I Do</NavLinks>
                        </NavItem>
                        <NavItem>
                            <NavLinks to="aboutme" smooth={true} duration={500} spy={true} exact={"true"} offset={-80}>About Me</NavLinks>
                        </NavItem>
                        <NavItem>
                            <NavLinks to="mywork" smooth={true} duration={500} spy={true} exact={"true"} offset={-80}>My Work</NavLinks>
                        </NavItem>
                    </NavMenu>

                </NavbarContainer>
            </Nav>
        </IconContext.Provider>
        </>
    )
}

export default Navbar