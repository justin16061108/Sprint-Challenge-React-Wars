import React from "react";
import styled from "styled-components";


const Card = styled.div`
    width: 80%;
    background: rgba(225,225,225, 0.7);
    padding: 1% 0;
    border: 1px dotted grey;
    font-family: cursive;
`; 

const Names = styled.h2`
    color: brown;
    font-size: 2.5rem;
`;

const Description = styled.p`
    font-size: 1.5rem; 
    font-weight: bold;
`;

const CharacterCard = props => {

  return (
    <Card>
      <Names>{props.name}</Names>
            <Description>Born: {props.birthyear}</Description>
            <Description>Gender: {props.gender}</Description>
            <Description>Hair Color: {props.hair_color}</Description>
            <Description>Height: {props.height}</Description>
    </Card>
  );
};

export default CharacterCard;
