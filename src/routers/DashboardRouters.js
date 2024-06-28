import {BrowserRouter, Route, Routes} from "react-router-dom";
import React from 'react'
import {InitialScreen} from "../screems/initial-screen/initial-screen";
import {DashboardScreen} from "../screems/dashboard-screen/dashboard-screen";

export const DashboardRouters = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<InitialScreen />} />
                <Route path="/dashboard" element={< DashboardScreen />} />
            </Routes>
        </BrowserRouter>
    )
}