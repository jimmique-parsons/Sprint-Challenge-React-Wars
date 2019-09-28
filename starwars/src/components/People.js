import React from 'react';
import styled from 'styled-components';

const capitalizeText = (string) =>
        string ? `${string.toUpperCase()}` : '';

const Card = styled.div`
    background: rgba(255 ,255, 255, 0.7);
    color: rgba(0, 0, 0, 0.7);
    padding: 2%;
    margin: 10px;
    border-radius: 5px;
    text-align: left;
    width: 14%;
`;        

export default function People({info}) {
    return (
        <Card>
            <h3>Name: {info.name}</h3>
            <p>Height: {info.height}</p>
            <p>Mass: {info.mass}</p>
            <p>Hair Color: {capitalizeText(info.hair_color)}</p>
            <p>Skin Color: {capitalizeText(info.skin_color)}</p>
            <p>Eye Color: {capitalizeText(info.eye_color)}</p>
            <p>Birth Year: {info.birth_year}</p>
            <p>Gender: {capitalizeText(info.gender)}</p> 
        </Card>
    )
}