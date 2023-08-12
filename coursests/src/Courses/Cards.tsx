import React from "react";
import Card from "react-bootstrap/Card";

interface ElementData {
  id: number;
  rname: string;
  imgdata: string;
  address: string;
  price: string;
  rating: string;
}

interface CardsProps {
  data: ElementData[];
}

const Cards: React.FC<CardsProps> = ({ data }) => {
  return (
    <>
      {data.map((element) => (
        <Card key={element.id} style={{ width: "22rem", border: "none" }} className="mb-4 hove ml-10 mr-6">
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
              <button className='btn text-light mt-1 mb-1' style={{ backgroundColor: '#008000' }}>Enroll Now</button>
            </div>
          </div>
        </Card>
      ))}

      <h2 className='dev'>For Contributors</h2>
      <div className="card-body">
        <h5 className="card-title">Create Assignments</h5>
        <p className="card-text">Here you can create assignments And host Contests</p>
        <a href="#" className="btn btn-primary">ADD</a>
      </div>
    </>
  );
}

export default Cards;
