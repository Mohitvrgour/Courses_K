import React from "react";
import Card from "react-bootstrap/Card";

interface ElementData {
  id: number;
  rname: string;
  imgdata: string;
  address: string;
}

interface CardsProps {
  data: ElementData[];
}

const Cards: React.FC<CardsProps> = ({ data }) => {
  return (
    <>
      {data.map((element) => (
        <Card key={element.id} style={{ width: "20rem", border:"none"}} className="mb-3 hove ml-5 mr-10">
           <div className="card-attach">
          <Card.Img variant="top" className="cd" src={element.imgdata} />
          <div className="card_body">
            <div className="upper_data d-flex justify-content-between align-items-center">
              <h4 className="mt-2">{element.rname}</h4>
            </div>

            <div className="lower_data d-flex justify-content-between">
              <h5>{element.address}</h5>
            </div>

            <div className="extra"></div>

            <div className="last_data d-flex justify-content-between align-items-center">
              <button className='btn text-light mt-1 mb-1' style={{ backgroundColor: '#008000'}}>Start Now </button>
            </div>
          </div>
          </div>
        </Card>
      ))}

    </>
  );
}

export default Cards;
