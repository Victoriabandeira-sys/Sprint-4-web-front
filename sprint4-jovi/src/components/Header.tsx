function Header() {
    return (
    <header className="w-full min-h-20 p-[2%] flex justify-between items-center bg-black/95 fixed top-0 z-[100]">
        <a href="inicio" className="text-white no-underline text-xl font-bold">JOVI BY NEXTCODE</a>

        <nav className="flex gap-[30px] list-none">
            <li><a href="inicio" className="text-white no-underline transition-colors duration-300" >Home</a></li>
            <li><a href="#solucao" className="text-white no-underline transition-colors duration-300" >Solução</a></li>
            <li><a href="#publico" className="text-white no-underline transition-colors duration-300" >Público-Alvo</a></li>
            <li><a href="#galeria" className="text-white no-underline transition-colors duration-300" >Galeria</a></li>
            <li><a href="#formulario" className="text-white no-underline transition-colors duration-300" >Formulário</a></li>
            <li><a href="#equipe" className="text-white no-underline transition-colors duration-300" >Nossa equipe</a></li>
            <li><a href="#contato" className="text-white no-underline transition-colors duration-300" >Contato</a></li>
        </nav>
    </header>
    );
}

export default Header;