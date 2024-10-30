"use client";
import Link from 'next/link';
import { useState } from 'react';

export default function Login() {
  const [showCpf, setShowCpf] = useState(false);

  const toggleCpfVisibility = () => {
    setShowCpf(!showCpf);
  };

  return (
    <div className='lo-loginContainer flex items-center justify-center h-screen'>
      <form id="form-login" className='lo-loginForm bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4'>
        <h2 className='text-2xl font-bold mb-4'>Login</h2>
        <input 
          type="text" 
          name="txtLogin" 
          id="idLogin" 
          className='lo-inputField w-full px-3 py-2 border border-gray-300 rounded mb-4'
          placeholder="Nome" 
          required 
        />
        
        <div className="lo-passwordContainer relative mb-4">
          <input 
            type={showCpf ? "text" : "password"}
            name="txtSenha" 
            id="idSenha" 
            className='lo-inputField w-full px-3 py-2 border border-gray-300 rounded'
            placeholder="CPF" 
            required 
          />
          <span 
            onClick={toggleCpfVisibility}
            className="lo-eyeIcon absolute right-3 top-3 cursor-pointer text-gray-600"
          >
          </span>
        </div>

        <button type="submit" className='lo-submitButton w-full bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded'>
          Entrar
        </button>
        <Link className='lo-createAccountLink block text-center mt-4 text-blue-500 hover:underline' href={"/cadastro"}>
          Criar uma conta
        </Link>
      </form>
    </div>
  );
}
