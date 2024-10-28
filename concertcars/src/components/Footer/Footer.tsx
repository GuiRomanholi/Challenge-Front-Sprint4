import React from 'react'
import Image from "next/image";
import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="footer">
            <div className="footerContainer">
                <ul className="footerMenu">
                    <li className="logoFooter">
                        <Link href={"/"}>
                            {<Image src="/img/logo_ccs_branco.png" alt="Logo_Concert_Branco" width={200} height={200}/>}
                        </Link>
                    </li>
                    <p className="barraSeparacao">|</p>
                    <li>
                        <a href="https://github.com/GuiRomanholi/Challenge-Front-Sprint4" target="_blank" rel="noopener noreferrer">
                            {<Image src="/img/logo_github_branco.png" alt="Github_Branco" width={200} height={200}/>}
                        </a>
                    </li>
                    <li>
                        <a href="https://www.instagram.com/concertcars_of" target="_blank" rel="noopener noreferrer">
                            {<Image src="/img/logo_instagram_branco.png" alt="intstagram_logo" width={200} height={200}/>}
                        </a>
                    </li>
                </ul>
            </div>
            <p>&copy; 2024 Consert Cars. Todos os direitos reservados.</p>
        </footer>
  )
}
