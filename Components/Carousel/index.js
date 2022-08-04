import React from "react";
import Carousel from "react-bootstrap/Carousel";
import Image from "next/image";
import styles from "./styles.module.scss";
import slider1 from "../../public/slider1.png";
import slider2 from "../../public/slider1.png";
import slider3 from "../../public/slider1.png";
import { Button } from "react-bootstrap";

function CarouselSlider() {
  return (
    <Carousel fade interval="5000000">
      <Carousel.Item>
        <Image
          className="d-block"
          src={slider1}
          alt="slider 1 image"
          layout="responsive"
        />
        <Carousel.Caption>
          <div className="content">
            <h2 className={styles.slider_heading}>
              RFG Logistic Solution From Pickup to Designation
            </h2>
            <p>
              RFG Logistics provides best of the kind services that will make
              our customer’s experience pleasantly easy and unforgettable.{" "}
            </p>
            <Button variant="primary" size="lg">
              Learn More
            </Button>
          </div>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <Image
          className="d-block "
          src={slider2}
          alt="slider 2 image"
          layout="responsive"
        />
        <Carousel.Caption>
          <div className="content">
            <h2 className={styles.slider_heading}>
              We are the best in town
            </h2>
            <p>
              RFG Logistics provides best of the kind services that will make
              our customer’s experience pleasantly easy and unforgettable.{" "}
            </p>
            <Button variant="primary" size="lg">
              View More
            </Button>
          </div>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <Image
          className="d-block"
          src={slider3}
          alt="slider 3 image"
          layout="responsive"
        />

        <Carousel.Caption>
          <div className="content">
            <h2 className={styles.slider_heading}>
              RFG Logistic Solution From Pickup to Designation
            </h2>
            <p>
              RFG Logistics provides best of the kind services that will make
              our customer’s experience pleasantly easy and unforgettable.{" "}
            </p>
            <Button variant="primary" size="lg">
              Get More
            </Button>
          </div>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}

export default CarouselSlider;
