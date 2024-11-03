import Link from 'next/link'
import React from 'react'
import Image from "next/image";

export default function Home() {
  return (
    <main>
      <section className='section1'>
          <div className='headline'>
              <h1>Consertos <strong>rápidos</strong>,</h1>
              <h1>com a <strong>força da IA!</strong></h1>
              <p>Descubra a nova era dos consertos automotivos com nossa <strong>tecnologia de IA</strong>. Experimente um serviço<strong> rápido, preciso e confiável</strong>, feito sob medida para as necessidades do seu carro. Comece agora e sinta a diferença!</p>
              <Link className='a' href="/login">Começar</Link>
          </div>
          <div className='imgHeadline'>
            {<Image src="/img/fotohome1-ai.png" alt="foto_home" width={450} height={400}/>}
          </div>
      </section>

      <section className='section2'>
          <h2>Tudo o que seu carro precisa <strong>na palma da sua mão!</strong> </h2>
          <div className='servicos'>
              <div className='card'>
                {<Image src="/img/icone_relatorio_azul.png" alt="foto_relarotio_azul" width={100} height={100}/>}
                  <h3><strong>Relatórios de problemas</strong></h3>
                  <p>Os usuários podem descrever os problemas encontrados em seus veículos através de <strong>texto, voz ou até mesmo fotos</strong>. O <strong> sistema de IA </strong> analisa as informações fornecidas e oferece sugestões ou soluções preliminares.</p>
              </div>
              <div className='card'>
                {<Image src="/img/icone_gps_azul.png" alt="icon_gps_azul" width={100} height={100}/>}
                  <h3><strong>Localização GPS</strong></h3>
                  <p>O aplicativo utiliza a <strong> localização GPS do dispositivo móvel </strong> do usuário para identificar sua localização exata. Isso permite que o serviço, em caso de guincho, seja despachado para o local correto com rapidez e precisão.</p>
              </div>
              <div className='card'>
                {<Image src="/img/icone_oficina_azul.png" alt="foto_oficina_azul" width={100} height={100}/>}
                  <h3><strong>Parceria com oficinas</strong></h3>
                  <p>O App interage com uma <strong> rede de oficinas mecânicas e serviços de guincho parceiros</strong>. O sistema pode sugerir oficinas próximas com base na localização do usuário e na disponibilidade de serviços necessários.</p>
              </div>
          </div>
      </section>
      <article className='h-article'>
          <h2>O que é o Consert Cars?</h2>
          <p>Somos uma aplicação móvel inovador que utiliza tecnologia de ponta para simplificar e aprimorar a maneira como os usuários lidam com problemas em seus veículos. Utilizando inteligência artificial, via chatbot, ajuda os usuários a relatar problemas em seus carros e solicitar serviços de guincho de forma rápida e eficiente.</p>
      </article>
    </main>
  )
}
