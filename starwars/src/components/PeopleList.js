import React, { useState, useEffect } from "react";
import axios from "axios";
import { Container, Col } from "reactstrap";
import LukeSkywalker from "./LukeSkywalker.js";



export default function PeopleList(props) {

  const [people, setPeople] = useState([]);
//   const [api_key] = "cy0qFcpy5DbERTfHTRT1Mv7j6vtiv6kcUht9BF0o";
// console.log(copyright,"this is my initial state");

  useEffect(() => {
    async function fetchData() {
      try {
        const peopleList = await axios.get(
          "https://swapi.co/api/people/1/"
        );
        // 12
        
        setPeople(peopleList.data);
      } catch (err) {
        console.log(err);
      } //try block
    } // fetchData()
    fetchData();
  }, []);

  return (
    <Container>
      <Col>
      <LukeSkywalker
        people={people.people}
        name={people.name}
        height={people.height}
        mass={people.mass}
        hair_color={people.hair_color}
        skin_color={people.skin_color}
        eye_color={people.eye_color}
        birth_year={people.birth_year}
        gender={people.gender}
        homeworld={people.homeworld}
        films={people.films}
        species={people.species}
        vehicles={people.vehicles}
        starships={people.starships}
        created={people.created}
        edited={people.edited}
        url={people.url}
      />
      </Col>
    </Container>
  );
}