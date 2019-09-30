import React, { useState, useEffect } from "react";
import axios from "axios";
import { Container, Row } from "reactstrap";
import PhotoCard from "./PhotoCard.js";



export default function PoepleList(props) {

  const [copyright, setCopyright] = useState([]);
//   const [api_key] = "cy0qFcpy5DbERTfHTRT1Mv7j6vtiv6kcUht9BF0o";
// console.log(copyright,"this is my initial state");

  useEffect(() => {
    async function fetchData() {
      try {
        const poepleList = await axios.get(
          "https://swapi.co/api/people/1/"
        );
        // 12
        
        setCopyright(poepleList.data);
      } catch (err) {
        console.log(err);
      } //try block
    } // fetchData()
    fetchData();
  }, []);

  return (
    <Container>
       <Row> 
            <PhotoCard
            copyright={copyright.copyright}
            date={copyright.date}
            explanation={copyright.explanation}
            hdurl={copyright.url}
            key={copyright.id}
            />
        </Row>  
    </Container>
  );
}