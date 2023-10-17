import { createEffect } from "solid-js"
import { animate, inView } from "motion"
import { Icon } from "@components/solid/";

const Skill = ({ props }) => {
    const { icon, name, progress } = props

    createEffect(() => {
        const progressWrapper = document.querySelector(`#${icon}-wrapper`)
        const progressBar = document.querySelector(`#${icon}-progress`)

        inView(progressBar, () => {
            animate(
                progressBar,
                { width: [0, `${(130 * progress) / 100}px`], opacity: [0, 1] },
                { delay: 0.5, duration: 0.5 }
            )
            animate(
                progressWrapper,
                { opacity: 1 },
                { easing: "ease-out" }
            )
        });
    }, [])

    return (
        <>
            <div class="flex gap-5 items-center opacity-0" id={`${icon}-wrapper`}>
                <Icon name={icon} size="1.75rem" />
                <div>
                    <h5 class="title-h5 mb-1">
                        {name}
                    </h5>
                    <div class="
                        bar
                        w-[130px]
                    ">
                        <div
                            class="progress-bar-background bg-sky-950 rounded h-1 w-[130px] absolute z-0"
                        >
                        </div>
                        <div
                            id={`${icon}-progress`}
                            class="progress-bar bg-sky-600 rounded h-1 animate-linear z-10 relative"
                        >
                        </div>
                        <span class="bg-sky-600 p-1 rounded text-xs font-semibold">
                            {progress}%
                        </span>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Skill