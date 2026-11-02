import axios from "axios";
import type Livro from "../models/Livro";

const api = axios.create({
    baseURL: "https://openlibrary.org",
    });

    interface LivroAPI {
    key: string;
    title: string;
    author_name?: string[];
    cover_i?: number;
    }

    interface RespostaAPI {
    docs: LivroAPI[];
    }

    export async function buscarLivros(
    pesquisa: string
    ): Promise<Livro[]> {
    const resposta = await api.get<RespostaAPI>("/search.json", {
        params: {
        q: pesquisa,
        limit: 6,
        fields: "key,title,author_name,cover_i",
        },
    });

    return resposta.data.docs.map((livro) => ({
        id: livro.key,
        titulo: livro.title,
        autores: livro.author_name ?? [],
        capa: livro.cover_i
        ? `https://covers.openlibrary.org/b/id/${livro.cover_i}-M.jpg`
        : undefined,
        link: `https://openlibrary.org${livro.key}`,
    }));
}
