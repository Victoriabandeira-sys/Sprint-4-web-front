
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
    <section id="formulario" className="bg-black w-full max-w-4xl mx-auto px-6 py-12 text-white">
        <h2 className="text-4xl md:text-5xl font-bold text-center tracking-tight text-white mb-3">Organização de Estudos</h2>
        <p className="text-slate-400 text-center text-lg mb-8">Organize suas matérias e acompanhe seus estudos.</p>

        <div className="bg-azul-escuro border border-slate-800 p-6 rounded-2xl shadow-xl mb-8">
            <h3 className="text-xl font-semibold mb-6 text-slate-200">Adicionar matéria</h3>

        <form onSubmit={adicionarMateria} className="grid grid-cols-1 md:grid-cols-3 gap-5 items-end">
            <div className="flex flex-col">
                <label className="text-sm font-medium text-slate-400 mb-2" htmlFor="materia">Nome da matéria</label>
                <input
                    type="text"
                    id="materia"
                    placeholder="Ex: Matemática"
                    value={materia}
                    onChange={(e) => setMateria(e.target.value)}
                    className="w-full bg-[#132247] border border-slate-700 rounded-xl px-4 py-2.5 text-white placeholder-slate-500 focus:outline-none focus:border-blue-500"
                    />
            </div>

            <div className="flex flex-col">
                <label className="text-sm font-medium text-slate-400 mb-2" htmlFor="prioridade">Prioridade</label>
                <select
                    id="prioridade"
                    value={prioridade}
                    onChange={(e) => setPrioridade(e.target.value)}
                    className="w-full bg-[#132247] border border-slate-700 rounded-xl px-4 py-2.5 text-white focus:outline-none focus:border-blue-500">
                    <option value="alta">Alta</option>
                    <option value="media">Média</option>
                    <option value="baixa">Baixa</option>
                </select>
            </div>

            <div className="flex flex-col">

                <label className="text-sm font-medium text-slate-400 mb-2" htmlFor="tempo">Tempo de estudo (horas)</label>
                <input
                    type="number"
                    id="tempo"
                    min="1"
                    step="0.5"
                    value={tempo}
                    onChange={(e) => setTempo(e.target.value)}
                    className="w-full bg-[#132247] border border-slate-700 rounded-xl px-4 py-2.5 text-white focus:outline-none focus:border-blue-500"
                    />
            </div>

            <div className="md:col-span-3 flex justify-end mt-2">
                <button type="submit" className="w-full md:w-auto px-6 py-2.5 bg-blue-600 hover:bg-blue-700 text-white font-medium rounded-xl transition-all shadow-lg shadow-blue-600/20">Adicionar</button>
            </div>    

        </form>
        </div>

        <div className="bg-azul-escuro border border-slate-800 p-6 rounded-2xl shadow-xl mb-8">
            <h3 className="text-xl font-semibold mb-6 text-slate-200">Resumo dos estudos</h3>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            <div className="flex flex-col justify-between p-4 bg-[#132247] rounded-xl border border-slate-700">
                <h4 className="text-slate-400 font-medium text-sm">Total de matérias</h4>
                <p className="text-2xl font-bold text-blue-400 mt-2">{total}</p>
            </div>

            <div className="flex flex-col justify-between p-4 bg-[#132247] rounded-xl border border-slate-700">
                <h4 className="text-slate-400 font-medium text-sm">Concluídas</h4>
                <p className="text-2xl font-bold text-green-400 mt-2">{concluidas}</p>
            </div>

            <div className="flex flex-col justify-between p-4 bg-[#132247] rounded-xl border border-slate-700">
                <h4 className="text-slate-400 font-medium text-sm">Pendentes</h4>
                <p className="text-2xl font-bold text-amber-400 mt-2">{pendentes}</p>
            </div>
        </div>
        </div>

            <div className="bg-azul-escuro border border-slate-800 p-6 rounded-2xl shadow-xl">
            <h3 className="text-xl font-semibold mb-4 text-slate-200">Minhas matérias</h3>

        {materias.length === 0 && (
            <p className="text-slate-500 italic py-6 text-center bg-[#132247]/30 rounded-xl border border-dashed border-slate-700">Nenhuma matéria cadastrada ainda.</p>
        )}

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {materias.map((item) => (
                <div key={item.id} className={`p-5 rounded-xl border transition-all flex flex-col justify-between ${item.concluida ? 'bg-[#0f241b] border-green-900/60 opacity-75' : 'bg-[#132247] border-slate-700'}`}>
                    <div>
                        <h4 className="text-lg font-bold text-slate-100 mb-2 truncate">{item.nome}</h4>
                        <div className="text-sm space-y-1 mb-4">
                            <p className="text-slate-400"><span className="font-medium text-slate-300">Prioridade:</span> <span className="capitalize">{item.prioridade}</span></p>
                            <p className="text-slate-400"><span className="font-medium text-slate-300">Tempo:</span> {item.tempo} hora(s)</p>
                            <p className="text-slate-400">
                                <span className="font-medium text-slate-300">Status:</span>{' '}
                                <span className={`font-semibold ${item.concluida ? 'text-green-400' : 'text-amber-400'}`}>
                                    {item.concluida ? "Concluída" : "Pendente"}
                                </span>
                            </p>
                        </div>
                    </div>
                    <div className="flex gap-2 mt-2">
                        <button
                            type="button"
                            onClick={() => concluirMateria(item.id)}
                            disabled={item.concluida}
                            className="flex-1 py-2 text-xs font-semibold rounded-lg bg-green-600 hover:bg-green-700 text-white disabled:bg-slate-700 disabled:text-slate-500 transition-colors">Concluir</button>

                        <button type="button" onClick={() => excluirMateria(item.id)}
                            className="px-3 py-2 text-xs font-semibold rounded-lg bg-red-600/20 hover:bg-red-600 text-red-400 hover:text-white border border-red-500/30 transition-all">Excluir</button>
                    </div>
                    </div>
                    ))}
                </div>
            </div>
        </section>
    );
}

export default Estudos;