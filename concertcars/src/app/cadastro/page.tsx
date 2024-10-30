import Link from 'next/link'
import React from 'react'

export default function Cadastro() {
  return (
    <div className='ca-registerContainer'>
      <form id="form-register" className='ca-registerForm'>
        <h2>Cadastro</h2>
        <input
            type="text"
            name="txtCpf"
            id="idCpf"
            className='ca-inputField'
            placeholder="CPF"
            required
        />
        <input
            type="text"
            name="txtConfirmNome"
            id="idConfirmNome"
            className='ca-inputField'
            placeholder="Nome"
            required
        />
        <input
            type="text"
            name="txtEmail"
            id="idEmail"
            className='ca-inputField'
            placeholder="Email"
            required
        />
        <input
            type="text"
            name="txtConfirmTelefone"
            id="idConfirmTelefone"
            className='ca-inputField'
            placeholder="Telefone"
            required
        />
        <button type="submit" className='ca-submitButton'>Cadastrar</button>
        <Link className='ca-loginLink' href={"/login"}>Já possui uma conta? Login</Link>
      </form>
    </div>
  )
}
