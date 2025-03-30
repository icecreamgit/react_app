
import React, {FC, useState, useEffect, useContext} from 'react';
import './FunctionalElement.css'

function FunctionalElement ({ name, children }: any) {
    return (
        <div>
            <h1 className='h1'> Hello, guys! {name} {children} </h1>
        </div>
    );
}

export default FunctionalElement;

