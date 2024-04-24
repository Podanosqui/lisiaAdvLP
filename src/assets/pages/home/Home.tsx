import Acting from "../../components/acting/Acting";
import Contato from "../../components/contato/Contato";
import Footer from "../../components/footer/Footer";
import Inicio from "../../components/inicio/Inicio";
import OndeEstamos from "../../components/ondeEstamos/OndeEstamos";
import Sobre from "../../components/sobre/Sobre";

export default function Home() {
    return (
        <>
            <Inicio />
            <Sobre />
            <Acting />
            <Contato />
            <OndeEstamos />
            <Footer />
        </>
    );
}