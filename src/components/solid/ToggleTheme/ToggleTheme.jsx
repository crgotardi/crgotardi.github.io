import { createEffect } from "solid-js";
import { animate } from "motion"
import { Icon } from "@components/solid/";
import { useThemeContext } from '@contexts/theme';

const ToggleTheme = () => {
    const { toggleTheme, theme } = useThemeContext();

    function changeTheme() {
        animateThemeIcon()
    }

    async function animateThemeIcon() {
        await animate(".icon", { opacity: [1, 0], rotate: 45 }, { duration: 0.5, easing: "ease-in-out" }).finished.then(() => {
            toggleTheme(theme);
        })
    }

    return (
        <>
            {
                theme() === 'light' ?
                <Icon
                    name='moon'
                    color="text-action-light dark:text-action-dark cursor-pointer icon hover:text-sky-200 dark:hover:text-sky-200"
                    callback={changeTheme}
                />
                    :
                <Icon
                    name='sun'
                    color="text-action-light dark:text-action-dark cursor-pointer icon hover:text-sky-200 dark:hover:text-sky-200"
                    callback={changeTheme}
                />
            }
        </>
    )
}

export default ToggleTheme