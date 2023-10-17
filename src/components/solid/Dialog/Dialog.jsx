import { animate } from "motion"
import { useDialogContext } from '@contexts/dialog';

const Dialog = ({ title, children }) => {
    const { isOpen, setIsOpen } = useDialogContext()

    function closeDialog() {
        setIsOpen(false)
        animateDialog()
    }

    function animateDialog() {
        const modal = document.querySelector('.modal')
        
        animate(
            modal,
            { width: ['500px', 0] },
            { easing: "ease-in-out" }
        )
    }

    return (
        <div
            class={`modal fade fixed top-0 right-0 h-screen z-30 w-0`}
        >
            <div class="dialog">
                <div class="content h-screen p-10 flex flex-col justify-between backdrop-blur-sm bg-stone-950/90">
                    <div class="header text-right">
                        <h5 class="title">{title}</h5>
                        <button
                            type="button"
                            class="close text-lg"
                            onClick={() => closeDialog()}
                        >
                            &times;
                        </button>
                    </div>
                    <div class="body">
                        {children}
                    </div>
                    <div class="footer"></div>
                </div>
            </div>
        </div>
    );
};

export default Dialog