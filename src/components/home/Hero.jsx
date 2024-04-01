import React, { useEffect } from "react";
import { home } from "../data/dummydata";
import Typewriter from "typewriter-effect";

export const Hero = () => {
  // Replace 'YOUR_GOOGLE_DRIVE_LINK' with the actual shareable link of your PDF.
  const cvLink = 'https://drive.google.com/file/d/1TQnkXlo8NoZAEJXn1fQ8QwGPCWz_WEi9/view?usp=sharing';

  return (
    <>
      <section className='hero'>
        {home.map((val, i) => (
          <div className='heroContent' key={i}>
            <h3 className='fontSize' data-aos='fade-right'>
              {val.text}
            </h3>
            <h1>
              <Typewriter
                options={{
                  strings: [`${val.name}`, `${val.post}`, `${val.design}`],
                  autoStart: true,
                  loop: true,
                }}
              />
            </h1>
            <p data-aos='fade-left'>{val.desc}</p>
            
            {/* Use an anchor tag to link to your PDF CV on Google Drive */}
            <a href={cvLink} target="_blank" rel="noopener noreferrer">
              <button className='primaryBtn' data-aos='fade-up-right'>
                Download CV
              </button>
            </a>
          </div>
        ))}
      </section>
    </>
  );
};
