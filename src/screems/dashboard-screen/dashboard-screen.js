import React, {useEffect, useState} from "react";
import NavbarDashboard from "./componets/navbar";
import IgleciasGrid from "./componets/iglecias-grid";
import "./dashboard-screen.css";
import {ModalUpdate} from "../data-iglesia-screen/modals/modal-update";
import {getDataList} from "../../services/user.service"
import {useNavigate} from "react-router-dom";

export const DashboardScreen = ({ setSharedData }) => {
    const [item, setItem] = useState(null);
    const [datalist, setDataList] = useState(null);
    const navigate = useNavigate()

    const [modalShow, setModalShow] = React.useState(false);

    useEffect(() => {
        getDataList().then((response) => {
            setDataList(response)
        })
    }, [])

    const handleData = (dataSelect) => {
        setItem(dataSelect)
        setSharedData(dataSelect)
        navigate('/dashboard/members', {variableCompartida: dataSelect})
    };

    return (
        <div className='contentComponent'>
            <NavbarDashboard/>
            <div>
                <div className='titleHeader'>
                    iglesias de la union bautista boliviana
                </div>
                { datalist? <IgleciasGrid data={datalist} setItem={handleData}/> : <></> }
            </div>
            <ModalUpdate
                show={modalShow}
                onHide={() => setModalShow(false)}
            />
        </div>
    )
}