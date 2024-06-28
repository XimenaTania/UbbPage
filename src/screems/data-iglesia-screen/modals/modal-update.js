import Modal from 'react-bootstrap/Modal'
import Form from 'react-bootstrap/Form'
import React, {useState} from "react";
import './modal-update.css'

export const ModalUpdate = (props) => {
    const [name, setName] = useState('');
    const [lastName, setLastName] = useState('');
    const [ci, setCi] = useState('');
    const [email, setEmail] = useState('');
    const [birthdate, setBirthdate] = useState('');
    const [phoneNumber, setPhoneNumber] = useState('');
    const [occupation, setOccupation] = useState('');
    const [seminar, setSeminar] = useState('');
    const [shepherd, setShepherd] = useState('');
    const [typeShepherd, setTypeShepherd] = useState('');
    const [nativeLanguage, setNativeLanguage] = useState('');
    const [secondLanguage, setSecondLanguage] = useState('');
    const [driverLicense, setDriverLicense] = useState('');

    return (
        <>
            <Modal
                {...props}
                style={{
                    maxWidth: "800px !important",
                    bgcolor: "#FFF5EB !important"
                }}
                aria-labelledby="contained-modal-title-vcenter"
                centered>
                <Modal.Header closeButton style={{background:'#FFF5EB'}}>
                    <Modal.Title id="contained-modal-title-vcenter">
                        SUBIR DATOS/ LA PAZ/ Los Andes
                    </Modal.Title>
                </Modal.Header>
                <Modal.Body style={{background:'#FFF5EB'}}>
                    <div style={{display: "flex", gap: "8px",
                        flexWrap: "wrap"}}>
                        <Form.Control style={{flexGrow: 1, width: "30%"}}
                                      type="text"
                                      placeholder="Nombre"
                                      value={name}
                                      onChange={(e) => setName(e.target.value)} />
                        <Form.Control style={{flexGrow: 1, width: "30%"}}
                                      type="text"
                                      placeholder="Apellido"
                                      value={lastName}
                                      onChange={(e) => setLastName(e.target.value)} />
                        <Form.Control style={{flexGrow: 1, width: "30%"}}
                                      type="text"
                                      placeholder="Carnet de identidad"
                                      value={ci}
                                      onChange={(e) => setCi(e.target.value)} />
                        <Form.Control style={{flexGrow: 1, width: "30%"}}
                                      type="text"
                                      placeholder="Correo electronico "
                                      value={email}
                                      onChange={(e) => setEmail(e.target.value)} />
                        <Form.Control style={{flexGrow: 1, width: "30%"}}
                                      type="text"
                                      placeholder="Fecha de nacimiento"
                                      value={birthdate}
                                      onChange={(e) => setBirthdate(e.target.value)} />
                        <Form.Control style={{flexGrow: 1, width: "30%"}}
                                      type="text"
                                      placeholder="Celular"
                                      value={phoneNumber}
                                      onChange={(e) => setPhoneNumber(e.target.value)} />
                        <Form.Control style={{flexGrow: 1, width: "30%"}}
                                      type="text"
                                      placeholder="Ocupacion "
                                      value={occupation}
                                      onChange={(e) => setOccupation(e.target.value)} />
                        <Form.Control style={{flexGrow: 1, width: "30%"}}
                                      type="text"
                                      placeholder="Seminario"
                                      value={seminar}
                                      onChange={(e) => setSeminar(e.target.value)} />
                    </div>
                    <div style={{display: "flex", gap: "10px",  paddingBottom: "10px", paddingTop:"10px"}} key={`reverse-radio`}>
                        <Form.Label>Es Pastor? </Form.Label>
                        <Form.Check type="radio" id={`pastor-1`} name="pastor" label="SI"/>
                        <Form.Check type="radio" id={`pastor-2`} name="pastor" label="NO"/>
                    </div>
                    <div style={{display: "flex", gap: "10px", paddingBottom: "10px"}}>
                        <Form.Label>Tipo de Pastor? </Form.Label>
                        <Form.Check type="radio" id={`typePastor-1`} name="typePastor" label="Laico"/>
                        <Form.Check type="radio" id={`typePastor-2`} name="typePastor" label="Titulado"/>
                    </div>
                    <div style={{display: "flex", gap: "10px",  paddingBottom: "10px"}}>
                        <Form.Label>Idioma Regional </Form.Label>
                        <Form.Check type="radio" id={`native-1`} name="native" label="Catellano"/>
                        <Form.Check type="radio" id={`native-2`} name="native" label="Aymara"/>
                        <Form.Check type="radio" id={`native-3`} name="native" label="Quechua"/>
                    </div>
                    <div style={{display: "flex", gap: "10px",  paddingBottom: "10px"}}>
                        <Form.Label>Idioma Extranjero</Form.Label>
                        <Form.Check type="radio" id={`secondLanguage-1`} name="secondLanguage" label="Ingles"/>
                        <Form.Check type="radio" id={`secondLanguage-2`} name="secondLanguage" label="Portugues"/>
                    </div>
                    <div style={{display: "flex", gap: "10px" , paddingBottom: "10px"}}>
                        <Form.Label>Licencia de Conducir, Categoría</Form.Label>
                        <Form.Check type="radio" id={`drive-1`} name="drive" label="A"/>
                        <Form.Check type="radio" id={`drive-2`} name="drive" label="B"/>
                    </div>
                    <div style={{    display: "flex",
                        flexDirection: "column"}}>
                        <button className='button' onClick={() => console.log("}}}}}}}", name)}>Agregar miembro</button>
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