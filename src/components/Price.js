import React from "react";

const Price = () => {
  return (
    <div id="price">
      <h2 className="big-heading">A Plan for Every Dog's Needs</h2>
      <p>Simple and affordable price plans for your and your dog.</p>

      <div className="row row-cols-1 row-cols-md-3 g-4">
        <div className="col">
          <div className="card h-100">
            <h3 className="card-header">Chihuahua</h3>
            <div className="card-body">
              <h2>Free</h2>

              <p>5 Matches Per Day</p>
              <p>10 Messages Per Day</p>
              <p>Unlimited App Usage</p>
              <div />
            </div>
            <div >
              <button className="btn w-75  btn-danger">Sign Up</button>
            </div>
          </div>
        </div>
        <div className="col">
          <div className="card h-100">
            <h3 className="card-header">Labrador</h3>{" "}
            <div className="card-body">
              <h2>₹399 / m</h2>

              <p>Unlimited Matches</p>
              <p>Unlimited Messages</p>
              <p>Unlimited App Usage</p>
            </div>
            <div >
              <button className="btn w-75  btn-danger">Sign Up</button>
            </div>
          </div>
        </div>
        <div className="col">
          <div className="card h-100">
            <h3 className="card-header">Mastiff</h3>
            <div className="card-body">
              <h2>₹499 / m</h2>

              <p>Pirority Listing</p>
              <p>Unlimited Matches</p>
              <p>Unlimited Messages</p>
              <p>Unlimited App Usage</p>
            </div>
            <div >
              <button className="btn w-75 btn-danger">Sign Up</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Price;
