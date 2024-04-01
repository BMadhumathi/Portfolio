import React from "react"
import { Heading } from "../common/Heading"
import { about } from "../data/dummydata"

export const About = () => {
  const cvLink = 'https://drive.google.com/file/d/1TQnkXlo8NoZAEJXn1fQ8QwGPCWz_WEi9/view?usp=sharing';

  return (
    <>
      <section className='about'>
        <div className='container flex'>
          {about.map((val) => (
            <>
              <div className='left' data-aos='fade-down-right'>
                <img src={val.cover} alt='' />
              </div>
              <div className='right' data-aos='fade-down-left'>
                <Heading title='About Me' />
                <p>{val.desc}</p>
                <p>{val.desc1}</p>
                <a href={cvLink} target="_blank" rel="noopener noreferrer">
                <button className='primaryBtn' data-aos='fade-up-right'>
                  Download CV
                </button>
              </a>
              </div>
            </>
          ))}
        </div>
      </section>
    </>
  )
}
