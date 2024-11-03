"use client";
import { useParams } from 'next/navigation';
import React, { useEffect } from 'react';

interface WatsonAssistantInstance {
  render: () => Promise<void>;
}

interface WatsonAssistantChatOptions {
  integrationID: string;
  region: string;
  serviceInstanceID: string;
  onLoad: (instance: WatsonAssistantInstance) => Promise<void>;
  clientVersion?: string;
}

declare global {
  interface Window {
    watsonAssistantChatOptions: WatsonAssistantChatOptions;
    watsonChatLoaded?: boolean;
  }
}

export default function ChatbotPage() {
  const { cpf } = useParams() as { cpf: string };

  useEffect(() => {
    if (!window.watsonChatLoaded) {
      window.watsonAssistantChatOptions = {
        integrationID: "87c93e66-d117-44a4-b1d5-6b1fbb280832",
        region: "au-syd",
        serviceInstanceID: "3df00b44-ae76-44d9-a524-97f0daf27e9d",
        onLoad: async (instance: WatsonAssistantInstance) => {
          await instance.render();
        }
      };

      const script = document.createElement('script');
      const clientVersion = window.watsonAssistantChatOptions.clientVersion || 'latest';
      script.src = `https://web-chat.global.assistant.watson.appdomain.cloud/versions/${clientVersion}/WatsonAssistantChatEntry.js`;
      script.async = true;
      document.head.appendChild(script);

      window.watsonChatLoaded = true;
    }
  }, []);

  return (
    <div className="lo-chatbotContainer flex flex-col items-center justify-center h-screen p-6 bg-gradient-to-br from-blue-50 to-blue-100">
      <div className="w-full max-w-lg p-8 bg-white rounded-lg shadow-lg transform transition-all duration-300 hover:shadow-2xl">
        <h1 className="text-4xl font-extrabold text-blue-800 mb-4 text-center animate-fadeIn">Bem-vindo ao Chatbot</h1>
        <p className="text-lg text-gray-700 mb-6 text-center animate-fadeIn">Seu CPF: <span className="font-semibold text-blue-600">{cpf}</span></p>
        
        <div className="mt-6 text-center">
          <p className="text-base text-gray-600 mb-3">
            Para começar, clique na <span className="font-semibold text-blue-600">bolinha azul</span> no canto inferior direito da tela.
          </p>
          <p className="text-base text-gray-600 mb-5">
            Siga as instruções que aparecerão no chatbot para iniciar a conversa. Estamos prontos para ajudar!
          </p>
          <p className="text-sm text-gray-500 italic">
            O chatbot será exibido automaticamente assim que você clicar.
          </p>
        </div>
      </div>
    </div>
  );
}
