
import GameBody from "./GameBody";
import Header from "../components/Header"
import Footer from "../components/Footer";
const CSSBattle = () => {
    return (
        <div className="container" id="gameBody">
            <Header text="Score"/>
            <GameBody />
            <Footer />
        </div>
    )
}

export default CSSBattle;