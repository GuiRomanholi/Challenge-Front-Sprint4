import { NextResponse } from "next/server";
import { TipoCliente } from "@/types";

export async function GET(request: Request, { params }: { params: { cpf: string } }) {
    try {
        const { cpf } = params;
        if (!cpf) {
            return NextResponse.json({ error: "CPF não fornecido." }, { status: 400 });
        }

        const response = await fetch(`http://localhost:8080/concertcars/clientes/${cpf}`, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
            },
        });

        if (!response.ok) {
            const errorData = await response.json();
            console.error("Erro na API externa:", errorData);
            throw new Error(`Erro na API: ${errorData.error || response.statusText}`);
        }

        const produto: TipoCliente = await response.json();

        return NextResponse.json(produto);
    } catch (error) {
        console.error("Erro ao buscar cliente:", error);
        return NextResponse.json({ error: "Erro ao acessar os dados." }, { status: 500 });
    }
}
