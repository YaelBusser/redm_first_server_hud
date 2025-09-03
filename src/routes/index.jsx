import {Route, Routes} from 'react-router-dom';
import Hud from "../pages/Hud/index.jsx";

const AppRoutes = () => {
    return (
        <Routes>
            <Route path={""} element={<Hud/>}/>
        </Routes>
    );
}

export default AppRoutes;