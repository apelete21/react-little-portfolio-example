import React from 'react'
import card from './card1.jpg'
import award from  "./img.png"

const about = () => {
  return (
        <div className='a'>
            <div className="a-left">
                <div className="a-card bg"></div>
                <div className="a-card">
                    <img src={card} alt='' className="a-img" />
                </div>
            </div>
            <div className="a-right">
                <h1 className="a-title">About Me</h1>
                <p className="a-sub">
                    Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dicta tenetur illo deserunt ipsam quasi dolorem culpa!
                </p>
                <p className="a-desc">
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit. Obcaecati nisi non asperiores cum harum possimus amet eum repudiandae blanditiis deleniti rem aut dolorem pariatur excepturi eius officiis maxime reprehenderit odio, mollitia culpa deserunt impedit aperiam, accusantium quis!
                </p>
                <div className="a-award">
                    <img src={award} alt="" className="a-award-img" />
                    <div className="a-award-texts">
                        <h3 className='a-award-title'>
                            International Design Awards 2021
                        </h3>
                        <p className="a-award-desc">
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Exercitationem quae optio similique ut eveniet.
                        </p>
                    </div>
                </div>
            </div>
        </div>
  )
}

export default about