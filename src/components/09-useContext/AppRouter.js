import React from 'react'
import {
    BrowserRouter as Router,
    Routes,
    Route
} from "react-router-dom";
import { HomePage } from './HomePage';
import { AboutScreen } from './AboutScreen';
import { LoginScreen } from './LoginScreen';


export const AppRouter = () => {
    return (
        <Router>
            <Routes>
                <Route exact path='/' element={<HomePage />} />
                <Route exact path='/about' element={<AboutScreen />} />
                <Route exact path='/login' element={<LoginScreen />} />
            </Routes>
        </Router>
    )
}
