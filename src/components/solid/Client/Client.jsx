import { animate, timeline } from "motion"
import { useDialogContext } from '@contexts/dialog';

const Client = ({ client }) => {
    const { setIsOpen, setClient } = useDialogContext()

    function openDialog() {
        setClient(client)
        setIsOpen(true)
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