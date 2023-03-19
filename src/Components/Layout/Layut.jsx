import React from 'react'
import Routers from '../../Routers/Routers'
import Footer from '../Footer/Footer'
import Header from '../Header/Header'

function Layut() {
    return (
        <>
            <Header />
            <div>
                <Routers />
            </div>
            <Footer/>
        </>
    )
}

export default Layut