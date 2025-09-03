import {HashRouter} from "react-router-dom";
import Routes from "./routes/index.jsx";
import "./styles/global.scss";

const App = () => {
    return (
        <HashRouter>
            <div className="app">
                <Routes/>
            </div>
        </HashRouter>
    )
}

export default App;