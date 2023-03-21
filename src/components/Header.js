import React from "react"
import { Link } from "react-router-dom"

const Header = () => {
    
    return(
        <header className="header">
            <Link className="homeButtonText" to={"/"}><h1>PixelPlaza<span>.</span>ai</h1></Link>
            <nav className="nav" >
                <ul> 
                   
                    <Link to={"/Hardware"}>Hardware</Link>
                        
                    <Link to={"/Perifericos"}>Periféricos</Link>
                
                    <Link to={"/Jogos"}>Jogos</Link>
                
                    <Link to={"/Software"}>Softwares</Link>
                
                    <Link to={"/Celulares"}>Celulares</Link>
                
                    <Link to={"/Tvs"}>Tvs</Link>
                
                    <Link to={"/Computadores"}>Computadores</Link>
                </ul>
                
            </nav>
        
            
            <Link className="prime" to={"/Cadastro"}>Seja Prime</Link>
            
        </header>
    )
}

export default Header