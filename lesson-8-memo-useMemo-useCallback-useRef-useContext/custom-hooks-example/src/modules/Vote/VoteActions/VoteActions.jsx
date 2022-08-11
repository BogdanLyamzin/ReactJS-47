import styles from "../vote.module.css";

const VoteActions = ({setVote}) => {
    return (
        <div className={styles.actions}>
            <button onClick={() => setVote("democrates")} type="button">За демократов!</button>
            <button onClick={() => setVote("republic")} type="button">За республиканцев!</button>
        </div>
    )
}

export default VoteActions;