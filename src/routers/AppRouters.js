import {BrowserRouter, Route, Routes} from "react-router-dom";
import React, {useState} from 'react'
import {InitialScreen} from "../screems/initial-screen/initial-screen";
import {DashboardScreen} from "../screems/dashboard-screen/dashboard-screen";
import {DataIglesiaScreen} from "../screems/data-iglesia-screen/data-iglesia-screen";

export const AppRouters = () => {
    const [sharedData, setSharedData] = useState(null);
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<InitialScreen />} />
                <Route path="/dashboard" element={< DashboardScreen setSharedData={setSharedData} />} />
                <Route path="/dashboard/members" element={< DataIglesiaScreen sharedData={sharedData}/>} />
            </Routes>
        </BrowserRouter>
    )
}