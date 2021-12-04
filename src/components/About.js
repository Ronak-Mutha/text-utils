import React from "react";
import Container from "react-bootstrap/Container";
import Accordion from "react-bootstrap/Accordion";

export default function About() {
  return (
    <Container>
      <p>
        Are you frustrated manually doing text manipulation like changing case,
        removing/trimming extra spaces? <br />
        Ever thought of having a tool that can do it for you while you can just
        copy your problem in the tool and have it do all manual work for you and
        you can then just paste the output for your work? <br />
        Don't worry we got you covered. Presenting to you our new tool
        Text-Utils that will do all the hard labor for you while you can enjoy
        the fruit. <br />
        Text-Utils is a word counter and a character counting utility that can
        be used to manipulate your text in the way you want. You can remove
        extra spaces, copy the manipulated text as well as convert your text
        from Uppercase to lowercase and lowercase to Uppercase.
      </p>
      <h1> FAQ </h1>
      <Accordion defaultActiveKey="0">
        <Accordion.Item eventKey="0">
          <Accordion.Header>What is Text-Utils?</Accordion.Header>
          <Accordion.Body>
            Text-Utils is a word counter and a character counting utility which
            can be used to manipulate your text in the way you want.
          </Accordion.Body>
        </Accordion.Item>
        <Accordion.Item eventKey="1">
          <Accordion.Header>
            What are the functionalities that Text-Utils currently provide?
          </Accordion.Header>
          <Accordion.Body>
            Text-Utils currently supports functionality like text transformation
            from uppercase to lowercase, lowercase to uppercase, text to
            titlecase,and removing extra spaces.
          </Accordion.Body>
        </Accordion.Item>
        <Accordion.Item eventKey="2">
          <Accordion.Header>Do I need to pay?</Accordion.Header>
          <Accordion.Body>
            No, Text-Utils is completely free platform for your text
            manipulation related task.
          </Accordion.Body>
        </Accordion.Item>
        <Accordion.Item eventKey="3">
          <Accordion.Header>
            I can't find the text manipulation feature that I wanted to perform
          </Accordion.Header>
          <Accordion.Body>
            Currently we only support features like text transformation from
            uppercase to lowercase, lowercase to uppercase, text to
            titlecase,and removing extra spaces. We might add new features in
            future.{" "}
          </Accordion.Body>
        </Accordion.Item>
        <Accordion.Item eventKey="4">
          <Accordion.Header>Browser compatibility</Accordion.Header>
          <Accordion.Body>
            Text-Utils works in any web browsers such as Chrome, Firefox,
            Internet Explorer, Safari, Opera.
          </Accordion.Body>
        </Accordion.Item>
      </Accordion>
    </Container>
  );
}
