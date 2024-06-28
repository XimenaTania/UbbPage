import React, {useEffect, useState} from "react";
import "./data-iglesia-screen.css";
import {getDataList} from "../../services/user.service"
import NavbarDashboard from "../dashboard-screen/componets/navbar";
import {useLocation} from "react-router-dom";
import {ModalUpdate} from "./modals/modal-update";
import MemberList from "./components/members";

export const DataIglesiaScreen = ({ sharedData }) => {
    const [item, setItem] = useState(null);
    const [dataLocation, setDataLocation] = useState(null);
    const [datalist, setDataList] = useState(null);

    console.log("++++++++++", sharedData)

    const [modalShow, setModalShow] = React.useState(false);

    useEffect(() => {
        getDataList().then((response) => {
            setDataList(response)
        })
    }, [])

    const handleData = (dataSelect) => {
        setItem(dataSelect)
    };

    return (
        <div className='contentComponent'>
            <NavbarDashboard />
            <div>
                <div className='contentTitle'>
                    <div className='titleMember'>Miembros {sharedData.name}</div>
                    <button className='button' onClick={() => setModalShow(true)}>Agregar miembro</button>
                </div>
                <MemberList data={sharedData.members} setItem={handleData}></MemberList>
            </div>
            <ModalUpdate
                show={modalShow}
                onHide={() => setModalShow(false)} />
        </div>
    )
}