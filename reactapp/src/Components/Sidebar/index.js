import React from 'react'
import {
    SidebarContainer,
    CloseIcon,
    Icon,
    SidebarWrapper,
    SidebarMenu,
    SidebarLink,
    SideBtnWrap,
    SidebarRoute
} from './SidebarElements'

const Sidebar = ({ isOpen, toggle }) => {
    return (
        <>
            <SidebarContainer isOpen={isOpen} onClick={toggle}>
                <Icon onClick={toggle}>
                    <CloseIcon />
                </Icon>
                <SidebarWrapper>
                    <SidebarMenu>
                        <SidebarLink to="quisommesnous" onClick={toggle}>Qui sommes nous ?</SidebarLink>
                        <SidebarLink to="services" onClick={toggle}>Nos services</SidebarLink>
                        <SidebarLink to="prestations" onClick={toggle}>Nos prestations</SidebarLink>
                    </SidebarMenu>
                    <SideBtnWrap>
                        <SidebarRoute to='/contact'>Contacter</SidebarRoute>
                    </SideBtnWrap>
                </SidebarWrapper>
            </SidebarContainer>
        </>
    )
}

export default Sidebar
