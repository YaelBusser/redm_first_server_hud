import {BrowserRouter} from "react-router-dom";
import Routes from "./routes/index.jsx";
import "./styles/global.scss";

const App = () => {
    return (
        <BrowserRouter>
            <div className="app">
                <Routes/>
            </div>
        </BrowserRouter>
    )
}

export default App;