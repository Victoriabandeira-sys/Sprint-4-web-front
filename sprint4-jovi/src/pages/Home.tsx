import Header from "../components/Header";
import fundoAzul from "../image/fundo-azul.png";
function Home() {
    return (
        <section className="inicio">
        <img
            className="img-fundo"
            src={fundoAzul}
            alt=""
        />

        <Header />
        </section>
    );
}

export default Home;