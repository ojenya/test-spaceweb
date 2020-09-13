import React from 'react'

import {Main,Footer,Card}  from '../components'

const Home = (props) => {
        const{list} = props
    return (
        <>
        <Main list={list}/>
        <Footer/>
        </>
    )
}



export default Home
