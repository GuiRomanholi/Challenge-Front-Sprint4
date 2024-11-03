import Link from 'next/link'
import React from 'react'
import Image from "next/image";

export default function Header() {
  return (
    <header>
            <nav className='navBar'>
                <div className='logo'>
                    <Link href="/">
                        {<Image src="/img/logo_ccs.png" alt="Logo_Concert" width={190} height={50}/>}
                    </Link>
                </div>
                <div className='menu'>
                    <ul>
                        <li>
                            <Link href="/">Home</Link>
                        </li>
                        <li>
                            <Link href="/sobre">Sobre nós</Link>
                        </li>
                        <li>
                            <Link href="/fale">Fale conosco</Link>
                        </li>
                        <li>
                            <Link href="/faq">FAQ</Link>
                        </li>
                        <li className="login">
                            <Link href="/login">Iniciar Sessão</Link>
                        </li>
                    </ul>
                </div>
            </nav>
        </header>
  )
}
