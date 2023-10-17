import { createContext, createSignal, useContext } from "solid-js";

export const DialogContext = createContext();

export function DialogProvider(props) {
    const [isOpen, setIsOpen] = createSignal(false);

    return (
        <DialogContext.Provider value={{isOpen, setIsOpen}}>
            {props.children}
        </DialogContext.Provider>
    );
}

export function useDialogContext() {
    const context = useContext(DialogContext);
    console.log(context)

    if (!context) {
        throw new Error("useCounterContext: cannot find a CounterContext")
    }

    return context;
}