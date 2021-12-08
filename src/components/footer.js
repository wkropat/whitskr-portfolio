// Footer appears on every page
import React from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';


function Footer() {
    return (
        <Container fluid id="contact">
            <Row>
                <Col><Button href="mailto:wkropat@gmail.com" variant="outline-dark">Email</Button></Col>
                <Col><Button href="https://github.com/wkropat" variant="outline-dark">GitHub</Button></Col>
                <Col><Button href="https://www.linkedin.com/in/wkropat" variant="outline-dark">LinkedIn</Button></Col>
                <Col><Button href="/wkropat-resume.pdf" variant="outline-dark">Resume</Button></Col>
            </Row>

        </Container>
    );
  }

export default Footer;