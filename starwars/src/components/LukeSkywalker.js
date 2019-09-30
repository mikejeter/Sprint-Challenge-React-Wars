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
          <CardTitle>Name:{props.name}</CardTitle>
        </CardBody>
        <CardBody>
          <CardText>{props.height}</CardText>
          <CardText>{props.mass}</CardText>
          <CardText>{props.hair_color}</CardText>
          <CardText>{props.skin_color}</CardText>
          <CardText>{props.eye_color}</CardText>
          <CardText>{props.birth_year}</CardText>
          <CardText>{props.gender}</CardText>
          <CardLink href={props.homeworld}></CardLink>
          <CardLink href={props.films}></CardLink>
          <CardLink href={props.species}></CardLink>
          <CardLink href={props.vehicles}></CardLink>
          <CardLink href={props.starships}></CardLink>
          <CardText>{props.created}</CardText>
          <CardText>{props.edited}</CardText>
          <img width="100%" src={`${props.url}`} alt="" />
        </CardBody>
      </Card>
      </Col>
    </div>
  );
}
