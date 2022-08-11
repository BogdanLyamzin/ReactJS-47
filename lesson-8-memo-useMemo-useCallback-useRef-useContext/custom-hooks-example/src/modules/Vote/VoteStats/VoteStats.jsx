import styles from "../vote.module.css";

const VoteStats = ({democrates, republic, total}) => {
    return (
        <div className={styles.stats}>
            <p>За демократов: {democrates}</p>
            <p>За республиканцев: {republic}</p>
            <p>Всего: {total}</p>
        </div>
    )
}

export default VoteStats;