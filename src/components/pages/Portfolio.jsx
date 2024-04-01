import React, { useState } from "react";
import { Heading } from "../common/Heading";
import { portfolio } from "../data/dummydata";

export const Portfolio = () => {
  const [list, setLists] = useState(portfolio);
  const [category, setCategory] = useState(["all", "Full Stack", "Frontend", "Console"]);

  const filterItems = (category) => {
    const newItems = portfolio.filter((item) => item.category === category || category === "all");
    setLists(newItems);
  };

  return (
    <>
      <article>
        <div className="container">
          <Heading title="Projects" />
          <div className="catButton">
            {category.map((category) => (
              <button className="primaryBtn" onClick={() => filterItems(category)} key={category}>
                {category}
              </button>
            ))}
          </div>
          <div className="content grid3">
            {list.map((item) => (
              <div className="box" key={item.id} style={{ width: "400px", height: "400px" }}>
                <div className="card" style={{ background: "white", width: "100%", height: "100%", display: "flex", flexDirection: "column", justifyContent: "space-between" }}>
                  <img src={item.cover} alt="" style={{ width: "100%", height: "200px", objectFit: "cover" }} />
                  <div className="details" style={{ padding: "10px", color: "black" }}>
                    <h3>{item.name}</h3>
                    <p style={{color:"black"}}>{item.title}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </article>
    </>
  );
};
