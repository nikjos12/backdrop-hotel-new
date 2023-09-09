import React from "react";
import Title from "./Title";
import { Services } from "./Data";

const Service = () => {
  return (
    <div>
      <section className="section services" id="services">
        <Title title="our" subTitle="services" />

        <div className="section-center services-center">
          <ul>
            {Services.map((service) => {
              return (
                <li key={service.id}>
                  <article className="service">
                    <span className="service-icon">
                      <i className={service.icon}></i>
                    </span>
                    <div className="service-info">
                      <h4 className="service-title">{service.title}</h4>
                      <p className="service-text">{service.text}</p>
                    </div>
                  </article>
                  ;
                </li>
              );
            })}
          </ul>
          ;
        </div>
      </section>
    </div>
  );
};

export default Service;
