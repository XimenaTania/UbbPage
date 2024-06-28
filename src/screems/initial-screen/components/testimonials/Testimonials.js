import React from 'react'
import user3 from '../../../../assets/imagenes/earth.png'

import './Testimonials.css'
import {GoogleMap, Marker, useJsApiLoader} from "@react-google-maps/api";

const Testimonials = () => {

    const [map, setMap] = React.useState(null)

    const { isLoaded } = useJsApiLoader({
        id: 'google-map-script',
        googleMapsApiKey: "AIzaSyDPuR7IeE2_cAweZStVBSDr87tPyNX6KE0"
    })

    const containerStyle = {
        width: '100%',
        height: '90%'
    };


    const center = {
        lat: -17.3938784,
        lng: -66.2462766
    };
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
        <div className='testimonials' id='testimonials'>
            <div className='container'>
                <h2>ENCUENTRA TU IGLESIA</h2>
                <span className='line'></span>
                <div className='content'>
                    <img src={user3} alt='user1'/>
                    <div className='map'>
                        <div style={{flexGrow: '1'}}>
                            {
                                isLoaded ? (
                                    <GoogleMap
                                        apikey={"AIzaSyCZMq97dBS2-WJyj9BRJmWcEBHm-CEUjG0"}
                                        mapContainerStyle={containerStyle}
                                        center={center}
                                        zoom={10}
                                        onLoad={onLoad}
                                        onUnmount={onUnmount}
                                    >
                                        {center && <Marker position={{lat: center.lat, lng: center.lng}}/>}
                                        <></>
                                    </GoogleMap>
                                ) : <></>
                            }
                        </div>
                        {/*<div className='search'>*/}
                        {/*    <button className='button'>BUSCAR</button>*/}
                        {/*</div>*/}
                        <div className='line-bottom'></div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Testimonials
