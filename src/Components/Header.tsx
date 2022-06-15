import React, { Component } from 'react'
import { Container } from "./Headerstyle";
import { Navbar } from "./Navbar";

export const Header = () => {
    return (
        <>
        <Container>
            <Navbar/>
        </Container>
    </>
    )
}

export default Header