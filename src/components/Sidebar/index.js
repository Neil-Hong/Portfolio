import React from 'react'
import { SidebarContainer, Icon, CloseIcon, SidebarLink, SidebarMenu, SidebarWrapper } from './SidebarElement'

const Sidebar = ({isOpen, toggle}) => {
  return (
    <>
        <SidebarContainer isOpen={isOpen} onClick={toggle}>
            <Icon onClick={toggle}>
                <CloseIcon />
            </Icon>
            <SidebarWrapper>
                <SidebarMenu>
                    <SidebarLink to = "whatido">What I Do</SidebarLink>
                    <SidebarLink to = "aboume">About Me</SidebarLink>
                    <SidebarLink to = "mywork">My Works</SidebarLink>
                </SidebarMenu>

            </SidebarWrapper>
        </SidebarContainer>
    </>
  )
}

export default Sidebar