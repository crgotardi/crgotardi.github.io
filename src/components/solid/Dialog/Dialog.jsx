import { timeline } from "motion"
import { useDialogContext } from '@contexts/dialog';
import { createEffect } from "solid-js";

const Dialog = () => {
    const { setIsOpen, client, isOpen } = useDialogContext()

    function closeDialog() {
        setIsOpen(false)
        animateCloseDialog()
    }

    createEffect(() => {
        if (isOpen() === true) {
            animateOpenDialog()
        }
    }, [isOpen()])

    function getWidth() {
        return window.innerWidth < 500 ? `${window.innerWidth}px` : `${500}px`
    }

    function animateOpenDialog() {
        const animation = {
            width: [0, getWidth()],
            opacity: [0, 1]
        }

        let sequence = [
            [
                '.modal',
                { width: animation.width },
                {
                    easing: "ease-in-out",
                    duration: 200,
                },
            ],
            [
                '.body',
                { opacity: animation.opacity },
                {
                    easing: "ease-in-out",
                    duration: 200,
                },
            ],
        ]

        timeline(sequence, { duration: 0.8 })
    }

    function animateCloseDialog() {
        const animation = {
            width: [getWidth(), 0],
            opacity: [1, 0]
        }

        let sequence = [
            [
                '.body',
                { opacity: animation.opacity },
                {
                    easing: "ease-in-out",
                    duration: 200,
                },
            ],
            [
                '.modal',
                { width: animation.width },
                {
                    easing: "ease-in-out",
                    duration: 200,
                },
            ],
        ]

        timeline(sequence, { duration: 0.8 })
    }

    return (
        <div
            class={`modal fade fixed top-0 right-0 h-screen z-30 w-0 md:max-w-[500px] max-w-screen`}
        >
            <div class="dialog">
                <div class="
                    content
                    h-screen
                    p-10
                    flex
                    flex-col
                    justify-between
                    backdrop-blur-sm
                    dark:bg-stone-950/90
                    bg-stone-300/90
                ">
                    <div class="header text-right">
                        <button
                            type="button"
                            class="close text-lg"
                            onClick={() => closeDialog()}
                        >
                            &times;
                        </button>
                    </div>
                    <div class="body" style={'opacity: 0'}>
                        <div class="text-center">
                            <img
                                src={client()?.logo}
                                alt={client()?.alt}
                                class="mx-auto"
                            ></img>
                        </div>
                        <div>
                            <p class="my-40 text-text-light dark:text-text-dark">
                                {client()?.about}
                            </p>
                        </div>
                        <div class="text-center">
                            <a
                                href={client()?.website}
                                target="_blank"
                                class="
                                    bg-transparent 
                                    border border-action-light hover:border-sky-300 dark:border-action-dark
                                    px-4 py-2
                                    rounded
                                    text-action-light hover:text-sky-200 dark:text-action-dark
                                    transition-all ease-in-out
                                "
                            >
                                website
                            </a>
                        </div>
                    </div>
                    <div class="footer"></div>
                </div>
            </div>
        </div>
    );
};

export default Dialog