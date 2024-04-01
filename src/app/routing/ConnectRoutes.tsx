import React from 'react'
import { Routes, Route, Outlet } from 'react-router-dom'
import { MainHomePage } from '../../components/MainHomePage'
import { BasicLayout } from './BasicLayout'
import { TestLayout } from '../../components/TestLayout'

export const ConnectRoutes = () => {
    return (
        <>
            <Routes>
                <Route
                    element={
                        <>
                            <BasicLayout />
                        </>
                    }
                >
                    <Route path='/' element={<MainHomePage />} />
                    <Route path='/test' element={<TestLayout />} />
                    {/* <Route path='/my-account' element={<HeaderMenu />} />
                    <Route path='/my-account/:contractId' element={<HeaderMenu />} />
                    <Route path='/:contractId/:tokenId' element={<HeaderMenu />} /> */}
                </Route>
            </Routes>

        </ >
    )
}
