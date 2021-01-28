import React from 'react';
import Style from './Person.module.css';
// import Radium from 'radium';

const person = ( props ) => {
    // const style = {
    //     '@media (max-width: 500px)': {
    //         border: '1px solid blue',
    //         borderRadius: '5px'
    //     }
    // }

    return (
        <div className={Style.Person}>
            <p onClick={props.click}>I'm a {props.name} and I am {props.age} years old.</p>
            <p>{props.children}</p>
            <input type="text" onChange={props.changed} value={props.name} />
        </div>
    )
}

export default person;