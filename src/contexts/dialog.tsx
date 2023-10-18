import { createContext, createSignal, useContext } from "solid-js";

export const DialogContext = createContext();

export function DialogProvider(props) {
    const [isOpen, setIsOpen] = createSignal(false);
    const [client, setClient] = createSignal(null);

    return (
        <DialogContext.Provider value={{isOpen, setIsOpen, client, setClient}}>
            {props.children}
        </DialogContext.Provider>
    );
}

export function useDialogContext() {
    const context = useContext(DialogContext);

    if (!context) {
        throw new Error("useCounterContext: cannot find a CounterContext")
    }

    return context;
}