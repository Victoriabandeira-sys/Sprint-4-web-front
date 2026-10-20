import Header from "../components/Header";
import celularJovi from "../image/celular-jovi.png";
function Home() {
    return (
        <div className="min-h-screen bg-black text-white">
        <Header />

        <main>
            <section id="inicio" className="min-h-screen pt-[120px] pb-[60px] px-[10%] grid grid-cols-1 md:grid-cols-2 items-center gap-[50px] bg-gradient-to-r from-black to-azul-escuro/80"
        >
        <div className="flex flex-col justify-center">
            <p className="text-sm font-extrabold tracking-wider text-white">CÂMERA INTELIGENTE PARA ESTUDOS</p>
            <h1 className="text-4xl md:text-6xl font-bold leading-[1.1] my-5">Transforme sua câmera em uma ferramenta de aprendizagem </h1>
            <p className="max-w-[600px] text-grey text-lg mb-[30px] leading-relaxed">Nós da equipe NEXTCODE nos juntamos a JOVI para criar soluções para tornar a experiência da câmera mais simples, intuitiva e útil para estudantes.</p>
            
            <div>
                <a href="#solucao" className="inline-block px-[30px] py-[15px] bg-azul-escuro text-white rounded-lg border-2 border-azul-escuro font-medium text-center transition-all duration-500 ease-in-out hover:-translate-y-1 hover:bg-azul-claro hover:border-azul-claro">Conheça a solução</a>
            </div>
        </div>

        <div className="flex justify-center items-center inicio-imagem">
            <img src={celularJovi} alt="Celular com a tela da câmera JOVI" className="w-full max-h-[600px] object-contain bg-cover"/>
        </div>

            </section>
        </main>
        </div>
);
}
export default Home;