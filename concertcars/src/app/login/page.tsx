"use client";
import Link from 'next/link';
import { useState } from 'react';

export default function Login() {
  const [showCpf, setShowCpf] = useState<boolean>(false);
  const [cpf, setCpf] = useState<string>('');
  const [error, setError] = useState<string | null>(null);
  const [success, setSuccess] = useState<string | null>(null);

  const toggleCpfVisibility = (): void => {
    setShowCpf(!showCpf);
  };

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>): Promise<void> => {
    event.preventDefault();
    setError(null);
    setSuccess(null);

    try {
      const response = await fetch(`/api/cliente/${cpf}`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
    });

      if (!response.ok) {
        throw new Error('CPF não encontrado ou erro ao acessar a API');
      }

      const cliente = await response.json();
      if (cliente.cpf != null) {

        setSuccess('Acesso liberado!');
        console.log('Cliente encontrado:', cliente);

      } else {
        throw new Error('Cliente não encontrado');
      }
    } catch (err) {
      setError("Erro" + err);
      console.error('Erro ao tentar acessar:', err);
    }
  };

  return (
    <div className='lo-loginContainer flex items-center justify-center h-screen'>
      <form id="form-login" className='lo-loginForm bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4' onSubmit={handleSubmit}>
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
            value={cpf}
            onChange={(e) => setCpf(e.target.value)}
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
        {error && <p className="text-red-500 text-center mt-2">{error}</p>}
        {success && <p className="text-green-500 text-center mt-2">{success}</p>}
        <Link className='lo-createAccountLink block text-center mt-4 text-blue-500 hover:underline' href={"/cadastro"}>
          Criar uma conta
        </Link>
      </form>
    </div>
  );
}
