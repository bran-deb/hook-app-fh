import React from 'react'
import {
    BrowserRouter as Router,
    Routes,
    Route,
    Navigate,

} from "react-router-dom";
import { NavBar } from './NavBar';
import { HomePage } from './HomePage';
import { AboutScreen } from './AboutScreen';
import { LoginScreen } from './LoginScreen';


export const AppRouter = () => {
    return (
        <Router>
            <NavBar />
            <Routes>
                <Route exact path='/' element={<HomePage />} />
                <Route exact path='/about' element={<AboutScreen />} />
                <Route exact path='/login' element={<LoginScreen />} />
                <Route path='/' element={<Navigate replace to='/' />} />
            </Routes>
        </Router>
    )
}
