import React from "react";

const Features = () => {
  return (
    <div id="features">
    <div className="container-fluid">
      <div className="row row-cols-1 row-cols-md-3 features">

        <div className="col feature-card text-center">
     
        <i className="fa-sharp fa-solid fa-circle-check"></i>
          <h3 >Easy to use.</h3>
          <p>So easy to use, even your dog could do it.</p>
        </div>
        <div className="col feature-card">
        <i className="fa-solid fa-bullseye"></i>
          <h3>Elite Clientele</h3>
          <p>We have all the dogs, the greatest dogs.</p>
        </div>
        <div className="col feature-card">
        <i className="fa-solid fa-heart"></i>
          <h3>Guaranteed to work.</h3>
          <p>Find the love of your dog's life or your money back.</p>
        </div>
      </div>
    </div>
    </div>
  );
};

export default Features;
