// import { Component } from "react";
import { useState } from "react";

import VoteActions from "./VoteActions";
import VoteStats from "./VoteStats";

import styles from "./vote.module.css";

const Vote = () => {
    const [state, setState] = useState({
        democrates: 0,
        republic: 0,
    });

    const setVote = (propertyName) => {
        setState(prevState => {
            return {
                ...prevState,
                [propertyName]: prevState[propertyName] + 1
            }
        })
    }

    const countTotal = () => {
        const total = Object.values(state).reduce((acum, item) => acum + item);
        return total;
    }

    const { democrates, republic } = state;
    const total = countTotal();

    return (
        <div className={styles.vote}>
            <VoteActions setVote={setVote} />
            <VoteStats democrates={democrates} republic={republic} total={total} />
        </div>
    )
}

export default Vote;