import './About.css'
import imgHistory from '../assets/imagenes/history.png'
import imgMission from '../assets/imagenes/mission.png'
import imgVision from '../assets/imagenes/vision.png'

const About = () => {
    return (
        <div className='section-information'>
            <div className='card'>
                <div className='body-card'>
                    <img src={imgHistory} alt='imgHistory' width='30' height='30'/>
                    <label className='title'>HISTORIA</label>
                    <label className='content'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</label>
                    <button className='button'>Leer mas...</button>
                </div>
                <div className='line-bottom'></div>
            </div>
            <div className='card'>
                <div className='body-card'>
                    <img src={imgMission} alt='imgMission' width='30' height='30'/>
                    <label className='title'>MISION</label>
                    <label className='content'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</label>
                    <button className='button'>Leer mas...</button>
                </div>
                <div className='line-bottom'></div>
            </div>
            <div className='card'>
                <div className='body-card'>
                    <img src={imgVision} alt='imgVision' width='30' height='30'/>
                    <label className='title'>VISION</label>
                    <label className='content'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</label>
                    <button className='button'>Leer mas...</button>
                </div>
                <div className='line-bottom'></div>
            </div>
        </div>
        // <div className='about' id='about'>
        //     <div className='container'>
        //         <img src={pastor} alt='pastor' />
        //         <div className='col-2'>
        //             <h2>Union Bautista Boliviana</h2>
        //             <span className='line'></span>
        //             <p>“La Unión Bautista Boliviana data del 1898 con la llegada de Archivaldo Reekie enviado por el entonces Misionero Bautista Canadiense. Llega a nuestro país el 20 de abril de 1898 con la intención de iniciar la predicación evangelística en el país.
        //                  Cuatro años después organiza la primera iglesia Evangélica Bautista en Bolivia en la ciudad de Oruro cuyo nombre es “Iglesia Bautista Del Señor Resucitado”. Posteriormente organizaría la segunda iglesia en La Paz, el 26 de julio 1904, con el nombre de “Iglesia Bautista Del Prado” y la tercera en Cochabamba, el 21 de mayo de 1905, con el nombre de “Primera Iglesia Bautista de Cochabamba”.
        //                     De esta manera afirmamos sin lugar a duda, que el trabajo evangelístico en Bolivia empezó con los bautistas.
        //                     Reekie a lo largos de estos cien años y fueron los artífices de la obra Bautista.
        //
        //             </p>
        //             <p> El 24 de febrero de 1936, se organiza la primera institución evangelística con el nombre de la Unión Bautista Boliviana.”  </p>
        //             <button className='button'>Explore More</button>
        //         </div>
        //     </div>
        // </div>
    )
}

export default About
