import clients from '../../../dataset/clients.js';
import Client from '../Client/Client.jsx';

const Clients = () => {
    return (
        <div class="
            flex
            items-center
            justify-between
            gap-10
            overflow-x-auto
        ">
            {clients.map(client => (
                <Client client={client} />
            ))}
        </div>
    )
}

export default Clients