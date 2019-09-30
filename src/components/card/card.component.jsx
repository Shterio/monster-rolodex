import React from 'react';
import './card.styles.css';

const Card = props => {
    return (
        <div className='card-container'>
            <img alt='monster' src={`https://robohash.org/${props.monster.id}?set=set2&size=180x180`} />
            <h2>{props.monster.name}</h2>
            <p>{props.monster.phone}</p>
            <p>{props.monster.email}</p>
            <p>Username: <strong>{props.monster.username}</strong></p>
        </div>
    )
}

export default Card