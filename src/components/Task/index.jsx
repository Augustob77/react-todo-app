import styles from './tasks.module.css'

export function Task(props) {
    return (
        <div className={styles.container}>
            <p className={`${styles.title} ${props.task.isCompleted && styles.completed}`}>
                {props.task.id}. {props.task.title}
            </p>

            {!props.task.isCompleted && (
                <button
                    className={styles.button}
                    onClick={() => props.handleCompleteTask(props.task.id)}
                > 
                 ok 
                </button>
            )}
        </div>
    )
}