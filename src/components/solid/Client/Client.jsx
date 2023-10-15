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
                w-[30%]
                h-fit
            "
        ></img>
    )
}

export default Client