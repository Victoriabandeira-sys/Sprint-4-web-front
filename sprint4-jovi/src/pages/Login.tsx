import { useState, type FormEvent } from "react";
import { useNavigate } from "react-router-dom";

function Login() {
    const navigate = useNavigate();
    
    const [email, setEmail] = useState("");
    const [senha, setSenha] = useState("");

    function fazerLogin(e: React.SubmitEvent<HTMLFormElement>) {
    e.preventDefault();

    if (
    email.trim().toLowerCase() === "jovi.2026@fiap" &&
    senha === "123456"
    ) {
        sessionStorage.setItem("joviLogado", "true");
        navigate("/estudos");
    } else {
        alert("E-mail ou senha incorretos!");
    }
}
    return (
        <section id="login" className="w-full max-w-md mx-auto px-6 py-12 text-white">
            <div className="bg-azul-escuro border border-slate-800 p-8 rounded-2xl shadow-2xl">
                <h2 className="text-4xl md:text-3xl font-bold text-center tracking-tight text-white mb-3">Área do Estudante</h2>
                <p className="text-slate-400 text-center text-[1rem] mb-8">Entre para acessar seus materiais de estudo.</p>

                <form onSubmit={fazerLogin} className="flex flex-col gap-2 flex-1">
                    <label htmlFor="email">E-mail</label>
                    <input
                        type="text"
                        id="email"
                        placeholder="Digite seu e-mail"
                        className="w-full p-2.5 border border-grey rounded-[5px]"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                    />

                    <label htmlFor="senha">Senha</label>
                    <input
                        type="password"
                        id="senha"
                        placeholder="Digite sua senha"
                        className="w-full p-2.5 border border-grey rounded-[5px]"
                        value={senha}
                        onChange={(e) => setSenha(e.target.value)}
                    />

                    <div className="mt-4 flex justify-center items-center">
                        <button
                            className="w-[200px] p-2.5 rounded-[8px] bg-azul-jovi text-white cursor-pointer"
                            type="submit"
                        >
                            Entrar
                        </button>
                    </div>
                </form>
            </div>
        </section>
    );
}

export default Login;