import React from "react"
import { Heading } from "../common/Heading"
import { lawsuits } from "../data/dummydata"

export const Lawsuits = () => {
  return (
    <>
      <section className='lawsuits'>
        <div className='container'>
          <Heading title='Processos' />
          <div className='content grid3'>
            {lawsuits.map((item) => (
              <div className='box' data-aos='flip-left'>
                <div className='img' data-aos='fade-up'>
                  <img src={item.cover} alt='' data-aos='fade-down' />
                </div>
                <div className='text'>
                  <h3 data-aos='fade-right'>{item.title}</h3>
                  <label data-aos='fade-left'>
                    Por {item.author} {item.date}
                  </label>
                  <p data-aos='fade-up-right'>{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}
