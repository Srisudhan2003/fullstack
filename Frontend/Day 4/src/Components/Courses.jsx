import React from 'react';
import './Courses.css'; // assuming you have a CSS file for styling

function Courses() {
  return (
    <div>
      <ul id="line">
        <li><img id="inline" src="https://itsmohamedghouse.github.io/ecom.github.io/img/logo.png" alt="Logo" /></li>
        <li id="gap"></li>
        <li><img id="text" src="https://itsmohamedghouse.github.io/ecom.github.io/img/cart.png" alt="Cart" /></li>
      </ul>
      <div>
        <center><h2>Online Courses</h2></center>
      </div>
      <div className="container">
        {/* Course cards */}
        {/* First row */}
        <div className="row">
          {/* Individual course card */}
          <div className="col-md-3">
            <div className="outer">
              <img src="https://itsmohamedghouse.github.io/ecom.github.io/img/course%20(1).jpg" alt="Course 1" />
              <div className="inner">
                <h4>HTML5, CSS3, JavaScript for Beginners</h4>
                <img src="https://itsmohamedghouse.github.io/ecom.github.io/img/stars.png" alt="Rating" />
                <p><span className="strike">₹200</span> <span className="black">₹15</span></p>
                <a href="#" className="Add_cart_Btn"><i className="fa fa-cart-plus"></i> &nbsp;Add to Cart</a>
              </div>
            </div>
          </div>
          {/* Add other course cards similarly */}
        </div>
        {/* Add more rows of course cards similarly */}
      </div>
    </div>
  );
}

export default Courses;
