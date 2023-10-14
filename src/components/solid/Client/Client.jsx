const Client = ({ client }) => {
    return (
        <img 
            src={client.logo} 
            alt={client.alt} 
            class="
                grayscale hover:grayscale-0 
                brightness-50 hover:brightness-100 
                transition ease-in-out duration-150
                cursor-pointer
            "
        ></img>
    )
}

export default Client