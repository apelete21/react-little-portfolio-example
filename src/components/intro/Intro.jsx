import React from 'react'
import Profil from './me.png'

const exporttable = () => {
    return (
        <div className='i'>
            <div className='i-left'>
                <div className="i-left-wrapper">
                    <h4 className='i-intro'>Hello My name is</h4>
                    <h1 className='i-name'>Apelete ADZ</h1>
                    <div className="i-title">
                        <div className="i-title-wrapper">
                            <div className="i-title-item">Web Developper</div>
                            <div className="i-title-item">UI/UX Designer</div>
                            <div className="i-title-item">Photographer</div>
                            <div className="i-title-item">Writer</div>
                            <div className="i-title-item">Content Creator</div>
                        </div>
                    </div>
                    <div className="i-intro-text">
                        I design and Develop services for customers of all sizes,
                        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ullam harum ad ea nulla sunt, modi enim expedita magni. Magnam, vel! Dicta excepturi!
                    </div>
                </div>
            </div>
            <div className='i-right'>
                <img alt="" src={Profil} className="i-img"/>
            </div>
        </div>
    )
}

export default exporttable