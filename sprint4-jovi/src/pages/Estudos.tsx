
import { useState, useEffect, type FormEvent } from "react";

type Materia = {
    id: number;
    nome: string;
    prioridade: string;
    tempo: number;
    concluida: boolean;
};

function Estudos() {
    const [materia, setMateria] = useState("");
    const [prioridade, setPrioridade] = useState("alta");
    const [tempo, setTempo] = useState("");

    const [materias, setMaterias] = useState<Materia[]>(() => {
        try {
        const dados = localStorage.getItem("materias");
        return dados ? JSON.parse(dados) : [];
        } catch {
        return [];
        }
    });

useEffect(() => {
    localStorage.setItem("materias", JSON.stringify(materias));
}, [materias]);

function adicionarMateria(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();

    if (
        materia.trim() === "" ||
        tempo === "" ||
        !Number.isFinite(Number(tempo)) ||
        Number(tempo) <= 0
    ) {
        alert("Preencha todos os campos corretamente!");
        return;
    }

const novaMateria: Materia = {
    id: Date.now() + Math.random(),
    nome: materia.trim(),
    prioridade: prioridade,
    tempo: Number(tempo),
    concluida: false,
};

setMaterias((anteriores) => [...anteriores, novaMateria]);

setMateria("");
setPrioridade("alta");
setTempo("");
}

function concluirMateria(id: number) {
    setMaterias((anteriores) =>
    anteriores.map((item) =>
    item.id === id ? { ...item, concluida: true } : item)
    );
}

function excluirMateria(id: number) {
    setMaterias((anteriores) =>
    anteriores.filter((item) => item.id !== id)
    );
}

const total = materias.length;
const concluidas = materias.filter((item) => item.concluida).length;
const pendentes = total - concluidas;

return (
    <section id="estudos" className="estudos">
        <h2>Organização de Estudos</h2>
        <p>Organize suas matérias e acompanhe seus estudos.</p>

        <div className="formulario-estudos">
            <h3>Adicionar matéria</h3>

        <form onSubmit={adicionarMateria}>
            <label htmlFor="materia">Nome da matéria</label>
            <input
                type="text"
                id="materia"
                placeholder="Ex: Matemática"
                value={materia}
                onChange={(e) => setMateria(e.target.value)}
            />

            <label htmlFor="prioridade">Prioridade</label>
            <select
                id="prioridade"
                value={prioridade}
                onChange={(e) => setPrioridade(e.target.value)}
            >
                <option value="alta">Alta</option>
                <option value="media">Média</option>
                <option value="baixa">Baixa</option>
            </select>

            <label htmlFor="tempo">Tempo de estudo (horas)</label>
            <input
                type="number"
                id="tempo"
                min="1"
                step="0.5"
                value={tempo}
                onChange={(e) => setTempo(e.target.value)}
            />

            <button type="submit">Adicionar</button>
        </form>
        </div>

        <div className="resumo-estudos">
            <h3>Resumo dos estudos</h3>

        <div className="resumo-cards">
            <div className="resumo-card">
                <h4>Total de matérias</h4>
                <p>{total}</p>
            </div>

            <div className="resumo-card">
                <h4>Concluídas</h4>
                <p>{concluidas}</p>
            </div>

            <div className="resumo-card">
                <h4>Pendentes</h4>
                <p>{pendentes}</p>
            </div>
            </div>
        </div>

        <div className="lista-materias">
            <h3>Minhas matérias</h3>

        {materias.length === 0 && (
            <p>Nenhuma matéria cadastrada ainda.</p>
        )}

        {materias.map((item) => (
            <div className="card-materia" key={item.id}>
                <h4>{item.nome}</h4>
                <p>Prioridade: {item.prioridade}</p>
                <p>Tempo: {item.tempo} hora(s)</p>
                <p>
                Status: {item.concluida ? "Concluída" : "Pendente"}
                </p>

                <button
                type="button"
                onClick={() => concluirMateria(item.id)}
                disabled={item.concluida}
                >
                Concluir
                </button>

                <button
                type="button"
                onClick={() => excluirMateria(item.id)}
                >
                Excluir
                </button>
            </div>
            ))}
        </div>
    </section>
    );
}

export default Estudos;
