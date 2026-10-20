function Publico() {
    return (
        <section id="publico" className="min-h-screen bg-black text-white py-[100px] px-20 grid grid-cols-1 grid-cols-12 gap-[100px] items-center">
        <div className="col-span-4">
            <h2 className="text-5xl mb-6 font-bold">Público Alvo</h2>
            <p className="text-lg leading-8 text-justify">Para estudantes, seja de ensino médio, técnico ou universitário que buscam praticidade e organização na rotina de estudos, como separação de conteúdos por matérias.</p>
        </div>

        <div className="col-span-8 grid gap-6 ">
            <div className="border border-l-[3px] border-azul-jovi py-6 px-[30px] bg-grey rounded-r-[15px] transition-all duration-300 hover:-translate-y-[8px]">
            <h3 className="text-2xl mb-2.5 text-azul-escuro font-bold">Estudantes</h3>
            <p className="text-[1rem] leading-6 text-white ">Registre aulas, slides e anotações e transforme-os em textos editáveis ou resumos personalizados.</p>
            </div>

            <div className="border border-l-[3px] border-azul-jovi py-6 px-[30px] bg-grey rounded-r-[15px] transition-all duration-300 hover:-translate-y-[8px]">
            <h3 className="text-2xl mb-2.5 text-azul-escuro font-bold">Rotina Digital</h3>
            <p className="text-[1rem] leading-6 text-white">Tenha seus materiais sempre à mão para revisar conteúdos.</p>
            </div>

            <div className="border border-l-[3px] border-azul-jovi py-6 px-[30px] bg-grey rounded-r-[15px] transition-all duration-300 hover:-translate-y-[8px]">
            <h3 className="text-2xl mb-2.5 text-azul-escuro font-bold">Mais Organização</h3>
            <p className="text-[1rem] leading-6 text-white ">Encontre seus conteúdos com facilidade.</p>
            </div>
        </div>
        </section>
    );
}

export default Publico;