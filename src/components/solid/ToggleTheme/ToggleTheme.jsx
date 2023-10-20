import { animate } from "motion"
import { Icon } from "@components/solid/";
import { useThemeContext } from '@contexts/theme';

const ToggleTheme = () => {
    const { toggleTheme, theme } = useThemeContext();

    function changeTheme() {
        animateThemeToggle()
    }

    async function animateThemeToggle() {
        if (theme() === 'dark') {
            animate(".toggle-bar", { backgroundColor: '#60A5FA' }, { duration: 0.3, easing: "ease-in-out" })
            animate(".toggle-button", { x: [0, '20px'] }, { duration: 0.3, easing: "ease-in-out" }).finished.then(() => {
                toggleTheme(theme);
            })
        } else {
            animate(".toggle-bar", { backgroundColor: '#0284C7' }, { duration: 0.3, easing: "ease-in-out" })
            animate(".toggle-button", { x: ['20px', 0] }, { duration: 0.3, easing: "ease-in-out" }).finished.then(() => {
                toggleTheme(theme);
            })
        }
    }

    return (
        <>
            <div class="w-[45px] h-[25px] bg-action-dark dark:bg-action-light rounded-full toggle-bar">
                <div 
                    class="
                        toggle-button
                        w-[25px]
                        h-[25px]
                        rounded-full
                      bg-slate-500
                        flex
                        items-center
                        justify-center
                    ">
                {
                    theme() === 'light' ?
                    <Icon
                        name='sun'
                        color="
                            text-sm
                            text-gray-200
                            cursor-pointer
                            icon 
                        "
                        callback={changeTheme}
                    />
                        :
                    <Icon
                        name='moon'
                        color="
                            text-sm
                            dark:text-gray-300
                            cursor-pointer
                            icon"
                        callback={changeTheme}
                    />
                }
                </div>
            </div>
        </>
    )
}

export default ToggleTheme