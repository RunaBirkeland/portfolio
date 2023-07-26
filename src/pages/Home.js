import React from "react"
import HeroSection from "../components/HeroSection"
import Cards from "../components/Cards"

function Home() {
    return (
        <div>
            <HeroSection 
                text="Hi! I'm Runa Birkeland.
                A creative designer and developer based in Oslo. 
                Welcome to my portfolio!"
            />
            <Cards />
        </div> 
    )
}

export default Home