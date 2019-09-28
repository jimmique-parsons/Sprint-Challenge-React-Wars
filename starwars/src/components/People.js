import React from 'react';

export default function People({info}) {
    return (
        <div>
            <h3>Name: {info.name}</h3>
            <p>Height: {info.height}</p>
            <p>Mass: {info.mass}</p>
        </div>
    )
}