import React, {useEffect, useState} from 'react';
import './members.css'
import imgSearch from "../../../assets/imagenes/search.png";
import imgEdith from "../../../assets/imagenes/ic_edit.png";
import imgClock from "../../../assets/imagenes/clock-icon.png";
import imgLocation from "../../../assets/imagenes/location.png";
import imgSee from "../../../assets/imagenes/see-data.png";
import imgDelete from "../../../assets/imagenes/ic_delete.png";
import imgEdithWhite from "../../../assets/imagenes/ic_edit-white.png";
import Dropdown from "react-bootstrap/Dropdown";
import dateFormat from "dateformat";
import {ModalIglesia} from "../../dashboard-screen/modals/modal-igelsia";
import {ModalUpdateData} from "../../dashboard-screen/modals/modal-update-data";

const MemberList = ({ data , item, setItem}) => {
    const [modalShowIglesia, setModalShowIglesia] = React.useState(false);
    const [modalIglesiaData, setModalIglesiaData] = React.useState(null);
    const [modalShowData, setModalShowData] = React.useState(false);
    const [filtro, setFiltro] = useState('');
    const [resultados, setResultados] = useState([]);

    useEffect(() => {
        setResultados(data)
    },[])

    const convertTimestamp = (timestamp) => {
        const date = new Date(timestamp);
        return dateFormat(date,"dd mmmm" )
    }

    const handleChange = (e) => {
        setFiltro(e.target.value);
        const resultadosFiltrados = data.filter(item =>
            item.dateIglesia.name.toLowerCase().includes(e.target.value.toLowerCase())
        );
        //data = resultadosFiltrados;
        setResultados(resultadosFiltrados);
    };

    return (
        <div className="three-column-grid">
            <div className='cardheader'>
                <input className='inputSearch'
                       type="text"
                       placeholder='BUSCAR DATOS'
                       value={filtro}
                       onChange={handleChange} />
                <img src={imgSearch} width='24' height='24' alt='imgSearch'/>
            </div>
            <div className='section-information'>
                {resultados.map((itemS, index) => {
                    return (

                    <div key={index} className='cardMembers' >
                        <div className='body-card'>
                            <div className='dataMembers'>
                                <label className='dateMember'>{convertTimestamp(itemS.dataPerson.date)}</label>
                                <div className='dataPerson'>
                                    <label className='dataPersonTitle'>Datos PERSONALES</label>
                                    <label className='dataPersonName'>{itemS.dataPerson.name}</label>
                                    <div className='dateYear'>
                                        <img src={imgClock} alt='imgHistory' width='20' height='20'/>
                                        <label className='dateAddress'>{itemS.dataPerson.birthdate} - {itemS.dataPerson.city}</label>
                                    </div>
                                </div>
                                <div className='dataPerson'>
                                    <label className='dataPersonTitle'>Datos iglesia</label>
                                    <label className='dataPersonName'>{itemS.dateIglesia.name}</label>
                                    <div className='dateYear'>
                                        <img src={imgLocation} alt='imgHistory' width='15' height='20'/>
                                        <label className='dateAddress'>{itemS.dateIglesia.address}</label>
                                    </div>
                                </div>
                                <Dropdown>
                                    <Dropdown.Toggle as='null' role="menuitem" variant="success" id="dropdown-basic">
                                        <img src={imgEdith} alt='imgHistory' width='30' height='30' />
                                    </Dropdown.Toggle>

                                    <Dropdown.Menu className='dMenu'>
                                        <Dropdown.Item href="#/action-1" onClick={() => {setModalIglesiaData(itemS); setModalShowIglesia(true);}}><div className='dropdownContent'><label className='dropdownContentTitle'>Ver datos</label> <img src={imgSee} alt='imgHistory' width='20' height='15' /></div></Dropdown.Item>
                                        <Dropdown.Item href="#/action-2" onClick={() => setModalShowData(true)}><div className='dropdownContent'><label className='dropdownContentTitle'>Actualizar datos</label> <img src={imgEdithWhite} alt='imgHistory' width='20' height='20' /></div></Dropdown.Item>
                                        <Dropdown.Item href="#/action-3" onClick={() => console.log("delete")}><div className='dropdownContent'><label className='dropdownContentTitle'>Dar de baja</label> <img src={imgDelete} alt='imgHistory' width='15' height='20' /></div></Dropdown.Item>
                                    </Dropdown.Menu>
                                </Dropdown>

                            </div>
                        </div>
                        <div className='line-bottom'></div>
                    </div>
                )})}
            </div>
            <ModalIglesia
                show={modalShowIglesia}
                data={modalIglesiaData}
                onHide={() => setModalShowIglesia(false)}
            />
            <ModalUpdateData
                show={modalShowData}
                onHide={() => setModalShowData(false)}
            />
        </div>
    );
};

export default MemberList;