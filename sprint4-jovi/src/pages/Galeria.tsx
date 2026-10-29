import modoEstudante from "../image/modo_estudante.jpg";
import scanner from "../image/scanner.jpg";
import resumoInteligente from "../image/resumo_inteligente.jpg";

function Galeria() {
    return (
        <section id="galeria" className="min-h-screen bg-black text-white py-16 px-6 lg:py-[90px] lg:px-20">
        <div className="text-center mb-[60px]">
            <h2 className="text-5xl mb-3.5 font-bold">Conheça a solução na prática</h2>
            <p className="text-[1rem] m-auto leading-6">Explore as principais funcionalidades da câmera da JOVI proposta pelo NextCode.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-12 justify-items-center">
            <div className="text-center">
            <img src={modoEstudante} alt="Modo Estudante" className="w-full max-w-[220px] sm:max-w-[260px] md:max-w-[280px] h-auto rounded-[20px] mb-6 mx-auto bg-black border border-white text-center transition-all duration-300 hover:-translate-y-[8px]" />
            <h3 className="text-xl mb-3 text-azul-jovi font-bold">Modo Estudante</h3>
            <p className="text-[18px] leading-6 text-white">Organize seus conteúdos acadêmicos.</p>
            </div>

            <div className="text-center">
            <img src={scanner} alt="Scanner Inteligente" className="w-full max-w-[220px] sm:max-w-[260px] md:max-w-[280px] h-auto rounded-[20px] mb-6 mx-auto bg-black border border-white text-center transition-all duration-300 hover:-translate-y-[8px]" />
            <h3 className="text-xl mb-3 text-azul-jovi font-bold">Scanner Inteligente</h3>
            <p className="text-[18px] leading-6 text-white">Digitalize documentos e anotações.</p>
            </div>

            <div className="text-center">
            <img src={resumoInteligente} alt="Resumo Inteligente" className="w-full max-w-[220px] sm:max-w-[260px] md:max-w-[280px] h-auto rounded-[20px] mb-6 mx-auto bg-black border border-white text-center transition-all duration-300 hover:-translate-y-[8px]"/>
            <h3 className="text-xl mb-3 text-azul-jovi font-bold">Resumo Inteligente</h3>
            <p className="text-[18px] leading-6 text-white">Transforme imagens em materiais de revisão.</p>
            </div>
        </div>
        </section>
    );
}

export default Galeria;