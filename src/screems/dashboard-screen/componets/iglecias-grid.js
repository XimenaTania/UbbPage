import React, {useState} from 'react';
import './iglecias-grid.css'
import imgHistory from "../../../assets/imagenes/history.png";
import quoteIcon from "../../../assets/imagenes/quote-icon.png";

const IgleciasGrid = ({ data , item, setItem}) => {


    const dataMajor = data.filter((item) => item.major)
    const handleClick = (itemSelect) => {
        setItem(itemSelect)
    }
    return (
        <div className="three-column-grid">

            <div className='contentHeader' onClick={()=>handleClick(dataMajor[0])}>
                <div className='headerIglecia'>
                    <div className='body-card-iglecia'>
                        <div className='contentLeft'>
                            <label className='titleC'>{dataMajor[0].name}</label>
                            <label className='content'>{dataMajor[0].description} </label>
                        </div>
                        <div className='contentRigth'>
                            <img className='imgC' src={quoteIcon} alt='quoteIcon' />
                        </div>
                    </div>
                    <div className='line-bottom'></div>
                </div>
            </div>
                <div className='section-information'>
                    {data.map((item, index) => (
                        !item.major? (
                            <div key={index} className='card' onClick={()=>handleClick(item)}>
                                <div className='body-card'>
                                    <img src={imgHistory} alt='imgHistory' width='30' height='30'/>
                                    <label className='title'>{item.name}</label>
                                    <label className='content'>{item.description}</label>
                                </div>
                                <div className='line-bottom'></div>
                            </div>
                        ) : <></>
                    ))}
                </div>

        </div>
    );
};

export default IgleciasGrid;