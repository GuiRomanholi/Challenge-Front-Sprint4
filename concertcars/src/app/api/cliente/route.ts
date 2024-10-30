import { NextResponse } from "next/server";
import { TipoCliente } from "@/types";

export async function POST(request: Request) {
    try {
        const { cpf, nome, email, telefone } = await request.json();
        
        console.log("Dados recebidos:", { cpf, nome, email, telefone });

        if (!cpf || !nome || !email || !telefone) {
            throw new Error("Todos os campos são obrigatórios.");
        }

        const novoCliente: TipoCliente = { cpf, nome, email, telefone };

        const response = await fetch('http://localhost:8080/concertcars/clientes', { 
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(novoCliente),
        });

        if (!response.ok) {
            let errorData;
            try {
                errorData = await response.json();
            } catch {
                errorData = { message: await response.text() };
            }
            console.error("Erro na API externa:", errorData);
            throw new Error(errorData.message || response.statusText);
        }

        const data = await response.json();
        return NextResponse.json(data, { status: 201 });

    } catch (error: any) {
        console.error("Erro na função POST:", error.message || error);
        return NextResponse.json({ error: "Falha na gravação: " + error.message }, { status: 500 });
    }
}
