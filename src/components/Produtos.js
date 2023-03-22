import React from "react";

const Produtos = () => {
    return(
        <>
                <section class="products">
                
                <div class="item">
                    {/* <img class="img-item" src="img/produto.jpg" alt=""> */}
                    <div class="container-desc">
                        <span class="descrition">A GeForce RTX 3060 permite que você jogue os jogos mais recentes usando o poder da Ampere — a arquitetura RTX de 2ª geração da NVIDIA. 
                            Obtenha um desempenho incrível com Ray Tracing Cores e Tensor Cores aprimorados, novos multiprocessadores de streaming e memória G6 de alta velocidade.</span>
                    </div>
                    <span class="price">R$2398,66</span>
                    <div class="delivery">
                        {/* <img src="img/icons8_truck_52px.png" alt=""> */}
                        <span>Frete Grátis</span>
                    </div>
                </div>

                <div class="item">
                    {/* <img class="img-item" src="img/ram1666.jpg" alt=""> */}
                    <div class="container-desc">
                        <span class="descrition">Memória Kingston Fury Beast, 16GB, 5200MHz, DDR5, CL40, Preto - KF552C40BB-16</span>
                    </div>
                    <span class="price">R$659,99</span>
                    <div class="delivery">
                        {/* <img src="img/icons8_truck_52px.png" alt=""> */}
                        <span>Frete Grátis</span>
                    </div>
                </div>

                <div class="item">
                    {/* <img class="img-item" src="img/processadorryzen.jpg" alt=""> */}
                    <div class="container-desc">
                        <span class="descrition">Processador AMD Ryzen 7 5800X, 3.8GHz (4.7GHz Max Turbo), Cache 36MB, Octa Core, 16 Threads, AM4 - 100-100000063WOF</span>
                    </div>
                    <span class="price">R$ 1.779,99</span>
                    <div class="delivery">
                        {/* <img src="" alt=""> */}
                        <span>Entrega Imediata</span>
                    </div>
                </div>

                <div class="item">
                    {/* <img class="img-item" src="img/razermouse2.jpg" alt=""> */}
                    <div class="container-desc">
                        <span class="descrition">Mouse Razer Deathadder Essential</span>
                    </div>
                    <span class="price">R$ 115,00</span>
                    <div class="delivery">
                        {/* <img src="" alt=""> */}
                        <span>Chega Amanhã</span>
                    </div>
                </div>

                <div class="item">
                    {/* <img class="img-item" src="img/monitoraoc.jpg" alt=""> */}
                    <div class="container-desc">
                        <span class="descrition">Monitor Gamer AOC Hero 23.8 Full HD, Wide, 144 Hz, 1ms, FreeSync, HDMI e DisplayPort, IPS, Ajuste de Altura - 24G2/BK</span>
                    </div>
                    <span class="price">R$ 1.339,99</span>
                    <div class="delivery">
                        {/* <img src="img/icons8_truck_52px.png" alt=""> */}
                        <span>(-37 OFF)</span>
                    </div>
                </div>
            </section>
        
        </>
    )
}

export default Produtos