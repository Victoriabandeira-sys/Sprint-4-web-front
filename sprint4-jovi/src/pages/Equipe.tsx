import enzo from "../image/enzo.jpg";
import giulia from "../image/giulia.jpeg";
import kauan from "../image/kauan.jpg";
import kayque from "../image/kayque.jpg";
import victoria from "../image/victoria.jpg";

function Equipe() {
    return (
        <section id="equipe" className="py-16 px-6 lg:py-[100px] lg:px-[10%] bg-black">
        <h2 className="text-center font-bold text-5xl text-white p-5">Conheça nossa equipe</h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-7 justify-items-center">
            <div className="w-full max-w-[290px] sm:max-w-none text-center bg-card p-7 rounded-2xl border border-transparent transition-all duration-300 hover:-translate-y-2 hover:border-card">
            <img src={enzo} alt="Enzo Oldani" className="w-32 h-32 rounded-full mx-auto object-cover mb-5" />
            <h3 className="mb-[5px] font-bold text-white">Enzo Oldani</h3>
            <p className="text-white mb-3.5 text-[17px] leading-6">Pesquisa de campo</p>
            </div>

            <div className="w-full max-w-[290px] sm:max-w-none text-center bg-card p-7 rounded-2xl border border-transparent transition-all duration-300 hover:-translate-y-2 hover:border-card">
            <img src={giulia} alt="Giulia Russo" className="w-32 h-32 rounded-full mx-auto object-cover mb-5"/>
            <h3 className="mb-[5px] font-bold text-white">Giulia Russo</h3>
            <p className="text-white mb-3.5 text-[17px] leading-6">Front-end & Design</p>
            </div>

            <div className="w-full max-w-[290px] sm:max-w-none text-center bg-card p-7 rounded-2xl border border-transparent transition-all duration-300 hover:-translate-y-2 hover:border-card">
            <img src={kauan} alt="Kauan Merida" className="w-32 h-32 rounded-full mx-auto object-cover mb-5" />
            <h3 className="mb-[5px] font-bold text-white">Kauan Merida</h3>
            <p className="text-white mb-3.5 text-[17px] leading-6">Pesquisa & Solução</p>
            </div>

            <div className="w-full max-w-[290px] sm:max-w-none text-center bg-card p-7 rounded-2xl border border-transparent transition-all duration-300 hover:-translate-y-2 hover:border-card">
            <img src={kayque} alt="Kayque Amaro" className="w-32 h-32 rounded-full mx-auto object-cover mb-5"/>
            <h3 className="mb-[5px] font-bold text-white">Kayque Amaro</h3>
            <p className="text-white mb-3.5 text-[17px] leading-6">Desenvolvimento</p>
            </div>

            <div className="w-full max-w-[290px] sm:max-w-none text-center bg-card p-7 rounded-2xl border border-transparent transition-all duration-300 hover:-translate-y-2 hover:border-card">
            <img src={victoria} alt="Victoria Bandeira" className="w-32 h-32 rounded-full mx-auto object-cover mb-5" />
            <h3 className="mb-[5px] font-bold text-white">Victoria Bandeira</h3>
            <p className="text-white mb-3.5 text-[17px] leading-6">UX/UI Design</p>
            </div>
        </div>
        </section>
    );
}

export default Equipe;