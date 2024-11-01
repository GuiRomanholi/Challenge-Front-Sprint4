"use client"
import { useParams } from 'next/navigation';
import React from 'react';

export default function ChatbotPage() {
  const { cpf } = useParams();

  return (
    <div className="lo-chatbotContainer flex items-center justify-center h-screen">
      <h1 className="text-3xl font-bold">Bem-vindo ao Chatbot</h1>
      <p className="text-lg">Seu CPF: {cpf}</p>
      {/* Adicione aqui a lógica e componentes do chatbot */}
    </div>
  );
}
