function Solucao() {
    return (
        <section id="solucao" className="py-[100px] px-[10%] bg-black">
        <div className="mb-[50px] text-center">
            <h2 className="text-5xl font-bold text-white text-center">Conheça a solução</h2>
            <p className="text-white text-center p-[15px]">A JOVI transforma a câmera do celular em uma ferramenta mais inteligente e prática para os estudantes.</p>
        </div>

        <div className="grid grid-cols-3 gap-5">
            <div className="bg-card p-[30px] rounded-xl transition duration-300 border border-azul-claro/15 -translate-y-[8px] hover:border-azul-escuro font-bold">
            <h3 className="mb-[15px] text-azul-claro">Modo Estudante</h3>
            <p className="text-grey leading-relaxed text-justify">Um espaço para registrar e organizar seus estudos.</p>
            </div>

            <div className="bg-card p-[30px] rounded-xl transition duration-300 border border-azul-claro/15 -translate-y-[8px] hover:border-azul-escuro font-bold">
            <h3 className="mb-[15px] text-azul-claro">Scanner Inteligente</h3>
            <p className="text-grey leading-relaxed text-justify">Digitalize documentos e anotações com facilidade.</p>
            </div>

            <div className="bg-card p-[30px] rounded-xl transition duration-300 border border-azul-claro/15 -translate-y-[8px] hover:border-azul-escuro font-bold">
            <h3 className="mb-[15px] text-azul-claro">Organização por Matéria</h3>
            <p className="text-grey leading-relaxed text-justify">Separe seus conteúdos por disciplina.</p>
            </div>

            <div className="bg-card p-[30px] rounded-xl transition duration-300 border border-azul-claro/15 -translate-y-[8px] hover:border-azul-escuro font-bold">
            <h3 className="mb-[15px] text-azul-claro">Resumo Inteligente</h3>
            <p className="text-grey leading-relaxed text-justify">Transforme imagens em resumos personalizados para revisão.</p>
            </div>

            <div className="bg-card p-[30px] rounded-xl transition duration-300 border border-azul-claro/15 -translate-y-[8px] hover:border-azul-escuro font-bold">
            <h3 className="mb-[15px] text-azul-claro">Guia Inteligente</h3>
            <p className="text-grey leading-relaxed text-justify">Descubra como utilizar os recursos da câmera.</p>
            </div>

            <div className="bg-card p-[30px] rounded-xl transition duration-300 border border-azul-claro/15 -translate-y-[8px] hover:border-azul-escuro font-bold">
            <h3 className="mb-[15px] text-azul-claro">Interface Simplificada</h3>
            <p className="text-grey leading-relaxed text-justify">Acesse as principais ferramentas sem complicação.</p>
            </div>
        </div>
        </section>
    );
}

export default Solucao;