import React from 'react'
import Image from "next/image";

export default function Sobre() {
  return (
    <div>
      <section className='so-headline'>
        {<Image src="/img/fotoSobreNos02.png" alt="sobre_nos" width={450} height={500}/>}
      </section>      
      <article className='so-article'>
        <div>
          <h1>Sobre nós</h1>
          <p>Somos estudantes da sala 1TDSPM da FIAP e estamos desenvolvendo um projeto inovador que utiliza tecnologia de ponta para simplificar e aprimorar a maneira como os usuários lidam com problemas em seus veículos e solicitam serviços de guincho, oferecendo conveniência, rapidez e transparência, ou seja,  uma experiência completa e satisfatória para pessoas com problemas em seus veículos e resolvem utilizar nossa aplicação. </p>
        </div>
      </article>
      <section className='so-section2'>
        <h2>Nosso Time</h2>
        <div className='so-time'>
          <div className='so-card'>
            {<Image src="/img/foto_cristan.png" alt="cristian_foto" width={100} height={100}/>}
            <h3>Cristian Caja</h3>
            <p>RM: 558502</p>
            <p><a href="https://github.com/cristianrcaja" target="_blank" >GitHub</a></p>
          </div>
          <div className='so-card'>
            {<Image src="/img/foto_guilherme.png" alt="guilherme_foto" width={100} height={100}/>}
            <h3>Guilherme Romanholi</h3>
            <p>RM: 557462</p>
            <p><a href="https://github.com/GuiRomanholi" target="_blank">GitHub</a></p>
          </div>
          <div className='so-card'>
            {<Image src="/img/foto_igor.png" alt="igor_foto" width={100} height={100}/>}
            <h3>Igor Werneck</h3>
            <p>RM: 558395</p>
            <p><a href="https://github.com/IgorWJ" target="_blank" >GitHub</a></p>
          </div>
        </div>
      </section>
    </div>
  )
}
