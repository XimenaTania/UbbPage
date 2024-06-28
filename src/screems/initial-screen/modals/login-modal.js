// ImageLoginWithCloseButtonModal.js
import React, {useCallback, useEffect, useState} from 'react';
import './login-modal.css'; // Asegúrate de crear este archivo de estilo
import user3 from '../../../assets/imagenes/cuerpo_izquierdo.png'
import {useNavigate} from "react-router-dom";
import ReCAPTCHA from "react-google-recaptcha";

import { useSelector, useDispatch } from 'react-redux'
import {loginApi} from "../../../services/auth.service";

const LoginModal = (props) => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const loginAction = useSelector((state) => state.auth)
    const dispatch = useDispatch()
    const [isCaptchaVerified, setIsCaptchaVerified] = useState(false);
    const navigate = useNavigate()

    const handleCaptchaVerify = (token) => {
        console.log('Captcha verificado. Token:', token);
        setIsCaptchaVerified(true);
    };

    const handleUsernameChange = (event) => {
        setUsername(event.target.value);
    };

    const handlePasswordChange = (event) => {
        setPassword(event.target.value);
    };

    const nextDashboard = () => {
        if (isCaptchaVerified) {
            loginApi().then((response) => {
                if (response.success) {
                    navigate('/dashboard',{})
                }
            })
        } else {
            // No se ha verificado el CAPTCHA
            console.log('Por favor, verifica el CAPTCHA.');
        }
    }

    const handleLogin = () => {
        // Agrega aquí la lógica de autenticación
        console.log('Usuario:', username);
        console.log('Contraseña:', password);
        // En un entorno de producción, enviarías la información al servidor para la autenticación.

        // Cierra el modal después de iniciar sesión (esto es solo un ejemplo)
        props.onClose();
    };

    return (
        <div className={`image-login-modal ${props.isOpen ? 'open' : ''}`} onClick={props.onClose}>
            <div className="modalContent" onClick={(e) => e.stopPropagation()}>
                <div className="image-section">
                    <img
                        src={user3} // Coloca la URL de tu imagen aquí
                        alt="Imagen"
                        className="modal-image"
                    />
                </div>
                <div className="login-section">
                    <h2>Iniciar Sesión</h2>
                    <input type="text" placeholder="Usuario" value={username} onChange={handleUsernameChange} />
                    <br />
                    <input type="password" placeholder="Contraseña" value={password} onChange={handlePasswordChange} />
                    <br/>
                    <div className="recaptcha">

                        <ReCAPTCHA
                            sitekey="6LdE_nspAAAAAKD823apNyeKS9cavccLB4gPkMBz"
                            onChange={handleCaptchaVerify}
                        />
                    </div>
                    <br />
                    <button className="button" type="button" onClick={nextDashboard}>
                        Iniciar Sesión
                    </button>
                </div>
                <button className="close-button" onClick={props.onClose}>
                    X
                </button>
            </div>
        </div>
    );
};

export default LoginModal;
