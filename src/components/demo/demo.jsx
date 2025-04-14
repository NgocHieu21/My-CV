import { Data } from './Data';
import "./demo.css";
import React, { useState } from 'react';

const Demo = () => {
  const [items, setItems] = useState(Data);

  const filterItem = (categoryItem) => {
    const updatedItems = Data.filter((curElem) => {
      return curElem.category === categoryItem;
    });
    setItems(updatedItems);
  };

  return (
    <section className="work container section" id="work">
      <h2 className="section__title">Recent Projects</h2>
      <div className="work__filters">
        <span className="work__item" onClick={() => setItems(Data)}>Everything</span>
        <span className="work__item" onClick={() => filterItem('App')}>App</span>
        <span className="work__item" onClick={() => filterItem('UX/UI')}>UX/UI</span>
      </div>

      <div className="work__container grid">
        {items.map((elem) => {
          const { id, image, video } = elem;
          return (
            <div className="work__card" key={id}>
              <div className="work__thumbnail">
                {video ? (
                  <video className="work__img" controls>
                    <source src={video} type="video/mp4" />
                    Your browser does not support the video tag.
                  </video>
                ) : (
                  <img src={image} alt="" className="work__img" />
                )}
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default Demo;
