import clients from '../../../dataset/clients.js';
import Client from '../Client/Client.jsx';

const Clients = () => {
    return (
        <>
            {clients.map(client => (
                <Client client={client} />
            ))}
        </>
    )
}

export default Clients