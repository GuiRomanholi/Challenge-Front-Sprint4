import React from 'react'
import Image from "next/image";

export default function Fale() {
  return (
    <div>
      <section className='fl-section1'>
        <div className='fl-headline'>
          <h1>Fale conosco!</h1>
            <p>Estamos sempre prontos para ouvir você! Se tiver <strong> dúvidas, sugestões ou críticas, </strong> não hesite em entrar em contato. Nossa equipe retornará o mais breve possível.</p>
        </div>
        <div className='fl-imgHeadline'>
          {<Image src="/img/fotoFaleConosco.png" alt="fale_conosco" width={500} height={400}/>}
        </div>
      </section>

      <section className='fl-section2'>
        <div className='fl-email'>
          {<Image src="/img/icone_email_azul.png" alt="icone_email" width={100} height={100}/>}
          <div className='fl-textEmail'>
            <h2>Email</h2>
            <p>consertcars@gmail.com</p>
          </div>
        </div>
        <div className='fl-whats'>
          {<Image src="/img/icone_whats_azul.png" alt="icone_whats" width={100} height={100}/>}
          <div className='fl-textWhats'>
            <h2>Telefone</h2>
            <p>(11)9 9999 9999</p>
          </div>
        </div>
      </section>

      <article className='fl-article'>
        <h2>Tem alguma dúvida sobre o Consert Cars?</h2>
        <p>Já deu uma olhada nas Dúvidas Frequentes? Pode ser que a sua resposta já esteja por lá!
          Ainda quer falar com a gente? Entre em contato pelo e-mail ou contact-nos por telefone.
        </p>
      </article>
    </div>
  )
}
