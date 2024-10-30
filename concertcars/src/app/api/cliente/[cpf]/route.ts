import { NextResponse } from "next/server";
import { TipoCliente } from "@/types";

export async function GET(request: Request, { params }: { params: { cpf: string } }) {
    try {
        // Verifique se o CPF está presente nos parâmetros
        const { cpf } = params;
        if (!cpf) {
            return NextResponse.json({ error: "CPF não fornecido." }, { status: 400 });
        }

        // Fazendo uma requisição GET para a API externa
        const response = await fetch(`http://localhost:8080/concertcars/clientes/${cpf}`, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
            },
        });

        // Verifica se a resposta da API foi bem-sucedida
        if (!response.ok) {
            const errorData = await response.json();
            console.error("Erro na API externa:", errorData); // Log da resposta de erro
            throw new Error(`Erro na API: ${errorData.error || response.statusText}`);
        }

        // Obtém a resposta da API
        const produto: TipoCliente = await response.json();

        // Retornar o produto encontrado
        return NextResponse.json(produto);
    } catch (error) {
        console.error("Erro ao buscar cliente:", error); // Log do erro
        return NextResponse.json({ error: "Erro ao acessar os dados." }, { status: 500 });
    }
}
