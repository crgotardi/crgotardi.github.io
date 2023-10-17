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
                    border border-sky-600 hover:border-sky-300
                    px-4 py-2
                    rounded
                    text-sky-600 hover:text-sky-200
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