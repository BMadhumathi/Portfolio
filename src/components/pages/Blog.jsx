import React, { useState, useEffect } from "react";
import { Heading } from "../common/Heading";
import { blog } from "../data/dummydata";

export const Blog = () => {
  const [certificateImage, setCertificateImage] = useState(null);

  // Function to handle displaying certificate image
  const viewCertificate = (certificate) => {
    setCertificateImage(certificate);
  };

  // Function to close certificate image
  const closeCertificate = () => {
    setCertificateImage(null);
  };

  useEffect(() => {
    const handleClickOutside = (event) => {
      const modal = document.querySelector(".modal-content");
      if (modal && !modal.contains(event.target)) {
        closeCertificate();
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <>
      <section className="blog">
        <div className="container">
          <Heading title="Courses" />
          <div className="content grid3">
            {blog.map((item) => (
              <div className="box" data-aos="flip-left" key={item.id}>
                <div className="img" data-aos="fade-up">
                  <img src={item.cover} alt="" data-aos="fade-down" />
                </div>
                <div className="text">
                  <h3 data-aos="fade-right">{item.title}</h3>
                  <label data-aos="fade-left">
                    By {item.author} {item.date}
                  </label>
                  <p data-aos="fade-up-right">{item.desc}</p>
                  {/* Button to view certificate */}
                  <button onClick={() => viewCertificate(item.certificate)} style={{marginLeft:"80px",fontSize: "12px", padding: "7px 8px", color:"black" }}>View Certificate</button>
                  </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Modal to display certificate image */}
      {certificateImage && (
        <div className="modal" style={{ display: "block" }}>
          <div className="modal-content" style={{ textAlign: "center", position: "fixed", top: "50%", left: "50%", transform: "translate(-50%, -50%)", zIndex: "999", backgroundColor: "#fff", padding: "20px", border: "1px solid #ccc", borderRadius: "5px" }}>
            <span className="close" onClick={closeCertificate}>
              &times;
            </span>
            <img src={certificateImage} alt="Certificate" style={{ maxWidth: "100%", maxHeight: "100vh" }} />
          </div>
        </div>
      )}
    </>
  );
};
