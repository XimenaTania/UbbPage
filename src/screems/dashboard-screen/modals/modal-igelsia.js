import Modal from 'react-bootstrap/Modal'
import Form from 'react-bootstrap/Form'
import React from "react";
import './modal-iglesia.css'
import clockIcon from '../../../assets/imagenes/clock-icon.png'
import locationIcon from '../../../assets/imagenes/location-icon.png'
import {GoogleMap, useJsApiLoader, Marker} from "@react-google-maps/api";
import dateFormat from "dateformat";

export const ModalIglesia = (props) => {

    const { isLoaded } = useJsApiLoader({
        id: 'google-map-script',
        googleMapsApiKey: "AIzaSyDPuR7IeE2_cAweZStVBSDr87tPyNX6KE0"
    })
    const containerStyle = {
        width: '100%',
        height: '90%'
    };

    const convertTimestamp = (timestamp) => {
        const date = new Date(timestamp);
        return dateFormat(date,"dd mmmm" )
    }

    const center = {
        lat: props.show? props.data.dateIglesia.location.lat : -17.3938784,
        lng: props.show? props.data.dateIglesia.location.lng : -66.2462766
    };
    const [map, setMap] = React.useState(null)
    const onLoad = React.useCallback(function callback(map) {
        // This is just an example of getting and using the map instance!!! don't just blindly copy!
        const bounds = new window.google.maps.LatLngBounds(center);
        map.fitBounds(bounds);

        setMap(map)
    }, [])

    const onUnmount = React.useCallback(function callback(map) {
        setMap(null)
    }, [])
    return (
        <>
            {
                props.data? <Modal
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
                            Iglesia Los Andes
                        </Modal.Title>
                    </Modal.Header>
                    <Modal.Body style={{background:'#FFF5EB'}}>
                        <div style={{display: "flex", gap: "8px", flexDirection: "row"}}>
                            <div style={{width: "40%", display:"flex", flexDirection:"column"}}>
                                <Form.Label>{convertTimestamp(props.data.dataPerson.date)}</Form.Label>
                                <Form.Label>Datos personales </Form.Label>
                                <Form.Label><img src={clockIcon} width='18' height='18' alt='imgClock'/>{props.data.dataPerson.birthdate}</Form.Label>
                                <Form.Label><img src={locationIcon} width='18' height='22' alt='imgLocation'/>{props.data.dateIglesia.address}</Form.Label>
                                <Form.Label>Datos de la Iglesia </Form.Label>
                                <Form.Label>informacion de la iglesia </Form.Label>
                                <Form.Label>{props.data.dateIglesia.description}</Form.Label>
                                <Form.Label><img src={clockIcon} width='18' height='18' alt='imgClock'/> {props.data.dateIglesia.date} </Form.Label>
                                <Form.Label><img src={locationIcon} width='18' height='22' alt='imgLocation'/> {props.data.dateIglesia.address} </Form.Label>
                            </div>
                            <div style={{flexGrow:'1'}}>
                                {
                                    isLoaded? (
                                        <GoogleMap
                                            apikey={"AIzaSyCZMq97dBS2-WJyj9BRJmWcEBHm-CEUjG0"}
                                            mapContainerStyle={containerStyle}
                                            center={center}
                                            zoom={10}
                                            onLoad={onLoad}
                                            onUnmount={onUnmount}
                                        >
                                            { center && <Marker position={{ lat: center.lat, lng: center.lng }} /> }
                                            <></>
                                        </GoogleMap>
                                    ):<></>
                                }
                            </div>
                        </div>
                    </Modal.Body>
                </Modal> : <></>
            }
        </>
    )
}