import {Route, Routes, Navigate} from 'react-router-dom';
import Home from "../pages/Home/index.jsx";
import Hud from "../pages/hud/index.jsx";
import { DEFAULT_ROUTE } from '../config/routes';

const AppRoutes = () => {
    return (
        <Routes>
            <Route path="/" element={<Home/>}/>
            <Route path="/hud" element={<Hud/>}/>
            <Route path="*" element={<Navigate to={DEFAULT_ROUTE} replace />} />
        </Routes>
    );
}

export default AppRoutes;