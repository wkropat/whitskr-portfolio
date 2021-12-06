// Footer appears on every page
import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';


function Footer() {
    return (


        <Container>
            <Row>
                <Col>
                <a href="mailto:wkropat@gmail.com" target="_blank" rel="noreferrer">wkropat@gmail.com</a>
                </Col>
                <Col>
                <a href="https://github.com/wkropat" target="_blank" rel="noreferrer">GitHub</a>
                </Col>
                <Col>
                <a href="https://www.linkedin.com/in/wkropat" target="_blank" rel="noreferrer">LinkedIn</a>
                </Col>
                <Col>
                <a href="./Assets/files/wkropat-resume.pdf" target="_blank" rel="noreferrer">Resume</a>
                </Col>
            </Row>

        </Container>
    );
  }


export default Footer;