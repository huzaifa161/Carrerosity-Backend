import React,{useState} from 'react'
import {Carousel} from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css';


const CarasoulComponent = (props) => {

    const [index, setIndex] = useState(0);

    const handleSelect = (selectedIndex, e) => {
      setIndex(selectedIndex);
    };
  
    return (
      <Carousel activeIndex={index} onSelect={handleSelect} className="carasoul123">
        <Carousel.Item interval={1000}>
          <img
            className=" w-100 carasoul123"
            src={require("./image1.jpg").default}
            alt="First slide"
          />
          <Carousel.Caption>
            <h3>First slide label</h3>
            <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item interval={1000}>
          <img
            className=" w-100 carasoul123"           
             src={require("./image2.jpg").default}

            alt="Second slide"
          />
  
          <Carousel.Caption>
            <h3>Second slide label</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item interval={1000}>
          <img
           src={require("./image3.jpg").default}
            className=" w-100 carasoul123"
           
            alt="Third slide"
          />
  
          <Carousel.Caption>
            <h3>Third slide label</h3>
            <p>
              Praesent commodo cursus magna, vel scelerisque nisl consectetur.
            </p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    );
  }
  

export default CarasoulComponent