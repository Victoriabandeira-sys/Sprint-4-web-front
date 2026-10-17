import enzo from "../image/enzo.jpg";
import giulia from "../image/giulia.jpg";
import kauan from "../image/kauan.jpg";
import kayque from "../image/kayque.jpg";
import victoria from "../image/victoria.jpg";

function Equipe() {
    return (
        <section id="equipe" className="equipe">
        <h2>Conheça nossa equipe</h2>

        <div className="equipe-grid">
            <div className="integrante">
            <img src={enzo} alt="Enzo Oldani" />
            <h3>Enzo Oldani</h3>
            <p>Pesquisa de campo</p>
            </div>

            <div className="integrante">
            <img src={giulia} alt="Giulia Russo" />
            <h3>Giulia Russo</h3>
            <p>Front-end & Design</p>
            </div>

            <div className="integrante">
            <img src={kauan} alt="Kauan Merida" />
            <h3>Kauan Merida</h3>
            <p>Pesquisa & Solução</p>
            </div>

            <div className="integrante">
            <img src={kayque} alt="Kayque Amaro" />
            <h3>Kayque Amaro</h3>
            <p>Desenvolvimento</p>
            </div>

            <div className="integrante">
            <img src={victoria} alt="Victoria Bandeira" />
            <h3>Victoria Bandeira</h3>
            <p>UX/UI Design</p>
            </div>
        </div>
        </section>
    );
}

export default Equipe;