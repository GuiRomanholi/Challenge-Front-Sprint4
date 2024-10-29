import Link from 'next/link'
import React from 'react'

export default function Cadastro() {
  return (
    <div className='ca-registerContainer'>
      <form id="form-register" className='ca-registerForm'>
        <h2>Cadastro</h2>
        <input
            type="text"
            name="txtName"
            id="idName"
            className='ca-inputField'
            placeholder="Insira seu nome"
            required
        />
        <input
            type="text"
            name="txtConfirmName"
            id="idConfirmName"
            className='ca-inputField'
            placeholder="Confirme seu nome"
            required
        />
        <input
            type="password"
            name="txtPassword"
            id="idPassword"
            className='ca-inputField'
            placeholder="Insira sua senha"
            required
        />
        <input
            type="password"
            name="txtConfirmPassword"
            id="idConfirmPassword"
            className='ca-inputField'
            placeholder="Confirme sua senha"
            required
        />
        <button type="submit" className='ca-submitButton'>Cadastrar</button>
        <Link className='ca-loginLink' href={"/login"}>Já possui uma conta? Login</Link>
      </form>
    </div>
  )
}
