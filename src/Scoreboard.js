import React, { Component } from 'react'
import Player from './Player'

const players = [
    {
        id: 1,
        name: 'Wouter',
        score: 2
    },
    {
        id: 2,
        name: 'Mimi',
        score: 5
    },
    {
        id: 3,
        name: 'Milan',
        score: 4
    }
]



class Scoreboard extends Component {
    renderPlayer(player) {
        return <Player
            name={player.name}
            score={player.score}
            key={player.id}
        />
    }

    render() {
        return (
            <div className="Scoreboard">
                <h1>Scoreboard</h1>
                <ul>
                    {
                        players
                            .sort((a, b) => b.score - a.score)
                            .map(this.renderPlayer)
                    }
                </ul>
            </div>
        )
    }
}

export default Scoreboard