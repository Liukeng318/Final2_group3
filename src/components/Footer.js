import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import "./Footer.css";

export const Footer = () => {
  return (
    <footer className="bg-black text-white">
      <Container className="p-4">
        <Row>
          <Col md={4}>
            <h4>About Us</h4>
            <p> Ini adalah website E-Commerce yang di buat untuk melengkapi tugas Project Final 2 Study Independen Mitra Hactive8..</p>
          </Col>
          <Col md={4}>
            <h4>Contact Us</h4>
            <p>Email: mayendraendra318@gmail.com</p>
            <p>Nomor_HP: 083180070248</p>
          </Col>
          <Col md={4}>
            <h4>Follow Us</h4>
            <p>
              Linkdin :{" "}
              <a href="https://mayendra-prt.vercel.app/">Linkdin</a>
            </p>
            <p>
              Github : <a href="https://github.com/Liukeng318">Github</a>
            </p>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};
