import React from 'react';
import styled from 'styled-components';

const capitalizeText = (string) =>
        string ? `${string.toUpperCase()}` : '';

const Card = styled.div`
    background: rgba(33, 33, 33, 0.6);
    color: rgba(255, 228, 1);
    padding: 1% 2%;
    margin: 10px;
    border-radius: 5px;
    text-align: left;
    width: 14%;
`;

const Name = styled.h2`
    font-family: 'Exo 2', sans-serif;
    text-align: center;
    margin-bottom: 5px;
`;

const Stat = styled.h4`
font-family: 'Exo 2', sans-serif;
font-weight: 400;
`;

export default function People({info}) {
    return (
        <Card>
            <Name>Name: {info.name}</Name>
            <Stat><strong>Height:</strong> {info.height}</Stat>
            <Stat><strong>Mass:</strong> {info.mass}</Stat>
            <Stat><strong>Hair Color:</strong> {capitalizeText(info.hair_color)}</Stat>
            <Stat><strong>Skin Color:</strong> {capitalizeText(info.skin_color)}</Stat>
            <Stat><strong>Eye Color:</strong> {capitalizeText(info.eye_color)}</Stat>
            <Stat><strong>Birth Year:</strong> {info.birth_year}</Stat>
            <Stat><strong>Gender:</strong> {capitalizeText(info.gender)}</Stat> 
        </Card>
    )
}