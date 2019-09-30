import React from 'react';
import {
  Card, Col, CardText, CardBody, CardLink,
  CardTitle
} from 'reactstrap';

export default function LukeSkywalker(props) {
  return (
    <div>
     <Col>
      <Card>
        <CardBody>
          <CardTitle>{props.name}</CardTitle>
        </CardBody>
        <img width="100%" src="/assets/318x180.svg" alt="Card image cap" />
        <CardBody>
          <CardText>{props.height}</CardText>
          <CardText>{props.mass}</CardText>
          <CardText>{props.hair_color}</CardText>
          <CardText>{props.skin_color}</CardText>
          <CardText>{props.eye_color}</CardText>
          <CardText>{props.birth_year}</CardText>
          <CardText>{props.gender}</CardText>
          <CardLink href={props.homeworld}></CardLink>
          <CardLink href={props.films.Array[5]}></CardLink>
          <CardLink href={props.species}></CardLink>
          <CardLink href={props.vehicles.Array[2]}></CardLink>
          <CardLink href={props.starships.Array[2]}></CardLink>
          <CardText>{props.birth_year}</CardText>
          <CardText>{props.birth_year}</CardText>
          <CardLink href={props.species}></CardLink>
        </CardBody>
      </Card>
      </Col>
    </div>
  );
}
