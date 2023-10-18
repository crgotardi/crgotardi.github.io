import clients from '@dataset/clients.js';
import { Client, Dialog } from "@components/solid/";
import { DialogProvider } from '@contexts/dialog';

const Clients = () => {    
    return (
        <DialogProvider>
            <>
                <div class="flex items-center justify-between gap-10 overflow-x-auto">
                    {clients.map(client => (
                        <Client client={client} />
                    ))}
                </div>
                <Dialog />
            </>
        </DialogProvider>
    )
}

export default Clients