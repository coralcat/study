import React from 'react';
import _ from 'lodash';

export const Statistics = (props) => {
    let totalPlayers = props.players.length;
    let totalScore = _.sumBy(props.players, 'score');

    return (
        <table className="stats">
            <tbody>
            <tr>
                <td>Players:</td>
                <td>{totalPlayers}</td>
            </tr>
            <tr>
                <td>Total Points:</td>
                <td>{totalScore}</td>
            </tr>
            </tbody>
        </table>
    )
}