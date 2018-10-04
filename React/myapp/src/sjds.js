import React from 'react';
import './trolls.css';

const SJDS = ({trolls, deleteTroll}) => {
    const trollList = trolls.map(troll => {
        return troll.age > 20 ? (
            <div className="troll" key={troll.id}>
                <div>Name: {troll.name}</div>
                <div>Age: {troll.age}</div>
                <div>League: {troll.league}</div>
                <button onClick={() => {deleteTroll(troll.id)}}>Report Troll</button>
            </div> 
        ) : null;
    });

    return (
        <div className="troll-list">
            {trollList}
        </div>
    )
}

export default SJDS