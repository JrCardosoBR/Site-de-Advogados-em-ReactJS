import React from "react"
import { Heading } from "../common/Heading"
import { contact } from "../data/dummydata"

export const Contact = () => {
  return (
    <>
      <div className='contact'>
        <div className='container'>
          <Heading title='Contate-nos' />
          <div className='content flexsb'>
            <div className='right'>
              <form>
                <div className='flex'>
                  <input type='text' placeholder='Nome' data-aos='flip-left' />
                  <input type='email' placeholder='Email' data-aos='flip-right' />
                </div>
                <input type='email' placeholder='Assunto' data-aos='flip-up' />
                <textarea name='' id='' cols='30' rows='10' data-aos='flip-down'></textarea>
                <button data-aos='zoom-in-up'>ENVIAR</button>
              </form>
            </div>
            <div className='left'>
              {contact.map((item) => (
                <div className='box' data-aos='zoom-in'>
                  <i>{item.icon}</i>
                  <p>{item.text1}</p>
                  <p>{item.text2}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
