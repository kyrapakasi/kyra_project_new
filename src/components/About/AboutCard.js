import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Halo, my name is <span className="purple">Kyra Pakasi </span>
            I'm from <span className="purple"> Tondano RERER.</span>
            <br />
            I am a second year third semester student studying at Universitas
            Klabat.
            <br />
            I live in Edelweiss Dormitory.
            <br />
            I majored in information systems from the computer science faculty
            <br />
            This major makes me more interested than other majors.
            <br />
            <br />
            While i studying at this place, i only learned a little bit like
            <br />
            <span className="purple">
              Computer programming and Data Structures using Python{" "}
            </span>
            <br />
            This semester i just got to know the java script language in this
            class -Front end-
            <br />
            <br />
            So that forgive me if i'm not 100% good at this.
          </p>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
