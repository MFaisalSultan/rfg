import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import styles from "../../styles/Home.module.scss"

const AppBar = () => {
  return (
    <div className={styles.appBar}>
      <Container>
        <Row>
          <Col>
            <div className={styles.info}>
              <p className={styles.name}>Address</p>
              <p className={styles.dtl}>International City, Dubai</p>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default AppBar;
