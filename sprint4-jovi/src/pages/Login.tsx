function Login() {
    return (
        <section id="login" className="login">
        <h2>Área do Estudante</h2>
        <p>Entre para acessar seus materiais de estudo.</p>

        <form className="flex flex-col gap-2 flex-1">
            <label htmlFor="email">E-mail</label>
            <input type="email" id="email" placeholder="Digite seu e-mail" className="w-full p-2.5 border border-grey rounded-[5px]"
            />

            <label htmlFor="senha">Senha</label>
            <input type="password"id="senha"placeholder="Digite sua senha" className="w-full p-2.5 border border-grey rounded-[5px]"
            />

            <button className="w-[200px] p-2.5 rounded-[8px] bg-azul-jovi text-white cursor-pointer" type="submit">Entrar</button>
        </form>
        </section>
    );
}

export default Login;