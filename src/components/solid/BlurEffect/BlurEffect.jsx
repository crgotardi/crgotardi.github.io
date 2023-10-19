import styles from './BlurEffect.module.scss'

const BlurEffect = ({ position }) => {
    return (
        <div
            class={`${styles.blur} bg-sky-500 dark:bg-sky-900`}
            style={{ ...position }}
        ></div>
    )
}

export default BlurEffect