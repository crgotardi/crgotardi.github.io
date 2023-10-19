import { createContext, createSignal, useContext } from "solid-js";

export const ThemeContext = createContext();

export function ThemeProvider(props) {
    const [theme, setTheme] = createSignal('dark');
    const HTML = document.querySelector('html')

    function toggleTheme() {
        let newTheme = 'light'

        setTheme((theme) => {
            newTheme = 'light'

            if (theme === 'light') newTheme = 'dark'

            return newTheme
        })

        changeDOMTheme(newTheme)
    }

    function changeDOMTheme(theme) {
        let oldTheme = 'dark'
        if (theme === 'dark') oldTheme = 'light'

        HTML.classList.remove(oldTheme)
        HTML.classList.add(theme)
    }

    return (
        <ThemeContext.Provider value={{theme, toggleTheme}}>
            {props.children}
        </ThemeContext.Provider>
    );
}

export function useThemeContext() {
    const context = useContext(ThemeContext);

    if (!context) {
        throw new Error("useThemeContext: cannot find a ThemeContext")
    }

    return context;
}