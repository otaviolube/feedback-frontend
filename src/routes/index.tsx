import {
    BrowserRouter, 
    Route,
    Routes,
    Navigate
} from 'react-router-dom';

import DashboardScreen from "../pages/DashboardScreen";
import LoginScreen from "../pages/LoginScreen";
import MainScreen from '../pages/MainScreen';
import RegisterScreen from "../pages/RegisterScreen";

export default function AppRoutes(){
    return(
        <BrowserRouter>
            <Routes>
                <Route path='/' element={<MainScreen />} />
                <Route path='/login' element={<LoginScreen />} />
                <Route path='/register' element={<RegisterScreen />} />
                <Route path='/dashboard' element={<DashboardScreen />} />
            </Routes>
        </BrowserRouter>
    );
}