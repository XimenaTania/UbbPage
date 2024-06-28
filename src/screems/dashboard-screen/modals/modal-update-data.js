import Modal from 'react-bootstrap/Modal'
import {Button} from "react-bootstrap";
import Form from 'react-bootstrap/Form'
import React from "react";
import './modal-update-data.css'

export const ModalUpdateData = (props) => {
    const bg = {
        overlay: {
            maxWidth: "100% !important",
            background: "#FFF5EB !important"
        }
    };
    return (
        <>
            <Modal
                {...props}
                styles={{
                    maxWidth: "800px !important",
                    background: "#FFF5EB !important"
                }}
                aria-labelledby="contained-modal-title-vcenter"
                centered
            >
                <Modal.Header closeButton style={{background:'#FFF5EB'}}>
                    <Modal.Title id="contained-modal-title-vcenter">
                        Actualizar Datos / los andes
                    </Modal.Title>
                </Modal.Header>
                <Modal.Body style={{background:'#FFF5EB'}}>
                    <Form.Label>datos personales</Form.Label>
                    <div style={{display: "flex", gap: "8px",
                        flexWrap: "wrap"}}>
                        <Form.Control style={{
                            flexGrow: 1,
                            width: "40%"}} type="text" placeholder="Nombre Completo" />
                        <Form.Control style={{
                            flexGrow: 1,
                            width: "40%"}} type="text" placeholder="Cargo Union" />
                        <Form.Control style={{
                            flexGrow: 1,
                            width: "40%"}} type="text" placeholder="Cargo Ministerio" />
                    </div>
                    <div style={{    display: "flex",
                        flexDirection: "column"}}>
                        <button className='button'>Actualizar</button>
                        <div style={{
                            width: "100%",
                            height: "16px",
                            background: "#FFD2A4"
                        }}></div>
                    </div>
                </Modal.Body>
            </Modal>
        </>
    )
}