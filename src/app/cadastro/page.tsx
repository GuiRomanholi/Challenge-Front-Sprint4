"use client";
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import React, { useState, FormEvent } from 'react';

export default function Cadastro() {
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);
  const [success, setSuccess] = useState<boolean>(false);
  const navigate = useRouter();

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setLoading(true);
    setError(null);
    setSuccess(false);

    const formData = new FormData(event.currentTarget);
    const clienteData = {
      cpf: formData.get('txtCpf') as string,
      nome: formData.get('txtConfirmNome') as string,
      email: formData.get('txtEmail') as string,
      telefone: formData.get('txtConfirmTelefone') as string,
    };

    console.log('Dados do cliente:', clienteData);

    try {
      const response = await fetch('/api/cliente', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(clienteData),
      });

      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(`Erro na API: ${errorData.error || response.statusText}`);
      }

      const data = await response.json();
      setSuccess(true);
      console.log('Cliente cadastrado com sucesso:', data);
      navigate.push('/login')
    } catch (error) {
      setError("Deu Erro" + error);
      console.error('Falha na gravação:', error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className='ca-registerContainer'>
      <form id="form-register" className='ca-registerForm' onSubmit={handleSubmit}>
        <h2>Cadastro</h2>
        <input type="text" name="txtCpf" id="idCpf" className='ca-inputField' maxLength={11} placeholder="CPF" required />
        <input type="text" name="txtConfirmNome" id="idConfirmNome" className='ca-inputField' placeholder="Nome" required />
        <input type="email" name="txtEmail" id="idEmail" className='ca-inputField' placeholder="Email" required />
        <input type="tel" name="txtConfirmTelefone" id="idConfirmTelefone" className='ca-inputField' placeholder="Telefone" required />
        <button type="submit" className='ca-submitButton' disabled={loading}>
          {loading ? 'Cadastrando...' : 'Cadastrar'}
        </button>
        {error && <p className='ca-error'>{error}</p>}
        {success && <p className='ca-success'>Cliente cadastrado com sucesso!</p>}
        <Link className='ca-loginLink' href={"/login"}>Já possui uma conta? Login</Link>
      </form>
    </div>
  );
}
