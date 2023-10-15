const Section = ({ height='h-screen', justify='flex-start', children }) => {
    return (
        <section
            class={`${height} flex items-center ${justify} gap-10 flex-wrap`}
        >
            { children }
        </section>
    )
}

export default Section