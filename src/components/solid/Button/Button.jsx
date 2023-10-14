import Icon from "../Icon/Icon"

const Button = ({ id, label, icon, cb }) => {
    function callback() {
        if (cb && typeof cb === "function") cb()
    }

    return (
        <>
            <button
                id={id}
                class="
                    bg-transparent 
                    border border-slate-300
                    px-4 py-2
                    rounded
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