import styles from './HeadingHero.module.scss'

const HeadingHero = ({ text }) => {
    return (
        <h1 class={`xl:text-9xl lg:text-8xl sm:text-7xl text-5xl ${styles.hero}`}>
            { text }
        </h1>
    )
}

export default HeadingHero