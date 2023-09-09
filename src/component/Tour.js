import React from "react";
import Title from "./Title";
import { Tours } from "./Data";

const Tour = () => {
  return (
    <div>
      <section className="section" id="tours">
        <Title title="Featured" subTitle="Tours" />
        <div className="section-center featured-center">
          {Tours.map((tour) => {
            return (
              <article key={tour.id} className="tour-card">
                <div className="tour-img-container">
                  <img src={tour.img} className="tour-img" alt="" />
                  <p className="tour-date">{tour.date}</p>
                </div>
                <div className="tour-info">
                  <div className="tour-title">
                    <h4>{tour.title}</h4>
                  </div>
                  <p>{tour.text}</p>
                </div>
              </article>
            );
          })}
        </div>
      </section>
    </div>
  );
};

export default Tour;
