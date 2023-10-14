const Section = ({ children }) => {
    return (
        <section
            class={`flex items-center mt-10 first:h-128 h-screen`}
        >
            { children }
        </section>
    )
}

export default Section