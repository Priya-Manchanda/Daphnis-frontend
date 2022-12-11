import React from "react";
function Design(props) {
  return (
    <section id="pricing">
      <div className="row">
        <div className="col-lg-4 col-md-6">
          <div className="card">
            <div className="card-body">
              <img width="100%" height="100%" src={props.img}></img>
              <p className="bold">{props.text}</p>
              <p className="price">
                {props.price} <span className="stripe">{props.stripe}</span>
              </p>
              <p className="bold">{props.company}</p>
              <p className="stripe">{props.location}</p>
            </div>
            <div className="card-footer">
              <i class="fa-solid fa-paper-plane-top"></i>
              <h3 className="contact">{props.contact}</h3>
            </div>
          </div>
        </div>
        <div className="col-lg-4 col-md-6">
          <div className="card">
            <div className="card-body">
              <img width="100%" height="100%" src={props.img}></img>
              <p className="bold">{props.text}</p>
              <p className="price">
                {props.price} <span className="stripe">{props.stripe}</span>
              </p>
              <p className="bold">{props.company}</p>
              <p className="stripe">{props.location}</p>
            </div>
            <div className="card-footer">
              <i className="fa-solid fa-paper-plane-top"></i>
              <h3 className="contact">{props.contact}</h3>
            </div>
          </div>
        </div>
        <div className="col-lg-4 col-md-12">
          <div className="card">
            <div className="card-body">
              <img width="100%" height="100%" src={props.img}></img>
              <p className="bold">{props.text}</p>
              <p className="price">
                {props.price} <span className="stripe">{props.stripe}</span>
              </p>
              <p className="bold">{props.company}</p>
              <p className="stripe">{props.location}</p>
            </div>
            <div className="card-footer">
              <i class="fa-solid fa-paper-plane-top"></i>
              <h3 className="contact">{props.contact}</h3>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Design;
