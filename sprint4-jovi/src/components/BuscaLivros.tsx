
import { useState, type FormEvent } from "react";
import { buscarLivros } from "../services/Service";
import type Livro from "../models/Livro";

function BuscaLivros() {
    const [pesquisa, setPesquisa] = useState("");
    const [livros, setLivros] = useState<Livro[]>([]);
    const [carregando, setCarregando] = useState(false);
    const [erro, setErro] = useState("");

    async function pesquisarLivros(e: FormEvent<HTMLFormElement>) {
        e.preventDefault();

        if (!pesquisa.trim()) return;

        setCarregando(true);
        setErro("");
        setLivros([]);

        try {
        const resultado = await buscarLivros(pesquisa.trim());
        setLivros(resultado);

        if (resultado.length === 0) {
            setErro("Nenhum livro encontrado.");
        }
        } catch (error) {
        console.error("Erro ao buscar livros:", error);
        setErro("Erro ao buscar livros. Tente novamente.");
        } finally {
        setCarregando(false);
        }
    }

    return (
        <section className="w-full max-w-5xl mx-auto px-6 py-12 text-white">
        <h2 className="text-3xl font-bold text-center mb-4">
            Biblioteca de Estudos
        </h2>

        <p className="text-center mb-6">
            Encontre livros relacionados às suas matérias.
        </p>

        <form
            onSubmit={pesquisarLivros}
            className="flex flex-col sm:flex-row gap-3 mb-8"
        >
            <input
            type="text"
            placeholder="Pesquise uma matéria..."
            value={pesquisa}
            onChange={(e) => setPesquisa(e.target.value)}
            className="flex-1 min-w-0 rounded-lg border border-slate-600 bg-slate-800 p-3"
            />

            <button
            type="submit"
            disabled={carregando}
            className="bg-blue-600 px-6 py-3 rounded-lg disabled:opacity-50"
            >
            {carregando ? "Buscando..." : "Pesquisar"}
            </button>
        </form>

        {erro && <p className="text-center mb-4">{erro}</p>}

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {livros.map((livro) => (
            <div
                key={livro.id}
                className="bg-slate-900 border border-slate-700 p-5 rounded-xl text-center"
            >
                {livro.capa && (
                <img
                    src={livro.capa}
                    alt={`Capa de ${livro.titulo}`}
                    className="mx-auto h-40 object-contain mb-4"
                />
                )}

                <h3 className="font-bold mb-2">
                {livro.titulo}
                </h3>

                <p className="text-sm mb-3">
                {livro.autores.join(", ") || "Autor não informado"}
                </p>

                <a
                href={livro.link}
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-400 underline"
                >
                Ver livro
                </a>
            </div>
            ))}
        </div>
        </section>
    );
}

export default BuscaLivros;
