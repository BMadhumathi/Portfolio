import React from "react";
import { Heading } from "../common/Heading";
import { contact } from "../data/dummydata";

export const Contact = () => {
  return (
    <>
      <div className='contact'>
        <div className='container'>
          <Heading title='Keep In Touch' />
          <div className='content flexsb'>
            <div className='right'>
              <form>
                <div className='flex'>
                  <input type='text' placeholder='Name' data-aos='flip-left' />
                  <input type='email' placeholder='Email' data-aos='flip-right' />
                </div>
                <input type='email' placeholder='Subject' data-aos='flip-up' />
                <textarea name='' id='' cols='30' rows='10' data-aos='flip-down'></textarea>
                <button data-aos='zoom-in-up'>Submit</button>
              </form>
            </div>
            <div className='left'>
              {contact.map((item, index) => (
                <div className='box' data-aos='zoom-in' key={index}>
                  <i>{item.icon}</i>
                  {index === contact.length - 1 ? (
                    <>
                      <p><a href={`mailto:${item.text1}`}>{item.text1}</a></p>
                      <p><a href={`mailto:${item.text2}`}>{item.text2}</a></p>
                    </>
                  ) : (
                    <>
                      <p>{item.text1}</p>
                      <p>{item.text2}</p>
                    </>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
