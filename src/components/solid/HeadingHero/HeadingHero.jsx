import styles from './HeadingHero.module.scss'

const HeadingHero = ({ text }) => {
    return (
        <h1 class={styles.hero}>
            { text }
        </h1>
    )
}

export default HeadingHero