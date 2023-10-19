import { Icon } from "@components/solid/";

const Button = ({ id, label, icon, cb=null }) => {
    function callback() {
        if (cb && typeof cb === "function") cb()
    }

    return (
        <>
            <button
                id={id}
                class="
                    bg-transparent 
                    border border-action-light hover:border-sky-300 dark:border-action-200 hover:dark:border-sky-200 
                    px-4 py-2
                    rounded
                    text-action-light hover:text-sky-200 dark:text-action-dark hover:dark:text-sky-200 
                    transition-all ease-in-out
                "
                onClick={() => callback()}
            >
                <span class="flex items-center gap-5">
                    {label}
                    <Icon name={icon} />
                </span>
            </button>
        </>
    )
}

export default Button