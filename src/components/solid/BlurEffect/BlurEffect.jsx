import styles from './BlurEffect.module.css'

const BlurEffect = ({ position }) => {
    return (
        <div
            class={styles.blur}
            style={{ ...position }}
        ></div>
    )
}

export default BlurEffect