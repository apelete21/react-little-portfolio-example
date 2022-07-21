import React from 'react'
import Icon from '../../img/icon.svg'

const contact = () => {
    
  return (
    <div className='c'>
      <div className="c-bg"></div>
      <div className="c-wrapper">
        <div className="c-left">
          <h1 className="c-title">
            Let's discuss your project
          </h1>
          <div className="c-info">
            <div className="c-info-item">
              <img src={Icon} alt="" className="c-icon" />
              (00) 228 93 91 75 91
            </div>
            <div className="c-info-item">
              <img src={Icon} alt="" className="c-icon" />
              adzohonouapelete@gmail.com
            </div>
            <div className="c-info-item">
              <img src={Icon} alt="" className="c-icon" />
              Adidogomé-GBOMAME, Lomé - TOGO
            </div>
          </div>
        </div>
        <div className="c-right">
          <p className="c-desc">
            <span>What's your story? </span>Get in touch. Always available for freelancing if the right project comes along me.
          </p>
          <form>
            <input type="text" placeholder='Name' name='user_name' />
            <input type="text" placeholder='Subject' name='user_subject' />
            <input type="text" placeholder='Email' name='user_email' />
            <textarea name="message" placeholder='Message' rows="5"></textarea>
            <button>Submit</button>
          </form>
        </div>
      </div>
    </div>
  )
}

export default contact
