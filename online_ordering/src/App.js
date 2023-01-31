import "./App.css";
import Header from "./components/Header/Header";
import Intro from "./components/Intro/Intro";
import Menu from "./components/Meals/Meals";
import meals from "./assets/dummy-meals";
import { CartContextProvider } from "./context/cart-context";
function App() {
    return (
        <CartContextProvider>
            <Header />
            <Intro />
            <Menu meals={meals}/>
        </CartContextProvider>
    );
}

export default App;
