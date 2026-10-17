import modoEstudante from "../image/modo_estudante.jpg";
import scanner from "../image/scanner.jpg";
import resumoInteligente from "../image/resumo_inteligente.jpg";

function Galeria() {
    return (
        <section id="galeria" className="galeria">
        <div className="galeria-titulo">
            <h2>Conheça a solução na prática</h2>
            <p>Explore as principais funcionalidades da JOVI.</p>
        </div>

        <div className="galeria-grid">
            <div className="galeria-item">
            <img src={modoEstudante} alt="Modo Estudante" />
            <h3>Modo Estudante</h3>
            <p>Organize seus conteúdos acadêmicos.</p>
            </div>

            <div className="galeria-item">
            <img src={scanner} alt="Scanner Inteligente" />
            <h3>Scanner Inteligente</h3>
            <p>Digitalize documentos e anotações.</p>
            </div>

            <div className="galeria-item">
            <img src={resumoInteligente} alt="Resumo Inteligente" />
            <h3>Resumo Inteligente</h3>
            <p>Transforme imagens em materiais de revisão.</p>
            </div>
        </div>
        </section>
    );
}

export default Galeria;