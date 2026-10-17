function Login() {
    return (
        <section id="login" className="login">
        <h2>Área do Estudante</h2>
        <p>Entre para acessar seus materiais de estudo.</p>

        <form>
            <label htmlFor="email">E-mail</label>
            <input
            type="email"
            id="email"
            placeholder="Digite seu e-mail"
            />

            <label htmlFor="senha">Senha</label>
            <input
            type="password"
            id="senha"
            placeholder="Digite sua senha"
            />

            <button type="submit">Entrar</button>
        </form>
        </section>
    );
}

export default Login;