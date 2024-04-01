import React from 'react'
import { Outlet } from 'react-router-dom'
import { HeaderMenu } from '../../components/HeaderMenu/HeaderMenu'
import { FooterMenu } from '../../components/FooterMenu/FooterMenu'
import { Container } from '@chakra-ui/react'
import { MobileMenu } from '../../components/HeaderMenu/MobileMenu'

export const BasicLayout = () => {
  return (
    <>
      <Container maxWidth={{ sm: 1440, base: 390 }} p={0} m={'0 auto'}>
        <HeaderMenu />
        <Outlet />
        <FooterMenu />
        {/* <MobileMenu toggleMenu={false} /> */}
      </Container>
    </>
  )
}