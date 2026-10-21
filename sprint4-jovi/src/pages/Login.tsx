function Login() {
    return (
        <section id="login" className="w-full max-w-md mx-auto px-6 py-12 text-white">
            <div className="bg-azul-escuro border border-slate-800 p-8 rounded-2xl shadow-2xl">
                <h2 className="text-4xl md:text-3xl font-bold text-center tracking-tight text-white mb-3">Área do Estudante</h2>
                <p className="text-slate-400 text-center text-[1rem] mb-8">Entre para acessar seus materiais de estudo.</p>

            <form className="flex flex-col gap-2 flex-1">
                <label htmlFor="email">E-mail</label>
                <input type="email" id="email" placeholder="Digite seu e-mail" className="w-full p-2.5 border border-grey rounded-[5px]"/>

                <label htmlFor="senha">Senha</label>
                <input type="password"id="senha"placeholder="Digite sua senha" className="w-full p-2.5 border border-grey rounded-[5px]"/>

                <div className="mt-4 flex justify-center items-center">
                    <button className="w-[200px] p-2.5 rounded-[8px] bg-azul-jovi text-white cursor-pointer" type="submit">Entrar</button>
                </div>
                
            </form>
            </div>
        </section>
    );
}

export default Login;