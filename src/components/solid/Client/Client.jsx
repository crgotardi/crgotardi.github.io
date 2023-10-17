import { animate } from "motion"
import { useDialogContext } from '@contexts/dialog';

const Client = ({ client }) => {
    const { setIsOpen } = useDialogContext()

    function openDialog() {
        setIsOpen(true)
        animateDialog()
    }

    function animateDialog() {
        const modal = document.querySelector('.modal')
        
        animate(
            modal,
            { width: [0, '500px'] },
            { easing: "ease-in-out" }
        )
    }

    return (
        <>
            <img
                onClick={() => openDialog()}
                src={client.logo} 
                alt={client.alt} 
                class="
                    grayscale hover:grayscale-0 
                    brightness-50 hover:brightness-100 
                    transition ease-in-out duration-150
                    cursor-pointer
                    w-[30%]
                    h-fit
                "
            ></img>
        </>
    )
}

export default Client