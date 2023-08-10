import React from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";

const Cards = ({ data }) => {
  return (
    <>
      {
        data.map((element, k) => {
          return (
            <>
              <Card style={{ width: "22rem", border: "none" }} className="mb-4 hove ml-10 mr-6">
                <Card.Img variant="top" className="cd" src={element.imgdata} />


                <div className="card_body">
                  <div className="upper_data d-flex justify-content-between align-items-center">
                    <h4 className="mt-2">{element.rname}</h4>
                    <span>{element.rating}&nbsp;★</span>
                  </div>

                  <div className="lower_data d-flex justify-content-between">
                    <h5>{element.address}</h5>
                  </div>


                  <div className="extra"></div>

                  <div className="last_data d-flex justify-content-between align-items-center">
                    <span className="price">{element.price}</span>
                    <button className='btn text-light mt-1 mb-1 ' style={{ backgroundColor: '#008000' }}>Enroll Now</button>
                  </div>
                </div>
              </Card>
            </>
          )
        })}

      <h2 className='dev'>For Contributors</h2>
      <div class="card-body">
        <h5 class="card-title">Create Assignments</h5>
        <p class="card-text">Here you can create assignments And host Contests</p>
        <a href="#" class="btn btn-primary">ADD</a>
      </div>
    </>
  )
}

export default Cards