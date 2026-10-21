function Footer() {
    return (
        <>
        <div className="flex justify-center items-center py-2.5 px-[50] bg-black">
                <a href="#inicio" className="rounded-[80px] transition duration-500 no-underline font-bold text-white bg-azul-jovi px-16 py-4 border-2 border-azul-jovi hover:bg-transparent hover:text-azul-jovi">Voltar ao início</a>
            </div>
        
        <footer className="mt-[70px] p-2.5 text-center text-black bg-grey">
            <p>JOVI | NEXTCODE</p>
            <p>Projeto desenvolvido para o Challenge FIAP 2026.</p>
        </footer>
        </>
    );
}

export default Footer;