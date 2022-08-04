import React from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import styles from "../../styles/Home.module.scss";
import AppDropDown from "../DropDown";

const AppBar = () => {
  return (
    <div className={styles.appBar}>
      <Container>
        <Row>
          <Col md={8} lg={7} xl={6}>
            <div className={styles.leftBox}>
              <div className={styles.info}>
                <p className={styles.address}>Address</p>
                <p className={styles.city}>International City, Dubai</p>
              </div>
              <div className={styles.info}>
                <p className={styles.address}>Email Us</p>
                <p className={styles.city}>Support@rfglogistics.ae</p>
              </div>
              <div className={styles.info}>
                <p className={styles.address}>Phone Number</p>
                <p className={styles.city}>+971 50 0000 001</p>
              </div>
            </div>
          </Col>
          <Col md={4} lg={5} xl={6}>
            <div className={styles.rightBox}>
              <AppDropDown />
              <Button>Request A Quote</Button>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default AppBar;
