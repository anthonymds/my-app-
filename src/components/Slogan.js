import React from "react"
import '../css/App.css';
import iaImg from '../pixelIA.png'

const Slogan = () => {
    return(
        <section className="slogan">
            <div>
                <h2>Unleashing tomorrow's technology, today at our store</h2>
            </div>
            <div className="slogan-2">
                <h4>Compre com a ajuda do Pixel. Sua IA com espírito gamer!</h4>
                
                
                <img src={iaImg} alt="Pixel IA " />
            </div>
        </section>
    )
}

export default Slogan